import ISize from "./size.type"

export default interface ICar {
  id?: number
  name: string
  rent_per_day: number
  size: ISize
  image: string
  start_rent?: Date
  finish_rent?: Date
  created_at?: Date
  updated_at?: Date
}