//Importamos react
import React from "react";
import "./App.css";
import Boton from "./components/Boton";
import Botonnew from "./components/Botonnew";
import Paginaprincipal from "./components/Paginaprincipal";

//Se incorpora el react-router
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Pagina" component={Paginaprincipal} />
        <Route exact path="/Boton" component={Boton} />
        <Route exact path="/Boton/new" component={Botonnew} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
