import type { Knex } from "knex";
import { onUpdateTrigger } from "../../app/utils/onUpdateTrigger.util";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('role').notNullable();
    table.string('avatar');
    table.timestamps(true, true)
  }).then(() => knex.raw(onUpdateTrigger('users')))
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users')
}

