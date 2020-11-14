const express = require('express')
const db = require('../models')
const app = express()
const axios = require('axios')
const router = express.Router()





router.get('/:hikeId', (req, res)=> {
    db.userHike.findOne({
      where: {userId: req.user.id, 
              hikeId:req.params.hikeId},
    })
    .then(foundComment=>{
        console.log('THIS IS THE FOUND COMMENT', foundComment) //this returned an object
        res.render('comment', {comment: foundComment.dataValues})
    })
  });
         


  module.exports = router;