import './Timeslot.css'

const Timeslot = (props) => {
    // console.log(props.sendAmount)
    const tokens = props.liveBlockDetails.symbol.toUpperCase()
    //variable storing user-input-amount
    const userInput = props.sendAmount
    //variable for today-price
    const currentPrice = props.liveBlockDetails.market_data.current_price.usd
    //variables for the %-time-change 
    const percentDayChange = props.liveBlockDetails.market_data.price_change_percentage_24h
    const percentWeekChange = props.liveBlockDetails.market_data.price_change_percentage_7d
    const percentMonthChange = props.liveBlockDetails.market_data.price_change_percentage_30d
    const percentYearChange = props.liveBlockDetails.market_data.price_change_percentage_1y
    
    // variables storing logic (time-price) determining the price a certain time ago based on % change
    const dayPrice = ((currentPrice * 100) / (100 + (percentDayChange))).toFixed(2)
    const weekPrice = ((currentPrice * 100) / (100 + (percentWeekChange))).toFixed(2)
    const monthPrice = ((currentPrice * 100) / (100 + (percentMonthChange))).toFixed(2)
    const yearPrice = ((currentPrice * 100) / (100 + (percentYearChange))).toFixed(2)
    
    
    //variables for token-quantity
    const dayTokens = (userInput / dayPrice).toFixed(6)
    const weekTokens = (userInput / weekPrice).toFixed(6)
    const monthTokens = (userInput / monthPrice).toFixed(6)
    const yearTokens = (userInput / yearPrice).toFixed(6)
    
    //variables for total-value
    const dayTotalValue = (dayTokens * currentPrice).toFixed(2)
    const weekTotalValue = (weekTokens * currentPrice).toFixed(2)
    const monthTotalValue = (monthTokens * currentPrice).toFixed(2)
    const yearTotalValue = (yearTokens * currentPrice).toFixed(2)

    //variables for gain/loss
    const dayGainLoss = (dayTotalValue - userInput).toFixed(2)
    const weekGainLoss = (weekTotalValue - userInput).toFixed(2)
    const monthGainLoss = (monthTotalValue - userInput).toFixed(2)
    const yearGainLoss = (yearTotalValue - userInput).toFixed(2)

    const timeslotArray = ['Day', 'Week', 'Month', 'Year']
    const timeslotMap = timeslotArray.map((item) => {
        return (
            <div className="price-block">
                <h3>A {item} Ago</h3>
                {/* style={item.change > 0 ? {color:'green'} : {color:'red'}}>{item.change} */}
                <h2 style={dayGainLoss > 0 ? {color:'green'} : {color:'red'}}>{dayGainLoss}</h2>
                <h3>${dayTotalValue}</h3>
                <p>Your investment would be worth</p>
                <p className="tokens">You would have {dayTokens} {tokens}'s</p>
            </div>
        )
    })

    return (
        <>
            {/* token quantity will have to be .toFixed(5) */}
            <div className="price-block-wrapper">
                {timeslotMap}
            </div>
        </>
    )
}

export default Timeslot