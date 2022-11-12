import { Request, Response } from 'express'
import path from 'path'
import tempUploadSchema from '../schemas/temp_upload'
import { TypedRequestBody } from '../types/app'
import { ITempUploadStore } from '../types/store'

class Store {

  async uploadApp (req: TypedRequestBody<ITempUploadStore>, res: Response) {

    const data: ITempUploadStore = {
      dev_id: '1234',
      name_app: req.file?.filename,
      size: req.file?.size
    }

    const tempData = await tempUploadSchema.findOne({ dev_id: '1234' })

    if (!tempData) {
      await tempUploadSchema.create(data)
    } else {
      await tempUploadSchema.updateOne(
        { dev_id: '1234' },
        data
      )
    }

    return res.status(201).json(
      {
        success: true,
        message: 'Saved progress'
      }
    )

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
