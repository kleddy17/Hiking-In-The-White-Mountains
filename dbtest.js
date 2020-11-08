//post this to my faves table
router.post('/faves', (req,res)=>{
    console.log("Form Data", req.body)
    //fave needs to match our model not our table
    db.fave.create(req.body)
    .then(createdFave=>{
        res.redirect('/faves')
    })
})