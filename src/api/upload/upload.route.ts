import { Router } from 'express'
import { deleteImagesUpload, uploadToCloudinary } from '~/config/cloudinaty'
import upload from '~/config/multer'

const router = Router()

router.post('/', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      throw new Error('no file upload')
    }

    const result = await uploadToCloudinary(req.file)

    return res.status(201).json({
      message: 'success',
      data: result,
      status: 'success'
    })
  } catch (err: any) {
    return res.status(400).json({ error: err.message || err })
  }
})

router.post('/delete', async (req, res) => {
  try {
    const result = await deleteImagesUpload(req.body.image)

    return res.status(201).json({
      message: 'success',
      data: result,
      status: 'success'
    })
  } catch (err: any) {
    return res.status(400).json({ error: err.message || err })
  }
})

export default router
