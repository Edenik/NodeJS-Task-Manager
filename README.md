

## Task Manager API

Demo: <a href="https://task-manager-with-node-js.herokuapp.com/"> LIVE DEMO - Heroku </a>


Endpoints: 
https://task-manager-with-node-js.herokuapp.com

// Create a user <br>
POST: /users <br>
body: {
    'name' : 'name',
    'email' : 'email',
    'password' : 'password',
    'age' : 'age'
} <br>


// Login user <br>
POST: /users/login <br>
body: {
    'email' : 'email',
    'password' : 'password'
} 

// Logout corrent session <br>
POST: /users/logout

// Logout all sessions <br>
POST: /users/logoutAll

// Get current user profile <br>
GET: /users/me

// Update user profile <br>
PATCH: /users/me

// Delete user <br>
DELETE: /users/me

// Post user avatar image <br>
POST: /users/me/avatar

// Delete user avatar <br>
DELETE: /users/me/avatar

// Get user avatar by id <br>
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
