export interface Car {
  id: string
  plate: string
  manufacture: string
  model: string
  image: string
  rentPerDay: number
  capacity: number
  description: string
  transmission: string
  available: boolean
  type: string
  year: number
  options: string[]
  specs: string[]
  availableAt: Date
  driverType: string
}
