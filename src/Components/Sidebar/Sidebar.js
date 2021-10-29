import { useState } from "react"

const Sidebar = (props) => {

    // make a useState that is an array of the current selection for the li's below similar to the example below
    // const [defaultList, setDefaultList] = useState(['btc', 'eth', 'dot', 'sol', 'ada'])
    // if I can pull off the add crypto feature, then i will need to use the spread operator on defaultList to make a copy of the default cryptos and with the addition of the user's additions save it to a new variable
    // for example const newSideBarOptions = setDefaultList([...defaultList, added crypto])
    // the li's below will be replaced with a function thats maps through the useState's array to list an li for each of the items in the array

    return (
        <div>
            <h2>Sidebar Stuff</h2>
            <ul>
                <li><span className="crypt-ticker">BTC</span> <img src="" alt="BTC"/></li>
                <li><span className="crypt-ticker">ETH</span> <img src="" alt="BTC"/></li>
                <li><span className="crypt-ticker">SOL</span> <img src="" alt="BTC"/></li>
                <li><span className="crypt-ticker">ADA</span> <img src="" alt="BTC"/></li>
                <li><span className="crypt-ticker">DOT</span> <img src="" alt="BTC"/></li>
            </ul>
        </div>
    )
}

export default Sidebar