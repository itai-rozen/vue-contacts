const express = require('express')
const cors = require('cors')
const app = express()
const mysql = require('mysql2')
require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const db = mysql.createConnection({
  host:  'sql4.freesqldatabase.com',
  user: 'sql4497999',
  password: 'FGyLCvYZau',
  database:'sql4497999',
  port: 3306
})

app.post('/', (req,res) => {
  const q = "INSERT INTO contacts (`fullname`,`username`,`nickname`,`image_url`,`is_female`,`email`,`phone`,`address`,`additional`) VALUES ('Sharky Rau', 'sharky77','sharky',null, true, 'sharky@s.com', 059111111, 'Haifa 63, Haifa', 'lorem ipsum is my favorite novel')"
  db.query(q, (err,res) => {
  })
  res.send('posted')
})

app.get('/', (req,res) => {
  const q = 'SELECT * FROM contacts;'
  db.query(q, (err, results) => {
    if (err) res.status(400).send(err)
    res.status(200).send(results)
  })
})


app.delete('/:id', (req,res) => {
  const { id } = req.params
  const q = `DELETE FROM contacts WHERE id = ${id};`
   db.query(q, (err,res) => {
    if (err) throw err
  })
  res.end()
})

db.connect(err => {
  if (err) throw err
    console.log('connected sql')
})
app.listen(process.env.PORT || 3001, () => {
  console.log('server is listening')
})