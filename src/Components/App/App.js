
import { Route, Link } from 'react-router-dom';
import './App.css';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Intro from '../Intro/Intro';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/">
            cryptoFOMO
          </Link></li>
        </ul>
      </nav>
      <main>
          <Route exact path="/" render={(routerProps) => <Main {...routerProps} />}/>
          <Route exact path="/" component={Intro} />
          <Route exact path="/:sym" render={(routerProps) => <Main {...routerProps} />}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
      </main>
      <Footer />
    </div>
  );
}
export default App;
