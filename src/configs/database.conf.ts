import knex from "knex"
import { knexConfig } from "./knex.conf"

const db = knex(knexConfig)

export default db