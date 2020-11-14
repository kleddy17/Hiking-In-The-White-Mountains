# Express Auth Boilerplate


* created a node app
* .gitignore
* instalk and set up express


## How to set up:
1. Fork and Clone
2. Install dependencies --> npm i 
3. Create a 'config.json with the following code:
{
  "development": {
    
    "database": "<insert db name here>",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "database": "<insert db name here>",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "database": "<insert db name here>",
    "host": "127.0.0.1",
    "dialect": "postgress"
  }
}
## Note: If you DB requires a username/password, youll need to include these as well. 

4. Create the database --> sequelize db:create <--insert name here-->

5. Migrate the 'user' model to your database --> sequelize db:migrate

6. Add a 'SESSION_SECRET' and 'PORT' enviorment variable in a .env file(can be any string)

### MODELS

1. The models I created in my hiker_development database are:
  a. User --> has a name, email, and password column
  b. Hike--> has a name, and location column. Need to add a comments and picture column. 
  c. userHike (joined table) --> M:M association. Needed a join table to associated the user and hikes. has a userId and a hikeId column. 
  #### Models
  
  * `user`
    * Attributes: `name`, `email`, `password`
    * Associations:  The user is associated with many hikes, through the join table 'userHike'
    
  * `hike`
    * Attributes: `id`, `name`, `location`, `summary`,`photo`
    * Associations: The hike is associated with many users, throught the join table 
    'userHike'
   
  * `userHike`
    * Attributes: `userId`, `hikeId`, `comment`, `
    * Associations: This is the join table that 


# User Interaction

1. This app is specific to the White Mountains in New Hampshire.
2. The user can login and see all the hikes in the white mountains within a 50 mile radius. 
3. User can add hikes to their profile, and keep a journal of their expierence to reference later, or edit. 

