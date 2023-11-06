import { MessageRoomInput } from '~/SchemaGraphql/types.generated'
import prisma from '~/config/db'

const { message } = prisma

export const includeMessage = {
  replies: {
    include: { reply: true }
  },
  reply: {
    include: {
      sender: true
    }
  },
  sender: true
}
export class MessageService {
  getMessageByRoomId(roomId: string) {
    return message.findMany({
      where: { roomId },
      include: includeMessage,
      orderBy: {
        dateCreated: 'asc'
      }
    })
  }

  createMessage(input: MessageRoomInput, senderId: string) {
    return message.create({
      data: {
        ...input,
        senderId
      },
      include: includeMessage
    })
  }
}

export default new MessageService()
