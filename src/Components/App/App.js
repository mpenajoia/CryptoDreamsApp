
import { Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Main from '../Main/Main';

function App() {
  // const url = 'serum'
  // const [coinList, setCoinList] = useState([]);
  // const makeApiCall = () => {
  //   // fetch(`https://api.coingecko.com/api/v3/coins/${url}`)
  //   fetch(`https://api.coingecko.com/api/v3/coins/`)
  //   .then(response => response.json())
  //   .then((data) => {setCoinList(data)})
  // }

  // useEffect(()=> {
  //   makeApiCall()
    
  // }, [])
  
  // const selectedArray = coinList.filter((other) => {
  //   if(other.symbol === 'btc' || other.symbol === 'eth' || other.symbol === 'sol' || other.symbol === 'ada' || other.symbol === 'dot'){
  //   console.log(other)
  //   }
  // })

  // const mapThrough = coinList.map(item => <p>{item.id}</p>)
  
  return (
    <div className="App">
      <nav>
        <ul>
          <Link to="/">
            <li>Crypto FOMO</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      <main>
        {/* Route to homepage */}
        <Route exact path="/" component={Main}/>
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
