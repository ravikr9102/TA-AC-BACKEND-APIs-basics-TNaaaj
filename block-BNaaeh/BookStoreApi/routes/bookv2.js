const express = require('express');
const router = express.Router();

const Book = require('../models/books');
const Comment = require('../models/comment');

//list all the books
router.get('/', async (req, res) => {
  try {
    let books = await Book.find({}).populate('comments');
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

//  now  this all is  to add a comment  now
router.post('/:bookId/comment', async (req, res) => {
  try {
    let bookId = req.params.bookId;
    req.body.bookId = bookId;
    let comment = await Comment.create(req.body);
    let updateBook = await Book.findByIdAndUpdate(
      bookId,
      { $push: { comments: comment._id } },
      { new: true }
    );
    res.status(202).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// to delete a comment
router.get('/comment/delete/:id', async (req, res) => {
  try {
    let id = req.params.id;
    let comment = await Comment.findByIdAndDelete(id);
    res.status(202).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});
// to edit a comment
router.put('/comment/edit/:id', async (req, res) => {
  try {
    console.log(req.body);
    let id = req.params.id;
    let comment = await Comment.findByIdAndUpdate(id, req.body, { new: true });
    res.status(202).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
