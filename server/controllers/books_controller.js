let books = []

let id = 1



module.exports = {
    read: (req, res) => {
       res.send(books)
    },
    create: (req, res) => {
        let newBook = req.body

        newBook.id = id++

        books.push(newBook)

        res.send(books)
    }
}