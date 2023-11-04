import { MessageCaseInput } from '~/SchemaGraphql/types.generated'
import prisma from '~/config/db'

const { messageCase } = prisma

export class MessageCase {
  create(senderId: string, input: MessageCaseInput) {
    return messageCase.create({
      data: { ...input, senderId },
      include: { sender: true, replies: true, reply: true, case: true }
    })
  }

  getByCaseId(caseId: string) {
    return messageCase.findMany({
      where: { caseId },
      include: {
        replies: {
          include: { sender: true }
        },
        reply: true,
        sender: true
      },
      orderBy: {
        dateCreated: 'asc'
      }
    })
  }
}

export default new MessageCase()
