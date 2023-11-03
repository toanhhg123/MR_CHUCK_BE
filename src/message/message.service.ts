import { MessageCaseInput } from '~/SchemaGraphql/types.generated'
import prisma from '~/config/db'

const { message } = prisma

export class MessageService {
  getMessageByRoomId(roomId: string) {
    return message.findMany({
      where: { roomId },
      include: {
        replies: true,
        reply: true,
        sender: true
      },
      orderBy: {
        dateCreated: 'asc'
      }
    })
  }

  createMessage(input: MessageCaseInput, senderId: string) {
    return message.create({
      data: {
        ...input,
        senderId
      },
      include: {
        sender: true,
        replies: true
      }
    })
  }
}

export default new MessageService()
