import { Router } from 'express'
import store from '../controllers/store'

const route = Router()
route.post('/store/upload/app', store.uploadApp)
route.get('/store/download', store.download)

export default route
