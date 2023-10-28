import { GraphQLError } from 'graphql'
import { ApolloContext } from '~/apollo'
import { decodeToken } from '~/utils/jwt.util'

export const isAuth = (context: ApolloContext) => {
  if (!context.token)
    throw new GraphQLError('User is not authenticated', {
      extensions: {
        code: 'UNAUTHENTICATED',
        http: { status: 401 }
      }
    })
  return decodeToken(context.token)
}

export const isAdmin = (context: ApolloContext) => {
  const { role } = isAuth(context)
  if (role !== 'ADMIN') {
    throw new GraphQLError('forbidden', {
      extensions: {
        code: 'FORBIDDEN',
        http: { status: 403 }
      }
    })
  }
  return true
}
