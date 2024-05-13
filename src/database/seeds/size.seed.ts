import { Knex } from "knex"

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("sizes").del()

    // Inserts seed entries
    await knex("sizes").insert([
        {
            name: "Small",
        },
        {
            name: "Medium",
        },
        {
            name: "Large",
        },
    ])
}
