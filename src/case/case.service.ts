import {
  CaseInput,
  CaseInputUpdate,
  UserCaseInput
} from '~/SchemaGraphql/types.generated'
import prisma from '~/config/db'
import _ from 'lodash'
import { Case } from '@prisma/client'

const { case: CaseModel, userCase } = prisma

export class CaseService {
  getCaseByUserId(userCreatedId: string) {
    return CaseModel.findMany({
      where: { userCreatedId },
      include: {
        location: true
      }
    })
  }

  async isAllInCase(userIds: string[], caseId: string) {
    const all = await userCase.findMany({
      where: { OR: userIds.map((userId) => ({ caseId, userId })) }
    })
    return all.length === userIds.length ? true : false
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
          },
          {
            userCases: {
              some: {
                userId: userId
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
        userCreatedId,
        sjqSubmissionDate: new Date(input.sjqSubmissionDate)
      },
      include: {
        location: true
      }
    })
  }

  async isMemberInCase(caseId: string, userId: string) {
    const isExist = await userCase.findFirst({
      where: {
        userId,
        caseId
      }
    })

    return isExist ? true : false
  }

  getCaseById(id: string) {
    return CaseModel.findFirst({
      where: { id },
      include: {
        userCases: {
          include: {
            user: {
              include: {
                avatarImage: true
              }
            }
          }
        },
        userCreated: true
      }
    })
  }

  async createUserCase(input: UserCaseInput) {
    const userCasesDb = await userCase.findMany({
      where: { caseId: input.caseId }
    })

    const userIdInserts = input.userIds.filter((id) => {
      return !userCasesDb.find((userCase) => userCase.userId === id)
    })

    const uniqueArray = _.uniq(userIdInserts)

    await userCase.createMany({
      data: uniqueArray.map((userId) => ({ userId, caseId: input.caseId }))
    })

    return this.getCaseById(input.caseId)
  }

  updateCase(caseId: string, input: CaseInputUpdate) {
    if (input.sjqSubmissionDate)
      input.sjqSubmissionDate = new Date(input.sjqSubmissionDate)
    return CaseModel.update({ data: input as Case, where: { id: caseId } })
  }

  async addJunrorsToCase(num: number, caseId: string) {
    const [userJunrors, userCases] = await Promise.all([
      prisma.user.findMany({ where: { role: 'JUROR' } }),
      prisma.userCase.findMany({ where: { caseId } })
    ])

    const userCaseIds = userCases.map((user) => user.userId)

    const usersNotInCases = userJunrors.filter(
      (userJunror) => !userCaseIds.includes(userJunror.id)
    )

    await prisma.userCase.createMany({
      data: usersNotInCases
        .slice(0, num)
        .map((user) => ({ caseId, userId: user.id }))
    })

    return this.getCaseById(caseId)
  }
}

export default new CaseService()
