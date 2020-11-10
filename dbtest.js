const db = require('./models')


db.user.findOrCreate({
    //first get reference to a user
    where: {
        name:'Kristi',
        
    },
    defaults: {
        email: 'kleddy@gmail.com',
        password: 'hello1234'
    }
})
.then(([user, created]) =>{
    //second get reference to a hike
    db.hike.findOrCreate({
        where: {
            name: 'Welch-Dickey Loop',
           
        },
        default: {
            location: 'Lincoln, NH'
        }
    })
    .then(([hike,created]) =>{
        //finally associate the hike with the user
        user.addHike(hike)
        .then(createdRelation=>{
            console.log("createdRelation:", createdRelation)
            console.log(`${hike.name} added to ${user.name}`)
        })
    })
})
