import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="logo"></div>
      <nav>
        <Link className="nav-links" to="/">
          Home
        </Link>
        <Link className="nav-links" to="/Livros">
          Lista completa de Livros
        </Link>
        <Link className="nav-links" to="/CriarLivro/">
          Criar Livro
        </Link>
      </nav>
    </header>
  );
}
export default Header;
