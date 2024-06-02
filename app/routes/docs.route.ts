import { Router } from "express"
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "../../openapi.json"

const docsRouter: Router = Router()

docsRouter.use("/docs", swaggerUi.serve)
docsRouter.get("/docs", swaggerUi.setup(swaggerDocument))

export default docsRouter

