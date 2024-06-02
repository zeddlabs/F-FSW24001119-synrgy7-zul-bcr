import { Model, ModelObject } from "objection";
import { SizeModel } from "./size.model";

export class CarModel extends Model {
  id!: number
  name!: string
  rent_per_day!: number
  size_id!: number
  image!: string
  start_rent?: Date
  finish_rent?: Date
  created_at!: Date
  updated_at!: Date

  static tableName = 'cars'

  static relationMappings = {
    size: {
      relation: Model.BelongsToOneRelation,
      modelClass: SizeModel,
      join: {
        from: 'cars.size_id',
        to: 'sizes.id'
      }
    }
  };
}

export type Car = ModelObject<CarModel>