require('dotenv').config()
const app = require('express')

const app = express()

app.length("/", (req, res) => {
    res.send("<h1>Server is working</h1>")
})

module.exports = app