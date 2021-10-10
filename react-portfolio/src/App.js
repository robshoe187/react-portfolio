import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

import About from './pages/About.js';
import ContactForm from './pages/ContactForm.js';
import Resume from './pages/Resume.js';
import Works from './pages/Works.js';

function App() {

  return (
    <div>
    <Header></Header>  
    <Router>
      <Navigation />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/contact" component={ContactForm} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/works" component={Works} />
        </Switch>
    </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
