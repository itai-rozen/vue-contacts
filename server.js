const express = require('express')
const cors = require('cors')
const app = express()
const mysql = require('mysql2')
require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const db = mysql.createConnection({
  host: 'sql4.freesqldatabase.com',
  user: 'sql4497999',
  password: 'FGyLCvYZau',
  database: 'sql4497999',
  port: 3306
})

app.post('/', (req, res) => {
  const { body } = req
  const q = `
    INSERT INTO contacts (
    ${Object.keys(body).join()}
    ) VALUES (
      ${Object.values(body)
      .map(val => {
        if (typeof val === 'boolean') return val? 'TRUE' : 'FALSE'
        return val ? `'${val}'` : 'NULL'
      })
      .join()}
    );
    `.toString()

  db.query(q, (err, _) => {
    if (err) res.status(400).send(err )
    else res.send({ success: true })
  })
})

app.get('/', (req, res) => {
  const q = 'SELECT * FROM contacts;'
  db.query(q, (err, results) => {
    if (err) res.status(400).send(err)
    res.status(200).send(results)
  })
})


app.delete('/:id', (req, res) => {
  const { id } = req.params
  const q = `DELETE FROM contacts WHERE id = ${id};`
  db.query(q, (err, res) => {
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