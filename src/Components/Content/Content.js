import Timeslot from "../Timeslot/Timeslot"

const Content = (props) => {
    console.log('props on content: ', props)


    return (
        <div>
            <h2>Content Stuff</h2>
            <div className="live-price-block">
                <h3>Bitcoin</h3>
                <h2>$60, 000</h2>
                <ul>
                    <li className="small-detail-info">Market Cap</li>
                    <li className="small-detail-info">Circulating Supply</li>
                    <li className="small-detail-info">Total Supply</li>
                </ul>
            </div>
            <input type="text" placeholder="Enter amount"/>
            <button onClick={props.handleMoney}>Enter</button>
            <div className="breakdowns">
                <Timeslot />
            </div>
        </div>
    )
}

export default Content