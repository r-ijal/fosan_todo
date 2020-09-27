const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const router = require('./routing/index')
const session = require('express-session')


// SETUP
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// app.use(morgan)
app.use(express.static('assets'))
app.use(session({
    secret: 'askjdkajsdh',
    saveUninitialized: false,
    resave: true,
    cookie: { maxAge: 360000 }
  }))
app.set('view engine', 'ejs');


app.use('/', router)
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})