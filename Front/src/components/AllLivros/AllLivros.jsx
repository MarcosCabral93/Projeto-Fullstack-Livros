import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Erro from "../Erro/Erro";

function AllLivros() {
  const [search, setSearch]=useState('')
  const [livros, setLivros] = useState([]);
  useEffect(() => {
    
    let url="http://localhost:3000/livros/"
   
    if(search.length!==0){
        url+= `?titulo=${search}`
       
    }
    const req = async () => {
   await axios.get(url)
     .then((response) => {
       console.log(response.data.length)
     setLivros(response.data);
    
    
    })
     .catch((error) => {
      console.log(error)
     });
 };

 req();
 
}, [search,]);

  return (
    <div className="container">
      <div className="title-box">
        <h1>Lista de Livros</h1>
      <input onChange={(e) => setSearch(e.target.value)} value={search} 
        type="text" className="search" placeholder="Busca Livros" />
        
       </div>

      <div className="book-box">
      {livros.length > 0 ? (
               
        livros.map((item) => {
          return (
            <article key={item.id} className="artigo">
              <Link to={`/livros/${item.id}`}>
                <img src={item.capaURL} alt="capa do Livro" className="img" />
              </Link>
            </article>
          );
        })):(
            <Erro/>
        )}
      </div>
    </div>
  );
}

export default AllLivros;