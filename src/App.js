import React from "react";
import { HashRouter,Route } from "react-router-dom";
import Home from "./routes/Home";
import Face from "./routes/Face";
import Result from "./routes/Result";

function App(){
  return (
  <HashRouter>
    <Route path="/" exact={true} component={Home}/>
    <Route path="/face" exact={true} component={Face} />
    <Route path="/result" component={Result} />
  </HashRouter>
  );
}

export default App;