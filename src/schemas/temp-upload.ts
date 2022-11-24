import { Document, model, Schema } from 'mongoose'

interface IUploadSchema extends Document {
  dev_id: string,
  title?: string,
  icon?: string,
  size?: number,
  name_app?: string,
  category?: string,
  description?: string,
  short_description?: string,
  developer_name?: string,
  downloads?: number,
  rating?: number,
  prints?: [],
  tags?: Array<string>,
  is_public?: boolean,
  sha256?: string,
  sha1?: string,
  version?: string,
  build_version?: string,
  status?: number
}

const tempUploadSchema = new Schema<IUploadSchema>(
  {
    dev_id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false
    },
    icon: {
      type: String,
      required: false
    },
    size: {
      type: Number,
      require: false
    },
    name_app: {
      type: String,
      required: false
    },
    category: {
      type: String,
      required: false
    },
    description: {
      type: String,
      require: false
    },
    short_description: {
      type: String,
      require: false
    },
    developer_name: {
      type: String,
      require: false
    },
    downloads: {
      type: Number,
      require: false,
      default: 0
    },
    rating: {
      type: Number,
      require: false
    },
    prints: {
      type: [],
      require: false
    },
    sha256: {
      type: String,
      require: false
    },
    version: {
      type: String,
      require: false
    },
    build_version: {
      type: String,
      require: false
    },
    status: {
      type: Number,
      require: false
    }
  }
)

export default model('temp_upload', tempUploadSchema)
