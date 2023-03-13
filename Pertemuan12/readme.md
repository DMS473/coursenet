# Pembahasan pertamuan 12

## membuat projek fullstack

1. cd fullstack


## folder front-end react
a. Buat react interface 

    npm create-react-app interface
    cd interface
    npm install bootstrap react-icons axios react-router-dom


## folder back-end 
b. Buat backend folder

    buat folder server
    cd server
    npm init (di folder server)
    npm install express pg sequelize dotenv cors
    npm install nodemon sequelize-cli --save-dev

    buat folder (routes, controllers, middlewares, helpers)

### create database
    npx sequelize-cli db:create

### create model
    npx sequelize-cli model:generate --name User --attributes username:string,email:string,password:string,image:string

    npx sequelize-cli model:generate --name Product --attributes name:string,image:string,price:integer,stock:integer,UserId:integer,BrandId:integer

    npx sequelize-cli model:generate --name Brand --attributes name:string,city:string,total_employees:integer,image:string

## migrate model
    npx sequelize-cli db:migrate

    app.js
    routes/index.js
    routes/brand.js
    routes/user.js
    routes/

## install bootstrap di interface



