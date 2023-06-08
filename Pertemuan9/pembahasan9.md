# Pembahasan di pertemuan ke 9

## Step untuk membuat API

a. Jalankan init terlebih dahulu

    npm init -y

2. Lalu installasi package yang di perlukan

a. Dependencies 

    npm install express pg sequelize dotenv

b. devDependencies

    npm install nodemon sequelize-cli --save-dev

3. Buat file _app.js_, _.gitignore,_, dan _.env_

4. Buat folder _router_ dan _controllers_

5. Lalu di _package.json_ tambahkan scripts **start**

## Database = sequelize

a. Buat init terlebih dahulu

    npx sequelize-cli init

b. Buat database 

    npx sequelize-cli db:create

c. Buat _model_

    npx sequelize-cli model:generate --name User --attributes username:string,email:string,password:string,image:string

    npx sequelize-cli model:generate --name Item --attributes name:string,category:string,price:integer,stock:number,image:string

d. Migrate

    npx sequelize-cli db:migrate

e. Cek di Dbeaver

## Seeding a json into dbeaver

a. Generate file seeder

    npx sequelize-cli seed:generate --name seeder-user

    npx sequelize-cli seed:generate --name seeder-item

b. Menjalankan Seeder

    npx sequelize-cli db:seed:all

    npx sequelize-cli db:seed --seed namafile.js

c. undo

    npx sequelize-cli db:migrate:undo

    npx sequelize-cli db:seed:undo:all
