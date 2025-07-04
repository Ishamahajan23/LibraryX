const mongoose = require("mongoose");
const authorModel = require("../models/author.model")
const bookModel = require("../models/book.model")
async function addnameinauthor(req, res, next){
    const {name}= req.body;
  
     if(!name){
        res.status(401).json({
            msg: "name fleid required"
        })
      }
      console.log(Date.now())
  next()
} 

async function oneauthorfetch(req, res, next){
     const {_id} = req.params;

     const author= await authorModel.findById({_id})

     if(!author){
        res.status(404).json({
            err:"Author not found"
        })
     }
   next()

}


async function addnameinbook(req, res, next) {
  const { title, author} = req.body;

  if (!title || !author) {
    return res.status(400).json({
      msg: "fleids are required",
    });
  }
 let book = await bookModel.countDocuments({author});
 if(book>=5){
    return res.status(400).json({
      msg: "author already have 5 books ",
    });
 }


  next();
}

async function onebookfetch(req, res, next) {
  const { _id } = req.params;

  const book = await bookModel.findById({ _id });

  if (!book) {
    res.status(404).json({
      err: "book not found",
    });
  }
  next();
}

module.exports = {addnameinauthor, oneauthorfetch, addnameinbook ,onebookfetch};