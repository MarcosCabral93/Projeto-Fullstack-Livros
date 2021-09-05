const express=require('express')
const livro = require('./livroRouter')
const cors=require('cors')
 module.exports = app => {
    app.use(
      express.json(),
      cors(),
      livro,
     )
  }
  
 
 