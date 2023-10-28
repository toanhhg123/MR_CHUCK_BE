import jwt from 'jsonwebtoken'
import { User } from '~/SchemaGraphql/types.generated'
import { SECRET_JWT } from '~/config/env'

export type UserPayloadToken = Omit<User, 'password' | 'roleRef'>

export const signToken = ({ id, username, email, role }: User) => {
  return jwt.sign({ id, username, email, role }, SECRET_JWT, {
    expiresIn: '1d'
  })
}

export const decodeToken = (token: string) => {
  return jwt.verify(token, SECRET_JWT) as UserPayloadToken
}
