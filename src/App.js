import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // const url = 'serum'
  const [coinList, setCoinList] = useState([]);
  const makeApiCall = () => {
    // fetch(`https://api.coingecko.com/api/v3/coins/${url}`)
    fetch(`https://api.coingecko.com/api/v3/coins/`)
    .then(response => response.json())
    .then((data) => {setCoinList(data)})
  }

  useEffect(()=> {
    makeApiCall()
    
  }, [])
  
  // console.log('coinList: ', coinList[6].name)
  const selectedArray = coinList.filter((other) => {
    if(other.id === 'bitcoin' || other.id === 'ripple'){
    console.log(other)
    }
  })
  // setCoinList(selectedArray)
  // const selectedArray = coinList.filter((other) => {
  //   if(other === 'bitcoin'){
      
  //   return(
  //       other
  //     )
  //   }
// })

  const mapThrough = coinList.map(item => <p>{item.id}</p>)
  
  return (
    <div className="App">
      {mapThrough}
    </div>
  );
}

export default App;
