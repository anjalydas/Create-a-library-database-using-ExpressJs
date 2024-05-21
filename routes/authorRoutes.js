const express = require('express')
const { getAllAuthors, getAAuthorById, updateAuthor, addNewAuthor, deleteAuthor } = require('../controllers/authorControllers')
const router = express.Router()
    
  router.get('/', getAllAuthors)
  router.get('/:authorname', getAAuthorById)
  router.post('/', addNewAuthor)
  router.patch('/:authorname', updateAuthor)
  router.delete('/:authorname', deleteAuthor)

module.exports = router