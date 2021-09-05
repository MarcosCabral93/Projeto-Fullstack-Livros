const Sequelize=require('sequelize')
const Livraria= new Sequelize("Livraria","root", "1111",{
    dialect: 'sqlite',
    storage: './Livro.sqlite'
})
module.exports=Livraria