import Size from "./size.model"

export default interface Car {
  id?: number
  name: string
  rent_per_day: number
  size: Size
  image: string
  start_rent?: Date
  finish_rent?: Date
  created_at?: Date
  updated_at?: Date
}