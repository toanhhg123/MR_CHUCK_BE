import { MessageRoomInput } from '~/SchemaGraphql/types.generated'
import prisma from '~/config/db'

const { message } = prisma

const include = {
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
      include,
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
      include
    })
  }
}

export default new MessageService()
