// stylesheet
import './App.css';

// react
import { Route, Switch } from 'react-router-dom';
// import { useState } from 'react';

// fonts
import "./fonts/BantayogSans-Semibold.otf";

// basic features
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// pages
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import NotFound from './pages/notfound';

// import Acknowledgement from './components/Acknowledgement';

// `ackn` is short for 'Acknowledge'

function App() {
  // const [ isAckn, setIsAckn ] = useState(false);
  // console.log(isAckn);

  return (
    <div className="App">
      <Nav />
      <main>
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route exact path = "/about">
            <About />
          </Route>
          <Route exact path = "/projects">
            <Projects />
          </Route>
          <Route exact path = "/contact">
            <Contact />
          </Route>
          <Route path = "*">
            <NotFound />
          </Route>
        </Switch>
        {/* {
          !isAckn && (<Acknowledgement />)
        } */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
