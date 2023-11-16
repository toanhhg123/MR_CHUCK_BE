import { Router } from 'express'
import { uniqueId } from 'lodash'
import path from 'path'
import { deleteImagesUpload, uploadToCloudinary } from '~/config/cloudinaty'
import upload from '~/config/multer'

const router = Router()

router.post('/', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      throw new Error('no file upload')
    }

    req.file.originalname = uniqueId() + path.extname(req.file.originalname)

    // const b64 = Buffer.from(req.file.buffer).toString('base64')
    // const dataURI = 'data:' + req.file.mimetype + ';base64,' + b64

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

router.post('/files', upload.array('files', 5), async (req, res) => {
  try {
    if (!req.files?.length) {
      throw new Error('no file upload')
    }

    const files = req.files as Express.Multer.File[]

    // const b64 = Buffer.from(req.file.buffer).toString('base64')
    // const dataURI = 'data:' + req.file.mimetype + ';base64,' + b64

    const result = await Promise.all(
      files.map((file) => uploadToCloudinary(file))
    )

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
