import dotenv from 'dotenv'

dotenv.config()

export const __PRODUCTION__ = process.env.NODE_ENV === 'production'
export const SECRET_JWT = process.env.SECRET_JWT!
