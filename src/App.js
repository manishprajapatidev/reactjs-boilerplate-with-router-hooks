import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Layout from './components/containers/Layout';

/** Load all Components such as Login, Register, Static Pages etc */
import Home from './views/Home';
import Contact from './views/Contact';
import Blog from './views/Blog';

import './App.css';

function App() {

  return (
      <Router>
        <Layout>
        <div className="App">
          <div className="App-header">
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/blog" component={Blog} />
          </div>
        </div>
        </Layout>
      </Router>
  );
}
 
export default App;
