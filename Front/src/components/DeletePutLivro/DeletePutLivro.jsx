import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import axios from "axios";
import "./deletePutLivro.css";

function DeletePutLivros() {
  const [livro, setLivro] = useState([]);
  const [titulo, setTitulo] = useState("");
  const [editora, setEditora] = useState("");
  const [capaURL, setCapa] = useState("");
  const [autor, setAutor] = useState("");
  const [ano, setAno] = useState("");
  const { id } = useParams();
  const url = "http://localhost:3000/livros/" + id;

  useEffect(() => {
    const req = async () => {
      await axios
        .get(url)
        .then((response) => {
          setLivro(response.data);
          setAno(response.data.ano);
          setAutor(response.data.autor);
          setCapa(response.data.capaURL);
          setEditora(response.data.editora);
          setTitulo(response.data.titulo);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    req();
  }, [url]);

  async function put() {
    await axios
      .put(url, { titulo, editora, ano, capaURL, autor })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  async function del() {
    await axios
      .delete(url)
      .then((res) => {
        window.location = "/Livros/";
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <div className="title-box">
        <h1>{livro.titulo}</h1>
      </div>
      <div className="form-box">
        <form style={{ padding: "30px 0" }} onSubmit={put}>
          <section className="section-book">
            <label className="label"> Titulo:</label>
            <input
              className="input"
              placeholder="Digite o Titulo"
              required
              type="text"
              value={titulo}
              name="titulo"
              onChange={(e) => setTitulo(e.target.value)}
            />

            <label className="label"> Autor:</label>
            <input
              className="input"
              placeholder="Digite o autor"
              required
              type="text"
              value={autor}
              name="autor"
              onChange={(e) => setAutor(e.target.value)}
            />

            <label className="label"> Editora:</label>
            <input
              className="input"
              placeholder="Digite a Editora"
              required
              type="text"
              value={editora}
              name="editora"
              onChange={(e) => setEditora(e.target.value)}
            />

            <label className="label"> Ano lançamento:</label>
            <input
              className="input"
              placeholder="aaaa-mm-dd"
              required
              type="text"
              value={ano}
              name="ano"
              onChange={(e) => setAno(e.target.value)}
            />

            <label className="label"> Url da capa:</label>
            <input
              className="input"
              placeholder="Digite a  URL da Capa"
              required
              value={capaURL}
              type="text"
              name="capaURL"
              onChange={(e) => setCapa(e.target.value)}
            />
          </section>
          <section className="button-section section-book">
            <button
              style={{ marginBottom: "0" }}
              type="button"
              className="button"
              onClick={del}
            >
              Excluir
            </button>
            <button className="button" type="submit">
              Editar
            </button>
          </section>
        </form>
        <section className="capa-livro section-book">
          <img src={livro.capaURL} alt="livro" />
          <h5 style={{ color: "#fff" }}>{livro.autor}</h5>
          <h5 style={{ color: "#fff" }}>{livro.editora}</h5>
          <h5 style={{ color: "#fff" }}>{livro.ano}</h5>
        </section>
      </div>
    </div>
  );
}
export default DeletePutLivros;
