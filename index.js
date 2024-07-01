
const userRouter = require('./routes/user.route');
const dashboardRouter = require('./routes/dashboard.route');

const express = require("express")
const app = express()
const morgan = require('morgan')
const path = require("path")
const session = require('express-session')
const Port = 3000
require('dotenv').config();
require('./lib/dbconnect');

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(session({ secret: process.env.AUTH_SECRET, saveUninitialized: true, resave: false }))
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'))
app.use('/users', userRouter);
app.use('/dashboard', dashboardRouter);


app.get('*', (req, res) => {
    res.render("index", { message: "Page not found!" })
})
app.listen(Port, () => {
    console.log("Server is running on port 3000");
})