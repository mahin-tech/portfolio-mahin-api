const express = require("express")
const server = express()
const bodyParser = require('body-parser');
const db = require('./db').connect()

const portfolioRoutes = require('./routes/portfolios')
const blogRoutes = require('./routes/blogs')

runServer = async () => {
    await (db)
    server.use(bodyParser.json());
    server.use('/api/v1/portfolios', portfolioRoutes)
    server.use('/api/v1/blogs', blogRoutes)

    server.use('/test', (re, res) => {
        res.json({ "message": "Hello" })
    })

    const PORT = parseInt(process.env.PORT, 10) || 3001
    server.listen(PORT, (err) => {
        if (err) console.log(err)
        console.log('Server ready on port', PORT)
    })
}

runServer()

