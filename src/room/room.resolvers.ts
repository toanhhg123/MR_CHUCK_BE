import { InputRoom, Resolvers } from '~/SchemaGraphql/types.generated'
import { isAuth } from '~/auth/auth.guard'
import caseService from '~/case/case.service'
import roomService from './room.service'

const roomResolvers: Resolvers = {
  Query: {
    getRoomsByCaseId: async (_, { caseId }, context) => {
      const { id } = isAuth(context)

      if (!(await caseService.isMemberInCase(caseId, id.toString()))) {
        throw new Error('not found case for user')
      }

      return roomService.getRoomsByCaseId(caseId)
    },

    getRoomById: async (_, { roomId }, context) => {
      const { id } = isAuth(context)

      const room = await roomService.getRoomById(roomId.toString())

      if (!room) throw new Error('not found room')

      if (!(await caseService.isMemberInCase(room.caseId, id.toString()))) {
        throw new Error('user is not owner')
      }

      return room
    },

    getRoomBoxByUserId: async (_, { userId, caseId }, context) => {
      const { id } = isAuth(context)

      const isAllow = await Promise.all([
        caseService.isMemberInCase(caseId, userId),
        caseService.isMemberInCase(caseId, id.toString())
      ])

      if (!isAllow[0] || !isAllow[1])
        throw new Error(`you or user selected not is member in case ${id}`)

      return roomService.getRoomBoxByUserId(id.toString(), userId, caseId)
    }
  },

  Mutation: {
    createRoom: async (_, { input }, context) => {
      const { id } = isAuth(context)

      if (!(await caseService.isMemberInCase(input.caseId, id.toString()))) {
        throw new Error('user is not owner')
      }

      return roomService.createRoom(input as InputRoom)
    },

    addUsersToRoom: async (
      _,
      { userRoomInput: { userIds, roomId } },
      context
    ) => {
      const { id } = isAuth(context)

      const room = await roomService.getRoomById(roomId)

      if (!room) throw new Error('room not found')

      if (!(await caseService.isAllInCase(userIds as string[], room.caseId))) {
        throw new Error(
          'exsit user in list userIds send request is not member in case'
        )
      }

      if (!(await roomService.isOwnerRoom(id.toString(), roomId))) {
        throw new Error('user is not owner')
      }

      return roomService.addUsersToRooms(userIds as string[], roomId)
    },

    addUserToRooms: async (_, { userId, roomIds }) => {
      return roomService.addUserToRooms(userId, roomIds)
    }
  }
}

export default roomResolvers
