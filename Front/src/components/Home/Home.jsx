import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";
import axios from "axios";
import Erro from "../Erro/Erro";
import "./home.css";


function Home() {
  const [livros, setLivros] = useState([]);
  useEffect(() => {
    const req = async () => {
      await axios
        .get("http://localhost:3000/livrosHome/")
        .then((response) => {
          setLivros(response.data);
        })
        .catch((error) => {
          <Erro />;
        });
    };

    req();
  }, []);

  return (
    <div className="container">
      <div className="title-box">
        <h1> Destaques</h1>
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

export default Home;
