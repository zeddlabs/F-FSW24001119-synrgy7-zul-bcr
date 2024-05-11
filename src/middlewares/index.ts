import express, { Express } from "express"
import path from "path"

const middleware: Express = express()

middleware.use(express.json())

middleware.use('/public', express.static(path.resolve(__dirname, '../../public')))

export default middleware