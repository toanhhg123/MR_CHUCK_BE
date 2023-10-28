import { MessageTextCreate, Resolvers } from '~/SchemaGraphql/types.generated'
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
      const messageBox = await messageService.getMessageBoxsByUserId(id.toString())
      return messageBox
    },

    getMessageByMessageBoxId: async (_, { messageTextBoxQuery }, context) => {
      isAuth(context)
      return await messageService.queryMessageByMessageBoxId(messageTextBoxQuery)
    }
  },

  Mutation: {
    createMessageBox: async (_, { input }, context) => {
      const { id } = isAuth(context)

      return await messageService.createMessageBox({
        ownerId: id.toString(),
        name: input.name,
        location: input.location,
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
    },

    sendMessage: async (_, { messageTextCreate }, context) => {
      const { id } = isAuth(context)
      const message = await messageService.createMessageText(id.toString(), messageTextCreate as MessageTextCreate)

      return message
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
  },

  MessageTextBox: {
    sender: async ({ senderId, sender }) => {
      return sender ? sender : userService.getUserById(senderId)
    },

    reply: async ({ reply, replyId }) => {
      if (!replyId) return null
      return reply ? reply : messageService.getMessageTextById(replyId)
    }
  }
}

export default messageResolvers
