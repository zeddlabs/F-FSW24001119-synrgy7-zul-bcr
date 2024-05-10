import 'dotenv/config'
import express, { Express } from 'express'
import router from './routes'
import middleware from './middlewares'

const app: Express = express()
const PORT: number = Number(process.env.APP_PORT) || 8000

app.use(middleware)

app.use(router)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})