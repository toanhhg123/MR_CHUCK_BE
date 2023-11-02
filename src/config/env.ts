import dotenv from 'dotenv'

dotenv.config()

export const __PRODUCTION__ = process.env.NODE_ENV === 'production'
export const SECRET_JWT = process.env.SECRET_JWT!

export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME!
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY!
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET!
export const CLOUDINARY_FOLDER_NAME = process.env.CLOUDINARY_FOLDER_NAME!
