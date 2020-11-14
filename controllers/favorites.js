
const express = require('express')
const db = require('../models')
const app = express()
const axios = require('axios')
const router = express.Router()



router.post('/',(req,res)=>{
    db.hike.findOrCreate({
        where: {name: req.body.name,
            location: req.body.location,
            summary: req.body.summary,
            photo: req.body.photo},
        include: [db.user],
    })
    .then(([foundOrCreatedHike, created]) =>{
        foundOrCreatedHike.addUser(req.user)
        .then(createdRelation=>{
            // console.log("createdRelation:", createdRelation)
            res.redirect('/favorites')
        })
            .catch(err=>{
                console.log("ERROR 1", err)
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
            console.log("Im an error", err)
        })
        })
       

router.put('/:id', (req, res)=> {
  db.userHike.update({
      comment: req.body.comment
    },
    {
        where: {userId: req.user.id, 
                hikeId:req.params.id }
  })
  .then(newComment=>{
    // console.log("this is my comment", newComment)
    res.redirect(`/comments/${req.params.id}`)
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