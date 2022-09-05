const express = require('express');
const router = express.Router();

const Book = require('../models/books');

//list all the books
router.get('/', async (req, res) => {
  try {
    let books = await Book.find({});
    res.status(202).json(books);
  } catch (err) {
    res.status(500).json(err);
  }
});

// to Create a book
router.post('/', async (req, res) => {
  try {
    let book = await Book.create(req.body);
    res.status(202).json({ book });
  } catch (err) {
    res.status(500).json(err);
  }

  //delete a book
  router.get('/delete/:id', async (req, res) => {
    try {
      let id = req.params.id;
      let book = await Book.findByIdAndDelete(id);
      res.status(202).json(book);
    } catch (err) {
      res.status(500).json(err);
    }
  });
});

//update a book put request can be done only from the postman
router.put('/:id', async (req, res) => {
  try {
    let id = req.params.id;
    console.log(req.body);
    let book = await Book.findByIdAndUpdate(id, req.body, { new: true });
    res.status(202).json(book);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
