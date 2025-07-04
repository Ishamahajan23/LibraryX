const authorModel = require("../models/author.model")
const bookModel = require("../models/book.model")


// Authors
async function getAuthors(req, res){
     try{
         let authors = await authorModel.find();
         res.status(200).json({
            msg:"All authors fetched successfullt",
            authors

         })
     }catch(err){
         res.status(404).json({
           msg: "something went wrong",
           err: err.message,
         });
     }
}
async function getoneAuthor(req, res) {
    let {_id} = req.params;
    try {
      let authors = await authorModel.findById({_id});
      res.status(200).json({
        msg: "authors fetched successfullt",
        authors,
      });
    } catch (err) {
      res.status(404).json({
        msg: "something went wrong",
        err: err.message,
      });
    }
}


async function addAuthors(req, res) {
     try {
       let author = await authorModel.create(req.body);
       res.status(200).json({
         msg: "author add successfully",
         author,
       });
     } catch (err) {
       res.status(404).json({
         msg: "something went wrong",
         err:err.message
       });
     }
}

async function updateAuthors(req, res) {
      let { _id } = req.params;
      try {
        let authors = await authorModel.findByIdAndUpdate({ _id },req.body);
        res.status(200).json({
          msg: "authors update successfully",
        });
      } catch (err) {
        res.status(404).json({
          msg: "something went wrong",
          err: err.message,
        });
      }
}


async function deleteAuthors(req, res) {
    let { _id } = req.params;
    try {
      let books = await bookModel.findOne({author: _id});
      if(books){
         return res.status(400).json({
           msg: "can't delete author its has books",
           err: err.message,
         });
      }
      let authors = await authorModel.findByIdAndDelete({ _id });
      res.status(200).json({
        msg: "authors deleted successfully",
      });
    } catch (err) {
      res.status(404).json({
        msg: "something went wrong",
        err: err.message,
      });
    }
}



//books

async function getBooks(req, res) {
 try {
   let books = await bookModel.find();
   res.status(200).json({
     msg: "All bookss fetched successfullt",
     books,
   });
 } catch (err) {
   res.status(404).json({
     msg: "books not found",
     err: err.message,
   });
 }
}
async function getoneBooks(req, res) {
      let { _id } = req.params;
      try {
        let books = await bookModel.findById({ _id });
        res.status(200).json({
          msg: "books fetched successfullt",
          books,
        });
      } catch (err) {
        res.status(404).json({
          msg: "something went wrong",
          err: err.message,
        });
      }
}

async function addBooks(req, res) {

     try {

 
       let books = await bookModel.create(req.body);
       
       res.status(200).json({
         msg: "book create successfullt",
         books,
       });
     } catch (err) {
       res.status(404).json({
         msg: "something went wrong",
         err: err.message,
       });
     }
}

async function updateBooks(req, res) {
     let { _id } = req.params;
     try {
       let books = await bookModel.findByIdAndUpdate({ _id }, req.body);
       res.status(200).json({
         msg: "books updated successfully",
       });
     } catch (err) {
       res.status(404).json({
         msg: "something went wrong",
         err: err.message,
       });
     }
}

async function deleteBooks(req, res) {
     let { _id } = req.params;
     try {
       let books = await bookModel.findByIdAndDelete({ _id });
       res.status(200).json({
         msg: "books deleted successfullt",
         books,
       });
     } catch (err) {
       res.status(404).json({
         msg: "something went wrong",
         err: err.message,
       });
     }
}


// book - author

async function getallbookbyauthor(req, res) {
 let { _authorId } = req.params;
 let {available} = req.query;

 try {

    let query = {author : _authorId};
    if(available === "true"){
        query.available= true;
    }else if(available =="false"){
        query.available =false;
    }
   let books = await bookModel.find(query).populate("author");
   console.log(books)
   res.status(200).json({
     msg: "books fetched successfullt",
     books,
   });
 } catch (err) {
   res.status(500).json({
     msg: "something went wrong",
     err: err.message,
   });
 }
}


module.exports ={
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

    
}