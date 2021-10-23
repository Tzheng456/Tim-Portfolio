import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Nav></Nav>
      <div className="navbar-spacer"></div>
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
