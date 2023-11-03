import { Resolvers } from '~/SchemaGraphql/types.generated'
import { isAuth } from '~/auth/auth.guard'
import roleService from '~/role/role.service'
import userService from './user.service'

export const userResolvers: Resolvers = {
  Query: {
    getUsers: async (_, __, context) => {
      isAuth(context)

      const users = await userService.getUsers()
      return users
    },

    searchUser: async (_, { query }) => {
      return userService.findUserByEmailOrUsername(query)
    }
  },

  Mutation: {
    createUser: async (_, { userRequestCreate }) => {
      // isAdmin(context)

      const user = await userService.createUser(userRequestCreate)
      return user.id
    },

    deleteUser: async (_, { id }) => {
      await userService.deleteUserById(id)
      return id
    }
  },

  User: {
    roleRef: async (parent) => {
      return await roleService.findRoleByName(parent.role)
    }
  }
}

export default userResolvers
