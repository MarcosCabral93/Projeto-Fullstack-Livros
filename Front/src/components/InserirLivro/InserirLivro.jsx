import React, { useState } from "react";
import "./inserirLivro.css";
import axios from "axios";

function InserirLivro() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [capaURL, setCapa] = useState("");
  const [editora, setEditora] = useState("");
  const [ano, setAno] = useState("");

  async function enviar() {
    await axios
      .post("http://localhost:3000/livros/", {
        titulo,
        autor,
        capaURL,
        editora,
        ano,
      })
      .then((res) => {
        window.location = "/Livros/";
        console.log(res);
      })
      .catch((err) => console.log(err));

    setAno("");
    setTitulo("");
    setAutor("");
    setCapa("");
    setEditora("");
  }

  return (
    <div className="container">
      <div className="title-box">
        <h1>Novo Livro</h1>
      </div>
      <div className="form-box">
        <h3 className="preencha">Por favor, preencha os campos abaixo:</h3>
        <form onSubmit={enviar}>
          <section className="section-book">
            <label className="label" htmlFor="titulo">
              Digite o Titulo:
            </label>
            <input
              className="input"
              placeholder="Ex: A cabana"
              required
              type="text"
              value={titulo}
              name="titulo"
              onChange={(e) => setTitulo(e.target.value)}
            />
            <label className="label" htmlFor="titulo">
              Digite o autor:
            </label>
            <input
              className="input"
              placeholder="Ex: Willian P. Young"
              required
              type="text"
              value={autor}
              name="autor"
              onChange={(e) => setAutor(e.target.value)}
            />
            <label className="label" htmlFor="titulo">
              Digite a Editora:
            </label>
            <input
              className="input"
              placeholder="Ex: Editora Arqueiro
"
              required
              type="text"
              value={editora}
              name="editora"
              onChange={(e) => setEditora(e.target.value)}
            />
            <label className="label" htmlFor="titulo">
              Digite a data de lançamento:
            </label>
            <input
              className="input"
              placeholder="aaaa-mm-dd"
              required
              type="text"
              value={ano}
              name="ano"
              onChange={(e) => setAno(e.target.value)}
            />
            <label className="label" htmlFor="titulo">
              Insira a URL da Capa:
            </label>
            <input
              className="input"
              placeholder="Ex: https://images-na.ssl-images-amazon.com/images/I/91eXvRufnFL.jpg"
              required
              value={capaURL}
              type="text"
              name="capaURL"
              onChange={(e) => setCapa(e.target.value)}
            />
          </section>

          <button className="button" type="submit">
            Adicionar
          </button>
        </form>
      </div>
    </div>
  );
}
export default InserirLivro;
