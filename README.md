# Challenge 6 - Authentication With JWT

Pada challenge di chapter ke-6 ini, kami melanjutkan Challenge 5 dengan menambahkan fitur authentication dengan JSON Web Token.

## Table of contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Quick Start](#quick-start)
  - [Entity Relationship Diagram](#entity-relationship-diagram)
  - [Endpoints](#endpoints)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The Challenge

1. Membuat dokumentasi API
2. Membuat fitur register dan login pada REST API yang sudah dibuat pada chapter 5

### Quick Start

- Clone repo: `git clone -b Challenge_6 --single-branch https://github.com/zulfikarpinem/F-FSW24001119-synrgy7-zul-bcr.git`
- Pindah ke direktori yang baru di clone
- Jalankan `pnpm install`
- Copy file `.env.example` menjadi `.env`, dan sesuaikan _variable_-nya
- Untuk menjalankan _migration_, lakukan `npx knex migrate:latest`
- Untuk menjalankan _seeder_, lakukan `npx knex seed:run`
- Jalankan server menggunakan `pnpm run dev`
- That's it.

### Entity Relationship Diagram

![](./erd.png)

### Endpoints

- ### Auth

| Endpoint               | Method | Description                          |
| ---------------------- | ------ | ------------------------------------ |
| `/api/v1/sign-in`      | POST   | Masuk menggunakan email dan password |
| `/api/v1/sign-up`      | POST   | Membuat akun baru                    |
| `/api/v1/user/current` | GET    | Mendapatkan data pengguna yang masuk |

- ### Cars

| Endpoint           | Method | Description                         |
| ------------------ | ------ | ----------------------------------- |
| `/api/v1/cars`     | GET    | Mengambil semua data mobil          |
| `/api/v1/cars/:id` | GET    | Mengambil data mobil berdasarkan ID |
| `/api/v1/cars`     | POST   | Menyimpan data mobil baru           |
| `/api/v1/cars/:id` | PUT    | Mengedit data mobil berdasarkan ID  |
| `/api/v1/cars/:id` | DELETE | Menghapus data mobil berdasarkan ID |

- ### Sizes

| Endpoint            | Method | Description                          |
| ------------------- | ------ | ------------------------------------ |
| `/api/v1/sizes`     | GET    | Mengambil semua data ukuran          |
| `/api/v1/sizes/:id` | GET    | Mengambil data ukuran berdasarkan ID |
| `/api/v1/sizes`     | POST   | Menyimpan data ukuran baru           |
| `/api/v1/sizes/:id` | PUT    | Mengedit data ukuran berdasarkan ID  |
| `/api/v1/sizes/:id` | DELETE | Menghapus data ukuran berdasarkan ID |

- ### Users

| Endpoint            | Method | Description                            |
| ------------------- | ------ | -------------------------------------- |
| `/api/v1/users`     | GET    | Mengambil semua data pengguna          |
| `/api/v1/users/:id` | GET    | Mengambil data pengguna berdasarkan ID |
| `/api/v1/users`     | POST   | Menyimpan data pengguna baru           |
| `/api/v1/users/:id` | PUT    | Mengedit data pengguna berdasarkan ID  |
| `/api/v1/users/:id` | DELETE | Menghapus data pengguna berdasarkan ID |

## My process

### Built with

- TypeScript
- Node.js
- PostgreSQL
- [Express.js](https://expressjs.com/) - Minimalist Web Framework for Node.js
- [Knex.js](https://knexjs.org/) - SQL Query Builder for JavaScript
- [Objection.js](https://vincit.github.io/objection.js/) - SQL-friendly ORM for Node.js

### What I learned

1. Design Pattern
2. Asynchronous
3. Authentication
4. Open API

## Author

- Mhd Zulfikar Pinem - [zulfikarm022@gmail.com](mailto:zulfikarm022@gmail.com)
