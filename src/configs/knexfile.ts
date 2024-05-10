require('dotenv').config()
import { Knex } from "knex";

const config: Knex.Config = {
  client: process.env.DB_DRIVER,
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: '../database/migrations',
    extension: 'ts',
  },
}

export default config