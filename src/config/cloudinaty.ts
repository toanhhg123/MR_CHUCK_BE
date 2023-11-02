import { UploadApiResponse, v2 as cloudinary } from 'cloudinary'
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME, CLOUDINARY_FOLDER_NAME } from './env'
import streamifier from 'streamifier'

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET
})

export const uploadToCloudinary = (file: Express.Multer.File) => {
  return new Promise<UploadApiResponse>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream({ folder: CLOUDINARY_FOLDER_NAME }, (error, result) => {
      if (result) {
        resolve(result)
      } else {
        reject(error)
      }
    })

    streamifier.createReadStream(file.buffer).pipe(stream)
  })
}

export const deleteImagesUpload = (id: string) => {
  return new Promise<UploadApiResponse>((resolve, reject) => {
    cloudinary.uploader.destroy(`${CLOUDINARY_FOLDER_NAME}/${id}`).then(resolve).catch(reject).finally(reject)
  })
}

export default cloudinary
