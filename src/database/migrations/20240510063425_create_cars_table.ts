import type { Knex } from "knex"
import { onUpdateTrigger } from "../../helpers/knex.helper"

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('cars', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.decimal('rent_per_day', 10, 2).notNullable()
    table.integer('size_id').unsigned().notNullable()
    table.string('image').notNullable()
    table.date('start_rent')
    table.date('finish_rent')
    table.timestamps(true, true)

    table.foreign('size_id').references('id').inTable('sizes')
  }).then(() => knex.raw(onUpdateTrigger('cars')))
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('cars')
}

