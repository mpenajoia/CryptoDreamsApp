
import { Route, Link } from 'react-router-dom';
import './App.css';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
    
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">
            CryptoFOMO
          </Link></li>
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

      <Footer />
    </div>
  );
}

export default App;
