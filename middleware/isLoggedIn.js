module.exports = (req,res,next)=>{
    if(!req.user){ // if no one is logged in
        req.flash('error', 'You must be logged in to access that page.')
        res.redirect('/auth/login')
    }else{ // if someone is logged in currently
        next()
    }
}