import { ApolloServer } from '@apollo/server'
import { typeDefs } from './SchemaGraphql/typeDefs.generated'
import roleResolvers from './role/role.resolvers'
import userResolvers from './user/user.resolever'
import authResolves from './auth/auth.resolvers'
import messageResolvers from './message/message.resolvers'

export type ApolloContext = {
  token?: string
}

const server = new ApolloServer<ApolloContext>({
  typeDefs: typeDefs,
  resolvers: [userResolvers, roleResolvers, authResolves, messageResolvers],
  formatError: (formattedError) => {
    return formattedError
  }
})

export default server
