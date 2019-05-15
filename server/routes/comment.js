const express = require("express");
const passport = require('passport');
const router = express.Router();
const Plan = require("../models/Plan");
const Comment = require("../models/Comment");




router.post('/:id/new', (req, res) => {
  const id = req.params.id;
  console.log(id,req.body.message)
  const {message} = req.body;
  const comment = {
    author: req.user,
    message,
    // author //añado autor aqui
  }
  const newComment = new Comment(comment);
  Plan
  .findByIdAndUpdate(id, {$addToSet: {comments: newComment }}, {new: true})
  .populate("comments")

  .then(comment=> {
    newComment.save().then(commentNew=>res.status(201).json(commentNew))
    })
  .catch(err=> res.status(500).json(err))
  
});


module.exports = router;

