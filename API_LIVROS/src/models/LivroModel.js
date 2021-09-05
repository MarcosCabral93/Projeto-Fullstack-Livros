const Sequelize=require('sequelize')
const db=require("../infra/db")

const Livro=db.define("livro",{
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    capaURL: {
        type: Sequelize.STRING,
        allowNull: false
    },
    editora: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ano: {
        type: Sequelize.STRING,
        allowNull:false
    },
    autor:{
        type: Sequelize.STRING,
        allowNull:false
    }
})

module.exports=Livro;