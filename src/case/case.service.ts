import { CaseInput } from '~/SchemaGraphql/types.generated'
import prisma from '~/config/db'

const { case: CaseModel } = prisma

export class CaseService {
  getCaseByUserId(userCreatedId: string) {
    return CaseModel.findMany({
      where: { userCreatedId },
      include: {
        location: true
      }
    })
  }

  async isOwnerCase(userCreatedId: string, caseId: string) {
    const isExsit = await CaseModel.findFirst({
      where: { userCreatedId, id: caseId }
    })
    return isExsit ? true : false
  }

  getMyCase(userId: string) {
    return CaseModel.findMany({
      where: {
        OR: [
          { userCreatedId: userId },
          {
            rooms: {
              some: {
                userRooms: {
                  some: {
                    userId
                  }
                }
              }
            }
          }
        ]
      },
      include: {
        location: true,
        rooms: {
          include: {
            userRooms: {
              include: { user: true }
            }
          }
        }
      }
    })
  }

  createCase(input: CaseInput, userCreatedId: string) {
    return CaseModel.create({
      data: {
        ...input,
        userCreatedId
      },
      include: {
        location: true
      }
    })
  }

  async isMemberInCase(caseId: string, userId: string) {
    const isExist = await CaseModel.findFirst({
      where: {
        id: caseId,
        OR: [
          {
            rooms: {
              some: {
                userRooms: {
                  some: {
                    userId
                  }
                }
              }
            }
          },
          { userCreatedId: userId }
        ]
      }
    })

    return isExist ? true : false
  }
}

export default new CaseService()
