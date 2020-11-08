
const express = require('express')
const db = require('../models')
const app = express()
const axios = require('axios')
const router = express.Router()


router.get('/', (req,res)=>{
    // const hikeUrl=`https://www.hikingproject.com/data/get-trails?lat=44.2706207&lon=-71.3042419&maxDistance=100&maxResults=100&key=200966308-be5dfe33bfed32e2f9e2bb337446b45a` 
    axios.get(`https://www.hikingproject.com/data/get-trails?lat=44.2706207&lon=-71.3042419&maxDistance=50&maxResults=100&key=200966308-be5dfe33bfed32e2f9e2bb337446b45a`)
    .then(response => {
        console.log(response.data)
        const trail = response.data
        console.log(trail)
        // res.send(response.data)
        res.render('home', {trail: response.data})
    })
    .catch(err=>{
        console.log(err)
    })
})


// router.post('/', (req,res)=>{

// })


// router.put('/', (req,res)=>{

// })

// router.delete('/',(req,res)=>{

// })


module.exports = router;