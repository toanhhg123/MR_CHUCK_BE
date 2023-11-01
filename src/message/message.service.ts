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
}

export default new MessageService()
