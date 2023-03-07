const express = require('express')
const app = express()
const port = 3000

// mengambil data dari postman
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes')
app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// const waktu = new Date();

// console.log(waktu)