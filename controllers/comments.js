const express = require('express')
const db = require('../models')
const app = express()
const axios = require('axios')
const router = express.Router()
const isLoggedIn = require('../middleware/isLoggedIn')




// GET This route finds the user by their id and their saved hike by id. 
router.get('/:hikeId', isLoggedIn, (req, res)=> {
    db.userHike.findOne({
      where: {userId: req.user.id, 
              hikeId:req.params.hikeId},
    })
    .then(foundComment=>{
        // console.log('THIS IS THE FOUND COMMENT', foundComment) 
        res.render('comment', {comment: foundComment.dataValues})
    })
  });
         


  module.exports = router;