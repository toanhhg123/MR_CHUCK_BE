import { MessageCaseInput, Resolvers } from '~/SchemaGraphql/types.generated'
import { isAuth } from '~/auth/auth.guard'
import caseService from '~/case/case.service'
import messageCaseService from './messageCase.service'

const messageCaseResolver: Resolvers = {
  Mutation: {
    createMessageCase: async (_, { input }, context) => {
      const { id } = isAuth(context)
      if (!(await caseService.isMemberInCase(input.caseId, id.toString())))
        throw new Error('user is not member')

      return messageCaseService.create(id.toString(), input as MessageCaseInput)
    }
  }
}

export default messageCaseResolver
