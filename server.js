const express = require('express')
const app = express()
const mysql = require('mysql2')
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(process.env.PORT || 3001, () => {
  console.log('server is listening')
})