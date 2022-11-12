import multer from 'multer'
import { fileName } from '../utils/func'

export const uploadApp = multer(
  {
    storage: multer.diskStorage({
      destination: 'uploads/apps/',
      filename: (req, file, cb) => {
        cb(null, `${fileName(6)}_${file.originalname}`)
      }
    })
  }
)
