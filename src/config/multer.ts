import multer from 'multer'
import path from 'path'
import { fileName } from '../utils/func'

export default {
  fileFilter: (req: any, file: any, cb: any) => {
    if (file.mimetype !== 'application/vnd.android.package-archive') {
      return cb(new Error('This is not a valid application file.'))
    }
    return cb(null, true)
  },
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads', 'apps'),
    filename: (req, file, cb) => {
      cb(null, `${fileName(8)}_${file.originalname.replace(' ', '')}`)
    }
  })
}
