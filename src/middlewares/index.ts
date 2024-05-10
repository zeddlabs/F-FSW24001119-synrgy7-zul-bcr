import express, { Express } from "express"

const middleware: Express = express()

middleware.use(express.json())

export default middleware