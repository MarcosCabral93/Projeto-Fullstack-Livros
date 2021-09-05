const router=require('express').Router()
const livroController=require('../controllers/LivroController')
router
.get ("/livros", livroController.getAllLivros)
.get ("/livros/:id", livroController.getOneLivro)
.get ("/livrosHome/", livroController.getAllLivrosHome)
.post ("/livros/", livroController.insertOneLivro)
.put("/livros/:id", livroController.updateOneLivro)
.delete("/livros/:id", livroController.deleteOneLivro)
module.exports=router