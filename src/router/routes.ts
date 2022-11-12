import { Router } from 'express'
import store from '../controllers/store'
import storeMiddleware from '../middlewares/store'
import { uploadApp } from '../multer/store'

const route = Router()
route.post('/store/upload/app', storeMiddleware.appUploaded, uploadApp.single('apk'), store.uploadApp)
route.get('/store/download', store.download)

export default route
