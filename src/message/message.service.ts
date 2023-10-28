import {
  MessageBox,
  MessageBoxMemberCreate,
  MessageTextBoxQuery,
  MessageTextCreate
} from '~/SchemaGraphql/types.generated'
import prisma from '~/config/db'

export class MessageService {
  async isOwnerInMessageBox(userId: string, messageBoxId: string) {
    const isUserCreated = prisma.messageBox.findFirst({ where: { ownerId: userId } })
    const isOwner = prisma.messageBoxMember.findFirst({ where: { messageBoxId: messageBoxId, userId, type: 'OWNER' } })
    return (await isOwner) || (await isUserCreated) ? true : false
  }

  async isMemberInMessageBok(userId: string, messageBoxId: string) {
    const isUserCreated = prisma.messageBox.findFirst({ where: { ownerId: userId } })
    const isOwner = prisma.messageBoxMember.findFirst({ where: { messageBoxId: messageBoxId, userId } })

    return (await isOwner) || (await isUserCreated) ? true : false
  }

  getMessageBoxsByUserId(userId: string) {
    return prisma.messageBox.findMany({
      where: {
        OR: [
          {
            ownerId: userId
          },
          {
            messageBoxMembers: {
              some: {
                userId
              }
            }
          }
        ]
      },
      include: {
        owner: true,
        messageBoxMembers: {
          include: { user: true }
        }
      }
    })
  }

  getMessage(id: string) {
    return prisma.messageBox.findFirst({
      where: { id },
      include: {
        owner: true,
        messageBoxMembers: {
          include: { user: true }
        },
        messageTexts: true
      }
    })
  }

  createMessageBox({ ownerId, name, location }: MessageBox) {
    return prisma.messageBox.create({
      data: {
        name,
        ownerId,
        location
      }
    })
  }

  async createMessageText(senderId: string, messageCreate: MessageTextCreate) {
    return prisma.messageTextBox.create({
      data: {
        ...messageCreate,
        senderId
      },
      include: {
        replies: true,
        sender: true,
        reply: true
      }
    })
  }

  async queryMessageByMessageBoxId({ totalPage, pageIndex, messageBoxId }: MessageTextBoxQuery) {
    pageIndex = pageIndex || 1

    const limit = 50

    return prisma.messageTextBox.findFirst({
      where: { messageBoxId },
      skip: (pageIndex - 1) * limit,
      take: limit
    })
  }

  async getMessageTextById(id: string) {
    return prisma.messageTextBox.findFirst({
      where: { id }
    })
  }

  async createMessageBoxMember(messageBoxMember: MessageBoxMemberCreate) {
    const isExsit = await prisma.messageBoxMember.findFirst({
      where: { messageBoxId: messageBoxMember.messageBoxId, userId: messageBoxMember.userId }
    })

    if (isExsit) {
      throw new Error('user is exist in box chat')
    }

    return prisma.messageBoxMember.create({
      data: messageBoxMember
    })
  }
}

export default new MessageService()
