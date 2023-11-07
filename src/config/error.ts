import { GraphQLError } from 'graphql'
import { StatusCodes, getReasonPhrase } from 'http-status-codes'

export const GraphQlErrorHttp = (status: StatusCodes, message?: string) =>
  new GraphQLError(message || getReasonPhrase(status), {
    extensions: {
      code: getReasonPhrase(status),
      http: { status: status }
    }
  })
