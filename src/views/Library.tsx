import React from "react";
import Welcome from '../components/Welcome';
import LibraryContent from "../components/LibraryContent";
import {Container} from "react-bootstrap";
import Footer from "../components/Footer";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import {ToastProvider} from "react-toast-notifications";

const Library: React.FC = () => {
  return (
    <Container fluid={true}>
      <BrowserRouter>
        <Welcome/>
        <Switch>
          <Route path="/about"><About/></Route>
          <Route path="/contact"><Contact/></Route>
          <Route path="/">
            <ToastProvider>
              <LibraryContent/>
            </ToastProvider>
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer/>
    </Container>

  )
};

export default Library;