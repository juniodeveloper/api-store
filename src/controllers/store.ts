import { Request, Response } from 'express'
import * as fs from 'fs'
import multer from 'multer'
import path from 'path'
import multerConfig from '../config/multer'
import tempUploadSchema from '../schemas/temp-upload'
const upload = multer(multerConfig).single('apk')

class Store {

  async uploadApp (req: Request, res: Response) {

    return upload(req, res, async function (error) {

      if (error) {
        return res.status(400).json(
          {
            sucess: false,
            message: error.code
          }
        )
      }

      const data = {
        dev_id: '12345',
        name_app: req.file?.filename,
        size: req.file?.size,
        package: req.body.package,
        sha256: req.body.sha256,
        sha1: req.body.sha1,
        version: req.body.version,
        build_version: req.body.build_version
      }

      const tempData = await tempUploadSchema.findOne({ dev_id: '12345' })

      if (!tempData) {
        await tempUploadSchema.create(data)
      }

      if (tempData) {
        const pathFile = path.resolve(__dirname, '..', '..', 'uploads', 'apps', tempData?.name_app as string)
        if (fs.existsSync(pathFile)) {
          console.log('existe')

          fs.rmSync(pathFile, { force: true })
        }
        await tempUploadSchema.updateOne(
          { dev_id: '12345' },
          data
        )
      }

      return res.status(201).json(
        {
          success: true,
          message: 'Saved progress'
        }
      )
    })
  }

  async download (req: Request, res: Response) {

    try {
      const fileName = req.query.file as string

      const file = path.resolve('uploads/apps', fileName)

      return res.download(file)
    } catch (error) {
      return res.send('Error')
    }

  }

}

export default new Store()
