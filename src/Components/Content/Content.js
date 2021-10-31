import './Content.css'
import { useParams } from "react-router"
import { useEffect, useReducer, useRef, useState } from "react"
import Timeslot from "../Timeslot/Timeslot"

const Content = (props) => {

    let { sym } = useParams();
    const singleCrypto = props.sym
    const [liveBlockDetails, setLiveBlockDetails] = useState({})
    const indvApiCall = () => {
        fetch(`https://api.coingecko.com/api/v3/coins/${singleCrypto}`)
        .then(response => response.json())
        .then(data => setLiveBlockDetails(data))
    }
    useEffect(() => {
        indvApiCall()
    }, [props.sym] )
    
    let livePrice
    let liveName
    let marketCap
    let liveSymbol
    if(liveBlockDetails.market_data){
        livePrice = liveBlockDetails.market_data.current_price.usd.toFixed(2)
        liveName = liveBlockDetails.name
        marketCap = liveBlockDetails.market_data.market_cap.usd.toLocaleString()
        liveSymbol = liveBlockDetails.symbol.toUpperCase()
    }else{
        livePrice = 'loading'
        liveName='loading'
        marketCap='loading'
        liveSymbol='loading'
    }
    
    const dollarAmount = useRef()
    const [moneyInputValue, setMoneyInputValue] = useState('')
    const handleMoneyInputChange = (event) => {
        event.preventDefault()
        setMoneyInputValue(event.target.value)
    }
    const handleMoney = (event) => {
        console.log('handleMoney:',moneyInputValue)
    }
    const [returnedAmount, setReturnedAmount] = useState()
    const handleClick =(event) => {
        console.log(dollarAmount)
        setReturnedAmount(dollarAmount)
    }
    
    
    return (
        <>
            {liveName !== 'loading' ?
            <div className="live-section">
                <div>
                    <div className="live-price-block">
                        <h3>{liveName} ({liveSymbol})</h3>
                        <h1>${livePrice}</h1>
                        <p className="small-detail-info">Market Cap: ${marketCap}</p>
                    </div>
                    <div className="amount-input">
                        <p className="how-much">How much did you miss out on?</p>
                    {/* <form onSubmit={handleMoney(moneyInputValue)}> */}
                        <input useRef={dollarAmount} type="text" placeholder="Enter amount"/>
                        {/* <input onChange={handleMoneyInputChange} value={moneyInputValue} type="text" placeholder="Enter amount"/> */}
                        <button onClick={handleClick}>Enter</button>
                        <h1>{returnedAmount}</h1>
                    {/* </form> */}
                    </div>
                    {/* another if conditional when amount is input for the following to appear */}
                    <div>
                        <Timeslot liveBlockDetails={liveBlockDetails}/>
                    </div>
                </div>
            </div>
                : 
                ''
                // <div className="live-price-block">
                //     <h3>Bitcoin</h3>
                //     <h2>${livePrice}</h2>
                // </div>
            
            }
             {/* <div className="breakdowns"> */}
                 {/* <Timeslot /> */}
             {/* </div> */}
        </>
    )
}

export default Content