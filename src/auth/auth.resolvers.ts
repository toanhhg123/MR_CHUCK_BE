import { Resolvers } from '~/SchemaGraphql/types.generated'
import userService from '~/user/user.service'
import { signToken } from '~/utils/jwt.util'
import { isAuth } from './auth.guard'
import authService from './auth.service'

export const authResolves: Resolvers = {
  Query: {
    getMe: async (_, __, context) => {
      const { id } = isAuth(context)
      return await userService.getUserById(id.toString())
    }
  },

  Mutation: {
    login: async (_, { authRequest: { email, password } }) => {
      const user = await authService.validateLoginWithGraph(email, password)

      return {
        accessToken: signToken(user),
        refreshTokens: ''
      }
    },

    register: async (_, { input: { email, password, username } }) => {
      if (await userService.getByEmail(email)) throw new Error('email is exist !!')

      await userService.createUser({ username, email, password, role: 'USER' })

      const user = await authService.validateLoginWithGraph(email, password)

      return {
        accessToken: signToken(user),
        refreshTokens: ''
      }
    }
  }
}

export default authResolves
