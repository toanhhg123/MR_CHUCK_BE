import * as bcrypt from 'bcryptjs'
import { GraphQLError } from 'graphql'
import prisma from '~/config/db'

export class AuthService {
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
}

export default new AuthService()
