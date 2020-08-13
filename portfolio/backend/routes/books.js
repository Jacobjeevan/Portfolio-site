const router = require("express").Router();
let Book = require("../models/book");

router.route("/").get((req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) => err.status(400).json(`Error: ${err}`));
});

router.route("/").post((req, res) => {
  const title = req.body.title;
  const isbn = req.body.isbn;
  const newBook = new Book({ title, isbn });
  newBook
    .save()
    .then(() => res.json("Book Added"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/update/:id").post((req, res) => {
  let id = req.params.id;
  Book.findByIdAndUpdate(
    { _id: id },
    {
      title: req.body.title,
      isbn: req.body.isbn,
    }
  )
    .then(() => res.json("Book Updated"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/:id").delete((req, res) => {
  let id = req.params.id;
  Book.findByIdAndDelete(id)
    .then(() => res.json("Book deleted"))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
