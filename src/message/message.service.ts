import { MessageBox, MessageBoxMemberCreate } from '~/SchemaGraphql/types.generated'
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

    console.log(await isOwner, await isUserCreated)

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
        }
      }
    })
  }

  createMessageBox({ ownerId, name }: MessageBox) {
    return prisma.messageBox.create({
      data: {
        name,
        ownerId
      }
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
