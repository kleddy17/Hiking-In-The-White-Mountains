require('dotenv').config()
const express = require('express')
const app = express()
const axios = require('axios')
const ejsLayouts = require('express-ejs-layouts')
const session = require('express-session')
const passport = require('./config/ppConfig.js')
const flash = require('connect-flash')
const isLoggedIn = require('./middleware/isLoggedIn')
// const methodOverride = require('method-override')




//  setup ejs and ejs layouts
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use(express.urlencoded({ extended: false }))

//session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

//passport middleware
app.use(passport.initialize())
app.use(passport.session())

//HAS tO BE AFTER THE SESSION THE MIDDLEWARE
app.use(flash())

//CUSTOM MIDDLEWARE
app.use((req, res, next)=>{
    //before every route, the attach flash messages are 
    //current user to res.locals
    //this will give us access to these values in all our ejs pages
    res.locals.alerts=req.flash();
    res.locals.currentUser = req.user;
    next()  //move on to the next piece of middleware
})

// use controllers
app.use('/auth', require('./controllers/auth.js'))
app.use('/hikes', require('./controllers/hikes.js'))

app.get('/', (req, res)=>{
   res.redirect('/hikes')
})



app.get('/profile', isLoggedIn, (req,res)=>{
    res.render('profile')
})

app.listen(process.env.PORT,() =>{
    console.log('you\'re listening to the spooky sounds of port 8080')
})

