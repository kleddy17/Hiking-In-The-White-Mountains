
const express = require('express')
const db = require('../models')
const app = express()
const axios = require('axios')
const router = express.Router()
const isLoggedIn = require('../middleware/isLoggedIn')


// This is my API call to get all the hikes from the hikingproject API
router.get('/', isLoggedIn, (req,res)=>{
  axios.get(`https://www.hikingproject.com/data/get-trails?lat=44.2706207&lon=-71.3042419&maxDistance=50&maxResults=100&key=${process.env.API_KEY}`)
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


module.exports = router;