const express = require('express')
const db = require('../models')
const app = express()
const axios = require('axios')
const router = express.Router()


router.get('/', (req, res) => {
    db.userHike.findAll({
       comment: req.body.comment
            },
            {where:{userId: req.user.id, 
                    hikeId: req.params.id}
        })
    .then(foundUserHike=>{
            // console.log(`${foundUser.name}, has these projects ${hike.name}`)
            res.render('comment', {foundUserHike: foundUserHike.dataValues.comment})
        })
        .catch(err=>{
            console.log("Im an error", err)
        })
        })
         


  module.exports = router;