import './Content.css'
import { useEffect, useState } from "react"
import Timeslot from "../Timeslot/Timeslot"

const Content = (props) => {
    const [inputAmount, setInputAmount] = useState();
    const [sendAmount, setSendAmount] = useState();
    const [liveBlockDetails, setLiveBlockDetails] = useState({})
    const indvApiCall = () => {
        fetch(`https://api.coingecko.com/api/v3/coins/${props.singleCrypto}`)
        .then(response => response.json())
        .then(data => setLiveBlockDetails(data))
    }
    useEffect(() => {
        indvApiCall()
    }, [props.singleCrypto] )
    let liveImage 
    let livePrice
    let liveName
    let marketCap
    let liveSymbol
    let marketCapRank
    let ath
    let liveSite
    if(liveBlockDetails.market_data){
        livePrice = liveBlockDetails.market_data.current_price.usd.toFixed(2)
        liveName = liveBlockDetails.name
        marketCap = liveBlockDetails.market_data.market_cap.usd.toLocaleString()
        liveSymbol = liveBlockDetails.symbol.toUpperCase()
        liveImage = liveBlockDetails.image.small
        marketCapRank = liveBlockDetails.market_cap_rank
        ath = liveBlockDetails.market_data.ath.usd
        liveSite = liveBlockDetails.links.homepage[0]
    }else{
        livePrice = 'loading'
        liveName ='loading'
        marketCap ='loading'
        liveSymbol ='loading'
        liveImage ='loading'
        marketCapRank = 'loading'
        ath = 'loading'
        liveSite = 'loading'
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
                    <div className="first-block">
                        <div className="live-image">
                            <a href={liveSite} rel="noopener noreferrer" target="_blank">
                                <img alt="live_image" src={liveImage}/>
                            </a>
                        </div>
                        <div className="live-price-block grad">
                            <h1>${livePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
                            <div className="market">
                                <p className="small-detail-info left">ATH: ${ath}</p>
                                <h3 className="right">{liveName} ({liveSymbol})</h3>
                            </div>
                            <div className="market">
                                <p className="small-detail-info left">Market Rank: #{marketCapRank}</p>
                                <p className="small-detail-info right">Market Cap: ${marketCap}</p>
                            </div>
                        </div>
                    </div>
                    <div className="amount-input">
                        <p className="how-much">{error ? 'How much did you miss out on?' : 'Please enter a valid number'}</p>
                        <form onSubmit={handleSubmitAmount}>
                            <input onChange={handleOnChange} value={inputAmount} type="text" placeholder="enter an amount" />
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