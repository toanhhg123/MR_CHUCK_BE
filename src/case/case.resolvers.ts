import { CaseInput, Resolvers } from '~/SchemaGraphql/types.generated'
import { isAuth } from '~/auth/auth.guard'
import caseService from './case.service'
import roomService from '~/room/room.service'
import messageCaseService from '~/messageCase/messageCase.service'

const caseResolvers: Resolvers = {
  Query: {
    getMyCases: (_, __, context) => {
      const { id } = isAuth(context)
      return caseService.getMyCase(id.toString())
    },

    getCaseById: async (_, { caseId }, context) => {
      const { id } = isAuth(context)

      if (!(await caseService.isMemberInCase(caseId, id.toString()))) {
        throw new Error('user not member')
      }

      return caseService.getCaseById(caseId)
    }
  },

  Mutation: {
    createCase: async (_, { caseInput }, context) => {
      const { id } = isAuth(context)
      const caseCreated = await caseService.createCase(
        caseInput as CaseInput,
        id.toString()
      )

      if (caseCreated) {
        await caseService.createUserCase({
          caseId: caseCreated.id,
          userIds: [id.toString()]
        })
      }

      return caseCreated
    },

    updateCase: async (_, { caseId, input }, context) => {
      const { id } = isAuth(context)

      if (!(await caseService.isOwnerCase(id.toString(), caseId))) {
        throw new Error('user not owner')
      }

      return caseService.updateCase(caseId, input)
    },

    addUserToCase: async (_, { input }, context) => {
      const { id } = isAuth(context)

      if (!(await caseService.isOwnerCase(id.toString(), input.caseId))) {
        throw new Error('user not owner')
      }
      const caseCreated = await caseService.createUserCase(input)

      if (!caseCreated) throw new Error('user not owner')

      return caseCreated
    },

    addJunrorToCase: async (_, { caseId, num }, context) => {
      const { id } = isAuth(context)

      if (!(await caseService.isOwnerCase(id.toString(), caseId))) {
        throw new Error('user not owner')
      }

      return caseService.addJunrorsVersionFreeToCase(num, caseId)
    }
  },

  Case: {
    rooms: ({ rooms, id }) => {
      return rooms ? rooms : roomService.getRoomsByCaseId(id.toString())
    },
    messageCases: ({ messageCases, id }) => {
      return messageCases
        ? messageCases
        : messageCaseService.getByCaseId(id.toString())
    }
  }
}

export default caseResolvers
