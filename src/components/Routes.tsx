import React from "react";
import Switch from "react-bootstrap/esm/Switch";
import {BrowserRouter, Route} from "react-router-dom";
import About from "./About";
import LibraryContent from "./LibraryContent";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LibraryContent}/>
        <Route path="/About" component={About}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;