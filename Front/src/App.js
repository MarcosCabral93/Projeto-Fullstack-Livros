import './App.css';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Erro from "./components/Erro/Erro"
import Home from "./components/Home/Home";
import AllLivros from "./components/AllLivros/AllLivros"
import DeletePutLivro from "./components/DeletePutLivro/DeletePutLivro"
import InserirLivro from "./components/InserirLivro/InserirLivro"
function App() {
  return (
   <div className="app">

    <BrowserRouter>
    <Header/>
    <main>
    <Switch>

      <Route path='/' exact>
      <Home/>
      </Route>
      <Route path='/Livros' exact>
        <AllLivros/>
      </Route>
      <Route path='/Livros/:id' exact>
        <DeletePutLivro/>
      </Route>
      <Route path='/CriarLivro/' exact>
        <InserirLivro/>

      </Route>
      <Route path='*' >
        <Erro/>
      </Route>
      
    </Switch>
    </main>
    <Footer/>
    </BrowserRouter>



   </div>
  );
}

export default App;
