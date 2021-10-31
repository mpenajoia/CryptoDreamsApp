import './Content.css'
import { useEffect, useState } from "react"
import Timeslot from "../Timeslot/Timeslot"

const Content = (props) => {
    const [inputAmount, setInputAmount] = useState();
    const [sendAmount, setSendAmount] = useState();

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
    
    const handleOnChange = (event) => {
        event.preventDefault();
        setInputAmount(event.target.value)
    }
    const [error, setError] = useState(true)
    const [showTimeslots, setShowTimeslots] = useState(false)
    const handleSubmitAmount = (event) => {
        event.preventDefault();
        if(isNaN(inputAmount)){
            setShowTimeslots(false)
            setError(false)
        }else{
            setSendAmount(inputAmount)
            setShowTimeslots(true)
            setError(true)
        }
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
                        <p className="how-much">{error ? 'How much did you miss out on?' : 'Please enter a valid number'}</p>
                        <form onSubmit={handleSubmitAmount}>
                            <input onChange={handleOnChange} value={inputAmount} type="text" placeholder="10" />
                        </form>
                    </div>
                    <div>
                        {showTimeslots ? 
                        <Timeslot sendAmount={sendAmount} liveBlockDetails={liveBlockDetails}/>
                        : ''
                        }
                    </div>
                </div>
            </div>
                : 
                ''
            }
        </>
    )
}

export default Content