const express=require('express')
const livro = require('./livroRouter')
 module.exports = app => {
    app.use(
      express.json(),
      livro
     )
  }
  
 
 