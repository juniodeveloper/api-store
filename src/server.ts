import env from 'dotenv'
import express from 'express'
import mongoConnect from './database/mongo.connect'
import route from './router/routes'
env.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(route)

mongoConnect().then(() => {
  app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server on port ${process.env.SERVER_PORT}`)
  })
}).catch((error) => {
  console.log(error)
})
