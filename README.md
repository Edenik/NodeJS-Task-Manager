

## Task Manager API

Demo: <a href="https://task-manager-with-node-js.herokuapp.com/"> LIVE DEMO - Heroku </a>


Endpoints: 
https://task-manager-with-node-js.herokuapp.com

// Create a user
POST: /users
body: {
    'name' : 'name',
    'email' : 'email',
    'password' : 'password',
    'age' : 'age'
}


// Login user
POST: /users/login
body: {
    'email' : 'email',
    'password' : 'password'
}

// Logout corrent session
POST: /users/logout

// Logout all sessions
POST: /users/logoutAll

// Get current user profile
GET: /users/me

// Update user profile
PATCH: /users/me

// Delete user
DELETE: /users/me

// Post user avatar image
POST: /users/me/avatar

// Delete user avatar
DELETE: /users/me/avatar

// Get user avatar by id
GET: /users/:id/avatar

Dependencies:
<p><a href="https://github.com/expressjs/express"> express </a></p>
<p><a href="https://github.com/motdotla/dotenv#readme"> dotenv </a></p>
<p><a href="https://github.com/sendgrid/sendgrid-nodejs"> @sendgrid/mail </a></p>
<p><a href="https://github.com/dcodeIO/bcrypt.js#readme"> bcryptjs </a></p>
<p><a href="https://github.com/auth0/node-jsonwebtoken#readme"> jsonwebtoken </a></p>
<p><a href="https://github.com/Automattic/mongoose"> mongoose </a></p>
<p><a href="https://github.com/expressjs/multer#readme"> multer </a></p>
<p><a href="https://github.com/remy/nodemon"> nodemon </a></p>
<p><a href="https://github.com/lovell/sharp"> sharp </a></p>
<p><a href="https://github.com/chriso/validator.js"> validator </a></p>
<p><a href="https://github.com/request/request#readme"> request </a></p>







    "mongoose": "^5.11.7",
    "multer": "^1.4.2",
    "nodemon": "^2.0.6",
    "sharp": "^0.26.3",
    "validator": "^13.5.2"