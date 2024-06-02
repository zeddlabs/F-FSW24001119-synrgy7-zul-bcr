import bcrypt from "bcryptjs";
import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        {
            name: "Super Admin",
            email: "admin@bcr.com",
            password: bcrypt.hashSync("admin", 10),
            role: "Super Admin",
        }
    ]);
};
