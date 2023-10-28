import bcrypt from 'bcryptjs'
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
