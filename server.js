// Imported Libraries
const express = require("express")
require('dotenv').config();
require('./views/db');
const app = express()
const bcrypt = require("bcrypt") // Imported bcrypt package for password hashing
const User = require('./views/users')
    // Users database
const users = []
app.use(express.urlencoded({ extended: false }))
app.post('/create-user', async(req, res) => {
    //check whether user email is duplicated
    const isNewUser = await User.isThisEmailInUse('jm@gmail.com')
    if (!isNewUser) return res.json({ success: false, message: 'This email is already existed. Please sign in.' })
    const user = await User({
        firstname: 'John',
        lastname: 'Mayer',
        email: 'jm@gmail.com',
        password: 'Orange',
    });
    await user.save();
    res.json(user);
});
// Routes
app.get('/login', (req, res) => {
    res.render("login.ejs")
})
app.get('/register', (req, res) => {
    res.render("register.ejs")
})

//end routes


app.use(express.static(__dirname + '/'))

app.listen(5000)

// mongodb+srv://shuyilee:<password>@cluster0.bc2ktax.mongodb.net/?retryWrites=true&w=majority