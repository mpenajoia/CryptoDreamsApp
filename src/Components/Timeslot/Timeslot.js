
const Timeslot = (props) => {
    const tokens = props.liveBlockDetails.symbol.toUpperCase()
    console.log(props.liveBlockDetails)
    const currentPrice = props.liveBlockDetails.market_data.current_price.usd
    const percentDayChange = props.liveBlockDetails.market_data.price_change_percentage_24h
    const percentWeekChange = props.liveBlockDetails.market_data.price_change_percentage_7d
    const percentMonthChange = props.liveBlockDetails.market_data.price_change_percentage_30d
    const percentYearChange = props.liveBlockDetails.market_data.price_change_percentage_1y
    

    const dayPrice = ((currentPrice * 100) / (100 + (percentDayChange)))
    const weekPrice = ((currentPrice * 100) / (100 + (percentWeekChange)))
    const monthPrice = ((currentPrice * 100) / (100 + (percentMonthChange)))
    const yearPrice = ((currentPrice * 100) / (100 + (percentYearChange)))
    
    const timeslotArray = ['Day', 'Week', 'Month', 'Year']
    const timeslotMap = timeslotArray.map((item) => {
        return (
            <div className="price-block">
                <h3>{item} Ago</h3>
                {/* style={item.change > 0 ? {color:'green'} : {color:'red'}}>{item.change} */}
                <h2>G/L</h2>
                <h3>$Total</h3>
                {/* token quantity will have to be .toFixed(5) */}
                <h4>53 {tokens}'s</h4>
            </div>
        )
    })

    return (
        <div className="price-block-wrapper">
            {timeslotMap}
        </div>
    )
}

export default Timeslot