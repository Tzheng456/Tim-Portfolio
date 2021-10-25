import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import Projects from './components/Projects';

function App() {
  const [title, setTitle] = useState('Tim Zheng - Personal Portfolio Page');

  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div>
      <Nav></Nav>
      <div className="navbar-spacer"></div>
      <Switch>
        <Route path="/projects">
          <Projects setTitle={setTitle} />
        </Route>
        <Route path="/about">
          <About setTitle={setTitle} />
        </Route>
        <Route path="/" exact>
          <Home setTitle={setTitle} />
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
