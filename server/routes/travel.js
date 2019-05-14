const express = require("express");
const passport = require('passport');
const router = express.Router();
const Travel = require("../models/Travel");
const User = require("../models/User");
const uploadCloud = require("../config/cloudinary.js");


// router.get('/:id/all', (req, res, next) => {
//   // encontrar viajes del usuario
//   Travel
//     .findById(req.params.id)
//     .then(allTheTravels => 
//       res.json(allTheTravels))
// });

// router.get('/:id/one', (req, res, next) => {
//   // mostrar un viaje especifico
//   Travel
//     .findById(req.params.id)
//     .then(Travel => res.json(Travel))
// });


router.post('/new', (req, res) => {
//vincular con autor
console.log(req.user._id, "usuario")
const id = req.user._id;

// var imgPath = req.file.url;
//   var imgName = req.file.originalname;
  const {name, country,description, city, date, imageUrl} = req.body;
  const travel = {
   name, 
   country,
   city,
   description,
   date,
   imageUrl,
  }
  const newTravel = new Travel(travel);
  console.log(id, "viaje nuevo")


  newTravel.save().then(TravelNew=>{
    User
    .findByIdAndUpdate(id, {$addToSet: {travels: TravelNew }}, {new: true})
    .populate("travels")
    .then(user=>{ res.json({user
      })
      console.log(user, "usuarionew")
    })
    .catch(err=> res.status(500).json(err))

  })
  .catch(err=> res.status(500).json(err))
  })
  // User
  // .findByIdAndUpdate(id, {$addToSet: {travels: newTravel }}, {new: true})
  // .populate("travels")
 
  // .then(user=> {
  //   newTravel.save().then(TravelNew=>res.status(201).json(TravelNew))
  //   })
  // .catch(err=> res.status(500).json(err))
  // })

router.delete('/delete/:id', (req, res,next) => {
  const id = req.params.id;
  Travel.findByIdAndRemove(id)
  .then((travel) =>{
    res.json(travel);
  })
  .catch((err) => {
    console.log("no se ha borrado");
  })
});


router.put('/edit/:id', (req,res) => {
const id = req.params.id
  
  Travel.findByIdAndUpdate(id, req.body)
  .then((travel) =>{
    res.json(travel);
  })
  .catch((err) =>{
    console.log(err);
  })
})



module.exports = router;