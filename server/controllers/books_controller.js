let books = [
    // {
    //     "title": "Harry Potter 7",
    //     "author": "J.K. Rowling",
    //     "id": 1
    // },
    // {
    //     "title": "Harry Potter 6",
    //     "author": "J.K. Rowling",
    //     "id": 2
    // },
    // {
    //     "title": "Harry Potter 5",
    //     "author": "J.K. Rowling",
    //     "id": 3
    // },
    // {
    //     "title": "Harry Potter 4",
    //     "author": "J.K. Rowling",
    //     "id": 4
    // }
]

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
    },
    update: (req, res) => {
        let {title, author} = req.body
        let {id} = req.params

        let editId = id
        let editIndex = books.findIndex( (book) => +book.id === +editId)


        let book = books[editIndex]

        console.log(1111111, title, 2222222222, author)

        books[editIndex] = {
            title: title || book.title,
            author: author || book.author,
            id: book.id
        }
        
        res.send(books)
        
    },
    delete: (req, res) => {
        let deleteId = req.params.id

        let deleteIndex = books.findIndex( book => +book.id === +deleteId)

        books.splice(deleteIndex, 1)

        res.send(books)

    }
}