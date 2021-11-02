import './Sidebar.css'
import { Link } from "react-router-dom"

const Sidebar = (props) => {
    console.log(props.validCrypto)

    const defaultArray = props.coinList.filter((item) => {
        return item.symbol === 'btc' || item.symbol === 'eth' || item.symbol === 'sol' || item.symbol === 'ada' || item.symbol === 'dot'
    })
    
    const sidebarMap = defaultArray.map(item => <li><Link to={"/" + item.id}><img src={item.image.small} alt={item.id}/><span className="sidebar-sym">{item.symbol.toUpperCase()}</span></Link></li>)

    const addedCoinMap = props.validCrypto.map(item => <li><Link to={"/" + item.id}><img src={item.image.small} alt={item.id}/><span className="sidebar-sym">{item.symbol.toUpperCase()}</span></Link></li>)



    // {props.searchError ? 'Please check your spelling' : 'Which cryptocurrency would you like to check?'}

    return (
        <div className="sidebar">
            
            <ul>
                {sidebarMap}
                {addedCoinMap}
                <li><button className="addCrypto grad" onClick={props.handleAddCrypto}>{props.searchCrypto ? '-' : '+' }</button></li>
            </ul>
            {props.searchCrypto ? 
                <>
                    <form onSubmit={props.handleSubmitCrypto}>
                    <p className="check-coin">{props.searchError ? 'Please check your spelling' : 'Which cryptocurrency would you like to check?'}</p>
                        <input onChange={props.handleCryptoChange} value={props.inputCrypto} type="text" placeholder="enter a cryptocurrency"/>
                    </form> 
                </>
                : ''
            }
        </div>
    )
}
export default Sidebar