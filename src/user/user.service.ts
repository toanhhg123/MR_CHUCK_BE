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

  findUserByEmailOrUsername(query: string) {
    return prisma.user.findMany({
      where: {
        OR: [
          {
            username: {
              contains: query,
              mode: 'insensitive'
            }
          },
          {
            email: {
              contains: query,
              mode: 'insensitive'
            }
          },
          {
            lastName: {
              contains: query,
              mode: 'insensitive'
            }
          },
          {
            firstName: {
              contains: query,
              mode: 'insensitive'
            }
          }
        ]
      },
      take: 20 // Limit the results to 20 records
    })
  }

  getByEmail(email: string) {
    return prisma.user.findFirst({ where: { email } })
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
