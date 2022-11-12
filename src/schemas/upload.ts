import { Document, model, Schema } from 'mongoose'

interface IUploadSchema extends Document {
  dev_id: string,
  title: string,
  icon: string,
  size: number,
  url_download: string,
  category: string,
  description: string,
  short_description: string,
  developer_name: string,
  downloads: number,
  rating: number,
  prints: Array<string>,
  tags: Array<string>,
  is_public: boolean,
  status: number
}

const uploadSchema = new Schema<IUploadSchema>(
  {
    dev_id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      require: true
    },
    url_download: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    description: {
      type: String,
      require: true
    },
    short_description: {
      type: String,
      require: true
    },
    developer_name: {
      type: String,
      require: true
    },
    downloads: {
      type: Number,
      require: true,
      default: 0
    },
    rating: {
      type: Number,
      require: true
    },
    prints: {
      type: [],
      require: true
    },
    status: {
      type: Number,
      require: true
    }
  }
)

export default model('upload', uploadSchema)
