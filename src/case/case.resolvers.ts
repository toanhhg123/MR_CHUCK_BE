import { CaseInput, Resolvers } from '~/SchemaGraphql/types.generated'
import { isAuth } from '~/auth/auth.guard'
import caseService from './case.service'

const caseResolvers: Resolvers = {
  Query: {
    getMyCases: (_, __, context) => {
      const { id } = isAuth(context)
      return caseService.getMyCase(id.toString())
    }
  },

  Mutation: {
    createCase: (_, { caseInput }, context) => {
      const { id } = isAuth(context)
      return caseService.createCase(caseInput as CaseInput, id.toString())
    }
  }
}

export default caseResolvers
