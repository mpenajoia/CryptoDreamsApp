import './Sidebar.css'
import { useState } from "react"
import { Link } from "react-router-dom"

const Sidebar = (props) => {
    // fetch api call when user inputs from a search

    // create an empty array (in a useState?) to store the incoming user searched cryptos
    //this array will later be mapped through (after being validated) and will appear in the side bar

    //validity of crypto will come from the api fetch's confirmation

    const sidebarMap = props.defaultSideArray.map(item => <li><Link to={"/" + item.id}><img src={item.image.small} alt={item.id}/><span className="sidebar-sym">{item.symbol.toUpperCase()}</span></Link></li>)

    return (
        <div className="sidebar">
            
            <ul>
                {sidebarMap}
                {/* render the second array thats mapped over of newly added cryto's */}
                <li><button onClick={props.handleAddCrypto}>+</button></li>
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