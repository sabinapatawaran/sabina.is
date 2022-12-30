import './App.css';

import { Route, Switch } from 'react-router-dom';
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import NotFound from './pages/notfound';
//import Acknowledgement from './components/Acknowledgement';

function App() {
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
