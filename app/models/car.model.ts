import { Model, ModelObject } from "objection";
import { SizeModel } from "./size.model";
import { UserModel } from "./user.model";

export class CarModel extends Model {
  id!: number
  name!: string
  rent_per_day!: number
  size_id!: number
  image!: string
  start_rent?: Date
  finish_rent?: Date
  created_by?: number
  updated_by?: number
  deleted_by?: number
  is_deleted!: boolean
  created_at!: Date
  updated_at!: Date

  static tableName = 'cars'

  static relationMappings = {
    size: {
      relation: Model.BelongsToOneRelation,
      modelClass: SizeModel,
      filter: (query: any) => query.select('id', 'name'),
      join: {
        from: 'cars.size_id',
        to: 'sizes.id'
      }
    },
    createdBy: {
      relation: Model.BelongsToOneRelation,
      modelClass: UserModel,
      filter: (query: any) => query.select('id', 'name'),
      join: {
        from: 'cars.created_by',
        to: 'users.id'
      }
    },
    updatedBy: {
      relation: Model.BelongsToOneRelation,
      modelClass: UserModel,
      filter: (query: any) => query.select('id', 'name'),
      join: {
        from: 'cars.updated_by',
        to: 'users.id'
      }
    },
    deletedBy: {
      relation: Model.BelongsToOneRelation,
      modelClass: UserModel,
      filter: (query: any) => query.select('id', 'name'),
      join: {
        from: 'cars.deleted_by',
        to: 'users.id'
      }
    }
  }

  $formatJson(json: any) {
    json = super.$formatJson(json);
    delete json.size_id;
    delete json.created_by;
    delete json.updated_by;
    delete json.deleted_by;
    return json;
  }
}

export type Car = ModelObject<CarModel>