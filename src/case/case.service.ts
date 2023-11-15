import {
  CaseInput,
  CaseInputUpdate,
  OptionAddJunror,
  UserCaseInput
} from '~/SchemaGraphql/types.generated'
import prisma from '~/config/db'
import _ from 'lodash'
import { Case } from '@prisma/client'
import { GraphQlErrorHttp } from '~/config/error'
import { StatusCodes } from 'http-status-codes'

const { case: CaseModel, userCase } = prisma

export class CaseService {
  getCaseByUserId(userCreatedId: string) {
    return CaseModel.findMany({
      where: { userCreatedId },
      include: {
        location: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
  }

  async validateNumberCase(num: string) {
    if (await CaseModel.findFirst({ where: { number: num } })) {
      throw GraphQlErrorHttp(StatusCodes.CONFLICT, 'case number is exist')
    }
  }

  async isAllInCase(userIds: string[], caseId: string) {
    const all = await userCase.findMany({
      where: { OR: userIds.map((userId) => ({ caseId, userId })) }
    })
    return all.length === userIds.length ? true : false
  }

  async isOwnerCase(userCreatedId: string, caseId: string) {
    const isExist = await CaseModel.findFirst({
      where: { userCreatedId, id: caseId }
    })
    return isExist ? true : false
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
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
  }

  async createCase(input: CaseInput, userCreatedId: string) {
    await this.validateNumberCase(input.number)

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
            user: {}
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

  async updateCase(caseId: string, input: CaseInputUpdate) {
    const caseUpdate = await CaseModel.findFirst({ where: { id: caseId } })
    if (!caseUpdate)
      throw GraphQlErrorHttp(StatusCodes.BAD_REQUEST, 'case is not exist')

    if (input.number === caseUpdate.number) {
      delete input.number
    }

    if (input.sjqSubmissionDate)
      input.sjqSubmissionDate = new Date(input.sjqSubmissionDate)

    return CaseModel.update({ data: input as Case, where: { id: caseId } })
  }

  async addJurorsVersionFreeToCase(num: number, caseId: string) {
    const [userJurors, userCases] = await Promise.all([
      prisma.user.findMany({ where: { role: 'JUROR', paidVersion: 'FREE' } }),
      prisma.userCase.findMany({ where: { caseId } })
    ])

    const userCaseIds = userCases.map((user) => user.userId)

    const usersNotInCases = userJurors.filter(
      (userJuror) => !userCaseIds.includes(userJuror.id)
    )

    await prisma.userCase.createMany({
      data: usersNotInCases
        .slice(0, num)
        .map((user) => ({ caseId, userId: user.id }))
    })

    return this.getCaseById(caseId)
  }

  async addJunrorsVersionPaidToCase(
    num: number,
    caseId: string,
    option: OptionAddJunror
  ) {
    const userCases = await prisma.userCase.findMany({ where: { caseId } })

    option = _.omitBy(option, _.isNil)

    const { ageRange, raceOrEthnicity, ...restOption } = option

    let ageFilter = undefined

    if (ageRange) {
      ageFilter = {
        gte: ageRange[0],
        lte: ageRange[1]
      }
    }

    const usersVersionPaid = await prisma.user.findMany({
      where: {
        ...restOption,
        etnicity: raceOrEthnicity,
        paidVersion: 'PAID',
        age: ageFilter,
        id: {
          notIn: userCases.map((user) => user.userId)
        }
      },
      take: num
    })

    const { count } = await prisma.userCase.createMany({
      data: usersVersionPaid.map((user) => ({ caseId, userId: user.id }))
    })

    console.log(`model UserCase inserted ${count} record`)

    return this.getCaseById(caseId)
  }
}

export default new CaseService()
