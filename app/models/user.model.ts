import { Model, ModelObject } from "objection";

export class UserModel extends Model {
  id!: number
  name!: string
  email!: string
  password!: string
  role!: string
  avatar?: string
  created_at!: Date
  updated_at!: Date

  static tableName = 'users'

  $formatJson(json: any) {
    json = super.$formatJson(json);
    delete json.password;
    delete json.role;
    return json;
  }
}

export type User = ModelObject<UserModel>