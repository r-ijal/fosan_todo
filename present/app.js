const express = require('express')
const app = express()
const port = 3000
const router = require('./routing/index')
const session = require('express-session')

// SETUP
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('assets'))
app.use(session({
    secret: 'askjdkajsdh',
    saveUninitialized: false,
    resave: true,
    cookie: { maxAge: 60000 }
  }))
app.set('view engine', 'ejs');


app.use('/', router)
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


app.listen(port, () => {
  console.log(`Sudah connect ke http://localhost:${port} boshque`)
})