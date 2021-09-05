const express = require("express")
const app = express() 
const routes=require('./src/Router')
const {APP_PORT}=require('./src/config/config')

routes(app)

const db = require("./src/infra/db")
db.sync()
    .then(() => console.log("banco conectado e sincronizado e pronto para uso"))
    .catch((e) => console.log(e))

app.listen(APP_PORT, () => {
    console.log(`rodando na porta  ${APP_PORT}`)
})