import type { Knex } from "knex";
import { onUpdateTrigger } from "../../configs/knex.conf";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('sizes', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.timestamps(true, true)
  }).then(() => knex.raw(onUpdateTrigger('sizes')))
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('sizes')
}

