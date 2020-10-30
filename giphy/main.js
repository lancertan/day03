//load the libraries
const express = require('express')
const handlebars = require('express-handlebars')
const fetch = require('node-fetch')
const withQuery = require('with-query').default

//configure the environment
const PORT = parseInt(process.argv[2]) || parseInt(process.env.APP_PORT) || 3000

//create an instance of express
const app = express()

//configure HBS
app.engine('hbs', handlebars({ defaultlayour: 'default.hbs'}))
app.set('view engine', 'hbs')

app.get(['/', '/index.html'],
    (req, resp) => {
        //status 200
        resp.status(200)
        resp.type('text/html')
        resp.render('index')
    }
)
//load/mount the static resources directory
app.use(express.static(__dirname + '/static'))

//start the server
app.listen(PORT, () => {
    console.info(`Application started on port ${PORT} at ${new Date()}`)
  }
)