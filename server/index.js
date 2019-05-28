const express = require('express')
const app = express()
const port = 4000

let bc = require('./controllers/books_controller')

app.use(express.static(__dirname + "/../build"))

app.use(express.json())

app.get('',(req, res) => res.send("<h1>Welcome to the Books HomePage</h1>") )
app.get('/api/books', bc.read)
app.post('/api/books', bc.create)
app.put('/api/books/:id', bc.update)
app.delete('/api/books/:id', bc.delete)

app.listen(port, () => console.log(`I am listening on Port: ${port}`))