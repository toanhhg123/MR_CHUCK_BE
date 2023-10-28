import { Resolvers } from '~/SchemaGraphql/types.generated'
import prisma from '~/config/db'
import userService from '~/user/user.service'

export const roleResolvers: Resolvers = {
  Query: {
    getRoles: async (_, __) => {
      return await prisma.role.findMany()
    }
  },

  Mutation: {
    createRole: async (_, args) => {
      await prisma.role.create({ data: { name: args.name } })
      return args.name
    }
  },

  Role: {
    users: async (parent) => {
      return await userService.getUserByRole(parent.name)
    }
  }
}

export default roleResolvers
