import mongoose from 'mongoose'

export default async () => {
  await mongoConnect()
}

async function mongoConnect () {
  if (!process.env.MONGO_DB_URL) {
    throw new Error('A MONGO_DB_URL environment variable has not been set')
  }
  await mongoose.connect(process.env.MONGO_DB_URL)
}
