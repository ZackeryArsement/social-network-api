[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# social-network-api

Title: ***Social Network API*** \
Developer: **Zackery Arsement** \
Deployment Date: 3/3/2022 \
For: UT JavaScript Coding Bootcamp

# Access Project

- ### [Github Repository](https://github.com/ZackeryArsement/social-network-api)
- ### [Starting Server and User Routes](https://drive.google.com/file/d/1EQNGkDoipafK3a5Un4Hj-pVZdH7RghFT/view)
- ### [Thought Routes](https://drive.google.com/file/d/1IXT1TsOBjim18hsh7ZKsfTMnjcvRN34P/view)

# Table of Contents

-[Built-With](#built-with) \
-[Summary](#summary) \
-[Development](#development) \
-[Questions](#questions)

# Built-With

* [Javascript](https://javascript.com/)
* [Node.js](https://nodejs.org/en/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [Express.js](https://expressjs.com/)


# Summary:

* The ***Social Network API*** provides the user with a database driven social media platform.
* To start the server the user runs the below command line:
```
npm start
```
* The platform has no unique GUI and is instead solely ran through Insomnia.
* Users are able to create profiles which holds their 'username', 'email', 'thoughts', and 'friend' information.
* Users can post 'thoughts' and 'reactions' to thoughts,;both of which contain a string of text and a posted timestamp.
* Users can add friends and the database keeps track of your 'friend count'.
* Users can delete 'thoughts' and 'reactions' 

# Development:

The ***Social Network API*** works by using a Mongoose database to store information. This database is coupled with Insomnia to provide a basic GUI. The database is created using MongoDB and then manipulated using Mongoose that accesses a database. This application's database uses the ***Model*** and ***Schema*** classes, to store information for Users, Thoughts, and Reactions. The Classes are then linked together through Mongoose native syntax by adding an array parameter to a Class that contains objects of another class, which allows us to see which data values from different tables are associated to one another. To access our data we established routes using express that allow the user to GET, POST, PUT and DELETE data through the Insomnia UI.

# Questions

Email:
zarsement@hotmail.com