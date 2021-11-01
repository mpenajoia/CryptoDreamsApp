import './Timeslot.css'

const Timeslot = (props) => {
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
    // variable of objects per time frame
    const dayVariables = {time: 'Day', gainLoss: dayGainLoss, totalValue: dayTotalValue, tokenAmount: dayTokens}
    const weekVariables = {time: 'Week', gainLoss: weekGainLoss, totalValue: weekTotalValue, tokenAmount: weekTokens}
    const monthVariables = {time: 'Month', gainLoss: monthGainLoss, totalValue: monthTotalValue, tokenAmount: monthTokens}
    const yearVariables = {time: 'Year', gainLoss: yearGainLoss, totalValue: yearTotalValue, tokenAmount: yearTokens}
    //Array of time objects
    const timeVariablesArray = [dayVariables, weekVariables, monthVariables, yearVariables]
    const timeVariablesMap = timeVariablesArray.map((item) => {
        return(
            <div className="price-block grad">
                <h3>A {item.time} Ago</h3>
                <h2 style={item.gainLoss > 0 ? {color:'#24C7A2'} : {color:'#BC353B'}}>{item.gainLoss}</h2>
                <p>{item.gainLoss > 0 ? 'Gained' : 'Lost'}</p>
                <h3>${item.totalValue}</h3>
                <p>Total Worth</p>
                <p className="tokens">You would have {item.tokenAmount} {tokens}</p>
            </div>
        )
    })

    return (
        <>
            <div className="price-block-wrapper">
                {timeVariablesMap}
            </div>
        </>
    )
}

export default Timeslot