import { Resolvers } from '~/SchemaGraphql/types.generated'
import { isAdmin } from '~/auth/auth.guard'
import prisma from '~/config/db'
import userService from '~/user/user.service'

export const roleResolvers: Resolvers = {
  Query: {
    getRoles: async (_, __, context) => {
      isAdmin(context)

      return await prisma.role.findMany()
    }
  },

  Mutation: {
    createRole: async (_, args, context) => {
      isAdmin(context)

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
