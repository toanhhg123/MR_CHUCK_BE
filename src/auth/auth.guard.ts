import { StatusCodes } from 'http-status-codes'
import { ApolloContext } from '~/apollo'
import { GraphQlErrorHttp } from '~/config/error'
import { decodeToken } from '~/utils/jwt.util'

export const isAuth = (context: ApolloContext) => {
  if (!context.token)
    throw GraphQlErrorHttp(
      StatusCodes.UNAUTHORIZED,
      'User is not authenticated'
    )
  return decodeToken(context.token)
}

export const isAdmin = (context: ApolloContext) => {
  const { role } = isAuth(context)
  if (role !== 'ADMIN') {
    throw GraphQlErrorHttp(StatusCodes.FORBIDDEN, 'FORBIDDEN')
  }
  return true
}
