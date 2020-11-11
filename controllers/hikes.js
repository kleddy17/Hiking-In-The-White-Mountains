
const express = require('express')
const db = require('../models')
const app = express()
const axios = require('axios')
const router = express.Router()


router.get('/', (req,res)=>{
  axios.get(`https://www.hikingproject.com/data/get-trails?lat=44.2706207&lon=-71.3042419&maxDistance=50&maxResults=100&key=200966308-be5dfe33bfed32e2f9e2bb337446b45a`)
    .then(response => {
        // console.log("hiii", response.data)
        const trail = response.data
        // console.log(trail)
        res.render('home', {trail: trail})
    })
    .catch(err=>{
        console.log(err)
    })
})

// router.post('/', (req,res)=>{
//  db.user.findOrCreate({
//     //first get reference to a user
//     where: { name: req.user.name,   
//     },
//     defaults: {
//         email: req.user.email,   
//     }
// })
// .then(([user, created]) =>{
//     //second get reference to a hike
//         db.hike.findOrCreate({
//             where: { name:req.body.name        
//             },
//             default: {
//                 location: req.body.location
//             }
//         })
//     .then(([hike,created]) =>{
//         //finally associate the hike with the user
//         user.addHike(hike)
//         .then(createdRelation=>{
//             console.log("createdRelation:", createdRelation)
//             console.log(`${hike.name} added to ${user.name}`)
//             res.redirect('/favorites')
//         })
//     })
// })
// })

// router.get('/', (req, res) => {
//     db.user.findOne({
//         where: {name: req.body.id},
//         include: [db.hike]
//     })
//     .then(foundUser=>{
//         foundUser.hikes.forEach(hike=>{
//             console.log(`${foundUser.name}, has these projects ${hikes.name}`)
//             res.render('favorites', {favHikes: foundUser.hikes})
//         })
//     })
// })
  
    




// router.put('/', (req,res)=>{

// })

// router.delete('/',(req,res)=>{

// })


module.exports = router;