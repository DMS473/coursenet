# Pembahasan di pertemuan ke 11

latihan membuat projek

1. buat folder
2. masuk folder
3. buat file app.js

## install dependencies
npm init
npm install express
npm install pg = untuk postgre
npm install dotenv = untuk .env
npm install ejs = untuk tampilan

## install dev-dependencies
npm install nodemon sequelize-cli --save-dev

## Database = sequelize

a. Buat init terlebih dahulu

    npx sequelize-cli init

b. atur file config.json
1. "username": "postgres",
    "password": "admin", jangan lupa password
    "database": "task_fruit", = nama database yang akan dibuat, pastikan tidak sama
    "host": "127.0.0.1",
    "dialect": "postgres"

c. Buat database 

    npx seqielize-cli db:create

d. Buat _model_

    npx sequelize-cli model:generate --name Fruit --attributes name:string,image:string,price:integer,stock:integer
    npx sequelize-cli model:generate --name Categorie --attributes name:string
    npx sequelize-cli model:generate --name Brand --attributes name:string,image:string,city:string,total_employees:integer

    model name tidak boleh pake s

e. migrate
    
    npx sequelize-cli db:migrate

f. Cek di Dbeaver

## Seeding a json into dbeaver

a. Generate file seeder

    npx sequelize-cli seed:generate --name seeder

b masukkan data ke database melalui seeder

    await queryInterface.bulkInsert(
      "Categories", // nama tabel nya harus sesuai
      [
        {
          name: "Apel",
          createdAt: waktu,
          updatedAt: waktu,
        },
        {
          name: "Jeruk",
          createdAt: waktu,
          updatedAt: waktu,
        },
      ],
      {}
    );

    npx sequelize-cli db:seed:all




