import * as yup from 'yup'
import { IUploadApp } from '../types/store'

export const uploadAppValidation: yup.SchemaOf<IUploadApp> = yup.object().shape(
  {
    package: yup.string().max(100),
    version: yup.string().max(60),
    build_version: yup.string().max(60),
    sha256: yup.string().max(100),
    sha1: yup.string().max(100)
  }
)
