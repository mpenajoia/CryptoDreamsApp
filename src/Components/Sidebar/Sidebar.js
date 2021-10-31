import './Sidebar.css'
import { useState } from "react"
import { Link } from "react-router-dom"

const Sidebar = (props) => {
    // fetch api call when user inputs from a search

    // create an empty array (in a useState?) to store the incoming user searched cryptos
    //this array will later be mapped through (after being validated) and will appear in the side bar

    //validity of crypto will come from the api fetch's confirmation

    const sidebarMap = props.defaultSideArray.map(item => <li><Link to={"/" + item.id}><img src={item.image.small} alt={item.id}/><span className="sidebar-sym">{item.symbol.toUpperCase()}</span></Link></li>)

    const [inputCrypto, setInputCrypto] = useState();
    const [searchCrypto, setSearchCrypto] = useState(false)
    const handleAddCrypto = (event) => {
        event.preventDefault();
        setSearchCrypto(true)
        
    }
    const handleCryptoChange = (event) => {
        event.preventDefault();
        setInputCrypto(event.target.value)
    }
    const handleSubmitCrypto = (event) => {
        event.preventDefault();
        setSearchCrypto(false)
        console.log(inputCrypto)
    }

    return (
        <div className="sidebar">
            
            <ul>
                {sidebarMap}
                {/* render the second array thats mapped over of newly added cryto's */}
                {/* hard code an add crypto button in an li */}
                <li><button onClick={handleAddCrypto}>Add Me</button></li>
            </ul>
            {searchCrypto ? 
                <form onSubmit={handleSubmitCrypto}>
                    <input onChange={handleCryptoChange} value={inputCrypto} type="text" placeholder="enter a cryptocurrency"/>
                </form> 
                : ''
            }
        </div>
    )
}

export default Sidebar