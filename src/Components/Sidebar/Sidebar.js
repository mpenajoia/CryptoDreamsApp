import './Sidebar.css'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Sidebar = (props) => {

    // if(props.validCrypto.error){
    //     // put  a use state in here to control an error message?
    //     console.log('Coin does not exist')
    // }else{
    //     // send props.validCrypto to where it needs to go. into an array? that will continue to be added to (theUserAddedCoin??)
    //     console.log('theUserAddedCoin: ', theUserAddedCoin)
    //     console.log('userAddedCoinFilter: ', userAddedCoinFilter)
    // }
    


    // const [userUpdatedCoins, setUserUpdatedCoins] = useState([])
    console.log(props.validCrypto)

    const defaultArray = props.coinList.filter((item) => {
        return item.symbol === 'btc' || item.symbol === 'eth' || item.symbol === 'sol' || item.symbol === 'ada' || item.symbol === 'dot'
    })
    
    const sidebarMap = defaultArray.map(item => <li><Link to={"/" + item.id}><img src={item.image.small} alt={item.id}/><span className="sidebar-sym">{item.symbol.toUpperCase()}</span></Link></li>)

    const addedCoinMap = props.validCrypto.map(item => <li><Link to={"/" + item.id}><img src={item.image.small} alt={item.id}/><span className="sidebar-sym">{item.symbol.toUpperCase()}</span></Link></li>)

    // let addedCoinMap
    // if(props.validCrypto.error){
    //     addedCoinMap = 'loading'
    // }else{
    //     addedCoinMap =  <li><Link to={"/" + props.validCrypto.id}><img src={props.validCrypto.image.small} alt={props.validCrypto.id}/><span className="sidebar-sym">{props.validCrypto.symbol.toUpperCase()}</span></Link></li>
    // }
    return (
        <div className="sidebar">
            
            <ul>
                {sidebarMap}
                {addedCoinMap}
                {/* {props.validCrypto.id === props.userAddedCoin[0] ? (addedCoinMap) : ''} */}
                {/* {props.validCrypto.error ? '' : (addedCoinMap)} */}
                <li><button className="addCrypto grad" onClick={props.handleAddCrypto}>+</button></li>
            </ul>
            {props.searchCrypto ? 
                <form onSubmit={props.handleSubmitCrypto}>
                    <input onChange={props.handleCryptoChange} value={props.inputCrypto} type="text" placeholder="enter a cryptocurrency"/>
                </form> 
                : ''
            }
        </div>
    )
}
export default Sidebar