import { Router, Request, Response } from "express"

const carRouter: Router = Router()

carRouter.get('/cars', (req: Request, res: Response) => {
  res.status(200).json({ 
    message: 'GET /cars' 
  })
})

carRouter.get('/cars/:id', (req: Request, res: Response) => {
  res.status(200).json({ 
    message: 'GET /cars/:id' 
  })
})

carRouter.post('/cars', (req: Request, res: Response) => {
  res.status(201).json({ 
    message: 'POST /cars' 
  })
})

carRouter.put('/cars/:id', (req: Request, res: Response) => {
  res.status(200).json({ 
    message: 'PUT /cars/:id' 
  })
})

carRouter.delete('/cars/:id', (req: Request, res: Response) => {
  res.status(200).json({ 
    message: 'DELETE /cars/:id' 
  })
})

export default carRouter