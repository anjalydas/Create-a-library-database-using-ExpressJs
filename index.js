const express = require('express')
const booksRoutes = require('./routes/booksRoutes')
const authorRoutes = require('./routes/authorRoutes')
const cors = require ('cors')
const app = express()
const port = 3000

app.use(cors())  
app.use('/books', booksRoutes)
app.use('/authors', authorRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})