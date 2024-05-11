export interface CreateCarDto {
  name: string
  rent_per_day: number
  size_id: number
  image: string
}

export interface UpdateCarDto {
  name: string
  rent_per_day: number
  size_id: number
  image: string
  start_rent: Date
  finish_rent: Date
}