import './Content.css'
import { useEffect, useState } from "react"
import Timeslot from "../Timeslot/Timeslot"

const Content = (props) => {
    const [inputAmount, setInputAmount] = useState('');
    const [sendAmount, setSendAmount] = useState();
    const [liveBlockDetails, setLiveBlockDetails] = useState({})
    console.log(props.singleCrypto)
    const indvApiCall = () => {
        if(props.singleCrypto !== 'about' && props.singleCrypto !== 'contact' && props.singleCrypto){
        fetch(`https://api.coingecko.com/api/v3/coins/${props.singleCrypto}`)
        .then(response => response.json())
        .then(data => setLiveBlockDetails(data))
        }
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
                                <p className="small-detail-info left">ATH: ${ath.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                <h3 className="right">{liveName} ({liveSymbol})</h3>
                            </div>
                            <div className="market">
                                <p className="small-detail-info left">Market Rank: #{marketCapRank}</p>
                                <p className="small-detail-info right">Market Cap: ${marketCap}</p>
                            </div>
                        </div>
                    </div>
                    <div className="amount-input">
                        <p className="how-much">{error ? 'Enter a dollar amount that represents your imaginary investment.' : 'Please enter a valid number'}</p>
                        <form onSubmit={handleSubmitAmount}>
                            <input onChange={handleOnChange} value={inputAmount} type="text" placeholder="enter amount" />
                            {/* <button className="grad" onClick={handleSubmitAmount}>Enter</button> */}
                        </form>
                    </div>
                    <div>
                        {showTimeslots ? 
                        <>
                            <div className="instructions grad">
                                <h3>The breakdowns below show what your <span className="green">${inputAmount}</span> investment in <span className="green">{liveName}</span> would be worth today depending on when you bought it.</h3>
                            </div>
                                <Timeslot sendAmount={sendAmount} liveBlockDetails={liveBlockDetails}/>
                            <div className="instructions grad">    
                                <h3>Any regrets?</h3>
                            </div>
                        </>
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