import { Resolvers } from '~/SchemaGraphql/types.generated'
import { isAuth } from '~/auth/auth.guard'
import roomService from '~/room/room.service'
import messageService from './message.service'

export const messageResolvers: Resolvers = {
  Query: {
    getMessageByRoomId: async (_, { roomId }, context) => {
      const { id } = isAuth(context)

      if (!(await roomService.isMemberInRoom(id.toString(), roomId))) {
        throw new Error('you is not member in room')
      }

      return await messageService.getMessageByRoomId(roomId)
    }
  },

  Mutation: {
    sendMessageToRoom: async (_, { input }, context) => {
      const { id } = isAuth(context)

      if (!(await roomService.isMemberInRoom(id.toString(), input.roomId))) {
        throw new Error('you is not member in room')
      }
      return await messageService.createMessage(input, id.toString())
    }
  },

  Message: {
    room: ({ room, roomId }) => {
      return room ? room : roomService.getRoomById(roomId)
    }
  }
}

export default messageResolvers
