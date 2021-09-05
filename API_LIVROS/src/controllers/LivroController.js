const livro = require("../models/LivroModel")
const { Op } = require("sequelize");   
class LivroController{
    
    async getAllLivros(req, res){
        const where={}
        const {titulo}=req.query;
        titulo ? where.titulo={}:null
        titulo?where.titulo [Op.substring]=titulo:null               
        try{
            const livros = await livro.findAll({where})
            res.json(livros)
        }catch (erro){
           res.status(404).res.send(erro)
        }
    }
    async getAllLivrosHome(req, res){
        
        const livros = await livro.findAll({limit:10
        
        })
        
        try{
            res.json(livros)
        }catch (erro){
           res.status(404).res.send(erro)
        }
    }

     async getOneLivro (req, res){
        const id = req.params.id

        try{

           const dados = await livro.findByPk(id)
               if(dados===null) res.status(404).res.send("NOT FOUND")
               else res.json(dados)
        }catch(err){
            console.log(err)
            res.status(404).send("Nenhum livro com esse ID foi encontrado.")
        }
    }
    
     async insertOneLivro (req, res) {
        try{
            let {titulo,ano,autor,editora,capaURL} = req.body;
                const dados = await livro.create({
                titulo: titulo,
                ano:ano,
                editora:editora,
                autor:autor,
                capaURL:capaURL
            })

            res.json(dados);
        }catch(err){
            
            send(err)
        }
    }
      async updateOneLivro (req,res){
        try{
            const id = req.params.id
            let {titulo,ano,autor,editora,capaURL} = req.body;
           
            const dados = await livro.update({
                titulo: titulo,
                ano:ano,
                editora:editora,
                autor:autor,
                capaURL:capaURL
            },{
            where: { "id": id
                
            }})
            
            if(dados[0])res.send(`Livro de id= ${id} atualizado com sucesso`)
            else res.send(`Nenhum Livro de id= ${id} foi atualizado`)

        }catch(err){
           
            res.send(err)
        }
    }
    async deleteOneLivro(req, res)  {
        const id = req.params.id
        try{
            const dados = await livro.destroy({
                where: {
                    id:id
                }
            })
            if(dados)res.send(`Livro de id= ${id} removido com sucesso`)
            else res.send(`Nenhum Livro de id= ${id} foi encontrado`)
        }catch(err){
           
            res.send(err)
        }
    }

}
module.exports = new LivroController();
