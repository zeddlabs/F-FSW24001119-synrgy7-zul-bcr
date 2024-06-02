import { Knex } from "knex"

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("cars").del()

    // Inserts seed entries
    await knex("cars").insert([
        {
            name: "Toyota Avanza",
            rent_per_day: 200000,
            size_id: 2,
            image: "/public/uploads/images/avanza.jpg",
            created_by: 1,
            updated_by: 1,
        },
        {
            name: "Daihatsu Xenia",
            rent_per_day: 250000,
            size_id: 2,
            image: "/public/uploads/images/xenia.jpg",
            created_by: 1,
            updated_by: 1,
        },
        {
            name: "Honda Jazz",
            rent_per_day: 300000,
            size_id: 1,
            image: "/public/uploads/images/jazz.png",
            created_by: 1,
            updated_by: 1,
        },
        {
            name: "Toyota Fortuner",
            rent_per_day: 500000,
            size_id: 3,
            image: "/public/uploads/images/fortuner.jpg",
            created_by: 1,
            updated_by: 1,
        },
    ])
}
