var express = require('express')
var app = module.exports = express()

app.get('/404', require('lib/frontend/site/layout'))
app.get('*', function (req, res) {
  res.redirect('/404')
})
