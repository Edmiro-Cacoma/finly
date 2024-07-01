

const userRouter = require('./routes/user.route');
const express = require("express")
const app = express()
const morgan = require('morgan')
const path = require("path")
const Port = 3000

require('dotenv').config();
require('./lib/dbconnect');


app.set('views', './views')
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'))
app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.render("index",{message:"Hello Backend!"})
})

app.get('/about', (req, res) => {
    res.render("index", { message: "Hello about page!" })
})

app.get('/contact', (req, res) => {
    res.status(404).render("index", { message: "Hello about page!" })
})



app.get('*', (req, res) => {
    res.render("index", { message: "Page not found!" })
})
app.listen(Port, () => {
    console.log("Server is running on port 3000");
})