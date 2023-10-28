import bcrypt from 'bcryptjs'
import { GraphQLError } from 'graphql'
import { ERole, UserRequestCreate } from '~/SchemaGraphql/types.generated'
import prisma from '~/config/db'

export class UserService {
  createUser(user: UserRequestCreate) {
    return prisma.user.create({
      data: {
        ...user,
        password: bcrypt.hashSync(user.password)
      }
    })
  }

  async validateLoginWithGraph(email: string, password: string) {
    const user = await prisma.user.findFirst({ where: { email } })

    if (!user)
      throw new GraphQLError('email not found', {
        extensions: { code: 'UNAUTHENTICATED' }
      })

    if (!bcrypt.compareSync(password, user.password)) {
      throw new GraphQLError('incorrect password', {
        extensions: { code: 'UNAUTHENTICATED' }
      })
    }

    return user
  }

  getUsers() {
    return prisma.user.findMany()
  }

  deleteUserById(id: string) {
    return prisma.user.delete({ where: { id } })
  }

  getUserById(id: string) {
    return prisma.user.findFirst({ where: { id } })
  }

  getUserByRole(role: ERole) {
    return prisma.user.findMany({ where: { role } })
  }
}

export default new UserService()
