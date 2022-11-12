import { NextFunction, Request, Response } from 'express'
import tempUploadSchema from '../schemas/temp_upload'

class StoreMiddleware {

  async appUploaded (req: Request, res: Response, next: NextFunction) {

    const data = await tempUploadSchema.findOne({ dev_id: '1234' })

    if (data?.name_app) {
      return res.status(400).json(
        {
          success: false,
          message: 'You have already uploaded this application'
        }
      )
    }

    next()

  }

}

export default new StoreMiddleware()
