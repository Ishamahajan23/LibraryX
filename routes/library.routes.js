const express = require("express");
const router = express.Router();
const {
    getAuthors,
    getoneAuthor,
    addAuthors,
    updateAuthors,
    deleteAuthors,
    getBooks,
    getoneBooks,
    addBooks,
    updateBooks,
    deleteBooks,
    getallbookbyauthor

    
} = require("../controllers/library.controller")


const {
  addnameinauthor,
  oneauthorfetch,
  addnameinbook,
  onebookfetch
} = require("../middlewares/libarary.middleware");
//Authors
router.get("/authors", getAuthors);
router.get("/authors/:_id", oneauthorfetch, getoneAuthor);
router.post("/authors",addnameinauthor, addAuthors);
router.put("/authors/:_id", oneauthorfetch,updateAuthors);
router.delete("/authors/:_id",oneauthorfetch ,deleteAuthors);



//books 
router.get("/books", getBooks);
router.get("/books/:_id",onebookfetch ,getoneBooks);
router.post("/books",addnameinbook ,addBooks);
router.put("/books/:_id", onebookfetch,updateBooks);
router.delete("/books/:_id", onebookfetch,deleteBooks);


//Book–Author Relationship Routes
router.get("/books/author/:_authorId", getallbookbyauthor);

module.exports = router