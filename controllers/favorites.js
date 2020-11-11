
const express = require('express')
const db = require('../models')
const app = express()
const axios = require('axios')
const router = express.Router()



router.post('/',(req,res)=>{
    db.hike.findOrCreate({
        where: {name: req.body.name,
                location: req.body.location},
         include: [db.user],
    })
    .then(([foundOrCreatedHike, created]) =>{
        foundOrCreatedHike.addUser(req.user)
        .then(createdRelation=>{
            console.log("createdRelation:", createdRelation)
            res.redirect('/favorites')
        })
        .catch(err=>{
           console.log("FUCK", err)
        })
    })
   
})

router.get('/', (req, res) => {
    db.user.findOne({
        where: {id:req.user.id},
        include: [db.hike]
    })
    .then(foundUser=>{
            // console.log(`${foundUser.name}, has these projects ${hike.name}`)
            res.render('profile', {favHikes: foundUser.hikes})
        })
        .catch(err=>{
            console.log("FUCKKKKK", err)
        })
        })
    
   


router.delete('/:id' ,(req, res)=>{
    db.hike.destroy({
    where: {id: req.params.id}
  })
  .then(numRowsDeleted=>{
    console.log('&&&&', numRowsDeleted)
    res.redirect('/favorites')
  })
  .catch(err=>{
   console.log(err)
  })
})
  

module.exports = router;