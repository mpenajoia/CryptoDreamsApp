
import { Route, Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
import './App.css';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Main from '../Main/Main';
// import Content from '../Content/Content';

function App() {
    
  return (
    <div className="App">
      <nav>
        <ul>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/">
            <li>CryptoFOMO</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>

      <main>
        {/* Route to homepage */}
        <Route exact path="/" render={(routerProps) => <Main {...routerProps} />}/>
        <Route exact path="/:sym" render={(routerProps) => <Main {...routerProps} />}/>
        {/* Route to About page */}
        <Route exact path="/about" component={About}/>
        {/* Route to Contact page */}
        <Route exact path="/contact" component={Contact}/>
      </main>

      <footer>
        <p>This is my footer.</p>
      </footer>
    </div>
  );
}

export default App;
