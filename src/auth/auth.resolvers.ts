import { Resolvers } from '~/SchemaGraphql/types.generated'
import userService from '~/user/user.service'
import { signToken } from '~/utils/jwt.util'
import { isAuth } from './auth.guard'

export const authResolves: Resolvers = {
  Query: {
    getMe: async (_, __, context) => {
      const { id } = isAuth(context)
      return await userService.getUserById(id.toString())
    }
  },

  Mutation: {
    login: async (_, { authRequest: { email, password } }) => {
      const user = await userService.validateLoginWithGraph(email, password)

      return {
        accessToken: signToken(user),
        refreshTokens: ''
      }
    }
  }
}

export default authResolves
