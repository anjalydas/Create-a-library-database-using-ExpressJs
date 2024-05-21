const express = require('express')
const { getAllBooks, getBookById, addNewBook, updateBook, deleteBook } = require('../controllers/booksControllers')
const router = express.Router()

router.get('/', getAllBooks)
  router.get('/:bookid', getBookById)
    router.post('/', addNewBook)
    router.patch('/:bookid', updateBook)
    router.delete('/:bookid', deleteBook)
  

module.exports = router