import { Resolvers } from '~/SchemaGraphql/types.generated'
import messageService from './message.service'
import { isAuth } from '~/auth/auth.guard'
import { GraphQLError } from 'graphql'
import userService from '~/user/user.service'

export const messageResolvers: Resolvers = {
  Query: {
    getMessage: async (_, { id }, context) => {
      const { id: userId } = isAuth(context)

      if (!(await messageService.isMemberInMessageBok(userId.toString(), id))) {
        throw new GraphQLError('you is not member in box chat', {
          extensions: {
            code: 'FORBIDDEN',
            http: { status: 403 }
          }
        })
      }

      const messageBox = await messageService.getMessage(id)
      return messageBox
    },

    getMessageBoxForMe: async (_, __, context) => {
      const { id } = isAuth(context)
      return messageService.getMessageBoxsByUserId(id.toString())
    }
  },

  Mutation: {
    createMessageBox: async (_, { input }, context) => {
      const { id } = isAuth(context)

      return await messageService.createMessageBox({
        ownerId: id.toString(),
        name: input.name,
        id: '',
        dateCreated: new Date()
      })
    },

    createMessageBoxMember: async (_, { input }, context) => {
      const { id } = isAuth(context)

      if (!(await messageService.isOwnerInMessageBox(id.toString(), input.messageBoxId))) {
        throw new GraphQLError('you is not owner', {
          extensions: {
            code: 'FORBIDDEN',
            http: { status: 403 }
          }
        })
      }

      return await messageService.createMessageBoxMember(input)
    }
  },

  MessageBox: {
    owner: async (parent) => {
      return parent.owner ? parent.owner : await userService.getUserById(parent.ownerId)
    }
  },

  MessageBoxMember: {
    user: async (parent) => {
      return parent.user ? parent.user : await userService.getUserById(parent.userId)
    }
  }
}

export default messageResolvers
