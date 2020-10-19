const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors');
const livereload = require('easy-livereload')

const whoamiHandler = require('./whoamiHandler')

dotenv.config()
const app = express()


app.use(cors({optionsSuccessStatus: 200}))

const PORT = process.env.PORT

if (app.get('env') === 'development') {
    app.use(livereload({
        app: app
    }))
}

app.get('/api/whoami', whoamiHandler)

const listener = app.listen(PORT, () => {
    console.log('Your app is listening on port ' + listener.address().port)
})