import { Model, ModelObject } from "objection"
import { CarModel } from "./car.model"

export class SizeModel extends Model {
  id!: number
  name!: string
  created_at!: Date
  updated_at!: Date

  static tableName = 'sizes'

  static relationMappings = {
    cars: {
      relation: Model.HasManyRelation,
      modelClass: CarModel,
      join: {
        from: 'sizes.id',
        to: 'cars.size_id'
      }
    }
  };
}

export type Size = ModelObject<SizeModel>