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


ERD comments:

Hikes <---> users is a 1:M, so you've got that right with a join table, nice job! This join table will be how your user is associated with their favorites so you don't need a "favorites" entity actually.
Hikes<--->Comments is going to be a 1 hike to Many comments, so you'll want a hikeId inside of the Comment model
comments <---> users will be a 1 user to M comments relation, so you'll want a userId field in the comment model too :)