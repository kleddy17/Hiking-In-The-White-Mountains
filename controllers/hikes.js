
const express = require('express')
const db = require('../models')
const app = express()
const axios = require('axios')
const router = express.Router()


router.get('/', (req,res)=>{
    const hikeUrl=`https://www.hikingproject.com/data/get-trails?lat=44.2706207&lon=-71.3042419&maxDistance=50&maxResults=100&key=200966308-be5dfe33bfed32e2f9e2bb337446b45a` 
    axios.get(hikeUrl)
    .then(response => {
        const trail = response.data
        res.render('home', {trail:trail, showButton:false})
    })
    .catch(err=>{
        console.log(err)
    })
})


router.post('/', (req,res)=>{
    db.hike.create(req.body)
.then(createdHike=>{
    res.redirect('/favorites')
    })
})



// router.put('/', (req,res)=>{

// })

// router.delete('/',(req,res)=>{

// })


module.exports = router;