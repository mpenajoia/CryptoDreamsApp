import './Main.css'
import { useEffect, useState } from "react"
import Content from "../Content/Content"
import Sidebar from "../Sidebar/Sidebar"
import { useParams } from "react-router"

const Main = (props) => {
    let { sym } = useParams();
    // fetch for list of default cryptos in sidebar
    const [coinList, setCoinList] = useState([])
    const makeApiCall = () => {
        fetch('https://api.coingecko.com/api/v3/coins/')
        .then(response => response.json())
        .then((data) => {
            setCoinList(data);
        })
    }
    useEffect(() => {
        makeApiCall()
    }, [])

    const singleCrypto = sym
    const [inputCrypto, setInputCrypto] = useState();
    const [searchCrypto, setSearchCrypto] = useState(false)
    const handleAddCrypto = (event) => {
        event.preventDefault();
        setSearchCrypto(true)
    }
    const handleCryptoChange = (event) => {
        event.preventDefault();
        setInputCrypto(event.target.value)
    }
    const handleSubmitCrypto = (event) => {
        event.preventDefault();
        setSearchCrypto(false)
        setUserCrypto(inputCrypto)
        setUserAddedCoin([...userAddedCoin, inputCrypto])
        
        
        // this needs to return something that changes the information fetched on Content (singleCrypto) AND return something that changes the state of the array that controls the list of items in the sidebar
    }
    
    
    // need to return an object of all info pertaining to the coin that the user searched for
    // why don't I make a fetch for just that individual input?
    // const addError = <p>I'm afraid that may not be a cryptocurrency</p>

    const [userCrypto, setUserCrypto] = useState();
    const [validCrypto, setValidCrypto] = useState();
    const searchApiCall = () => {
        fetch(`https://api.coingecko.com/api/v3/coins/${userCrypto}`)
        .then(response => response.json())
        .then(data => setValidCrypto(data))
        .catch(() => setValidCrypto(false))

    }
    useEffect(()=>{
        searchApiCall();
    }, [userCrypto])
    //if fetch call is successful or NOTundefined, add it to the sidebar
    // if(validCrypto){
        //     console.log('here I am')
        // }

                    // const defaultSideArray = coinList.filter((item) => {
                    //     return item.symbol === 'btc' || item.symbol === 'eth' || item.symbol === 'sol' || item.symbol === 'ada' || item.symbol === 'dot'
                    // })
        
        // attempt to add new item to sidebar
    // const sidebarAddArray = ((newItem) => {
    //     return [...defaultSideArray, newItem]
    // })
    //     console.log(sidebarAddArray)
    
    const [userAddedCoin, setUserAddedCoin] = useState([]);
    // console.log(userAddedCoin)


    return (
        <div className="main">
            <Sidebar sym={sym} validCrypto={validCrypto} coinList={coinList} userAddedCoin={userAddedCoin} inputCrypto={inputCrypto} setInputCrypto={setInputCrypto} searchCrypto={searchCrypto} setSearchCrypto={setSearchCrypto} handleAddCrypto={handleAddCrypto} handleCryptoChange={handleCryptoChange} handleSubmitCrypto={handleSubmitCrypto} />
            <Content singleCrypto={singleCrypto} handleMoney={props.handleMoney}/>
        </div>
    )
}

export default Main

// sidebarAddArray={sidebarAddArray}
// defaultSideArray={defaultSideArray}