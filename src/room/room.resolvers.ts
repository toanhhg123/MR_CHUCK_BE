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

      return roomService.getRoomByCaseId(caseId)
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

    addUsersToRoom: async (_, { userRoomInput: { userIds, roomId } }, context) => {
      const { id } = isAuth(context)

      if (!(await roomService.isOwnerRoom(id.toString(), roomId))) {
        throw new Error('user is not owner')
      }

      return roomService.addUsersToRooms(userIds as string[], roomId)
    }
  }
}

export default roomResolvers
