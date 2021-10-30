import './Sidebar.css'
import { useState } from "react"
import { Link } from "react-router-dom"

const Sidebar = (props) => {
    // console.log('sidebar props: ', props.defaultSideArray)

    // make a useState that is an array of the current selection for the li's below similar to the example below
    // const [defaultList, setDefaultList] = useState(['btc', 'eth', 'dot', 'sol', 'ada'])
    // if I can pull off the add crypto feature, then i will need to use the spread operator on defaultList to make a copy of the default cryptos and with the addition of the user's additions save it to a new variable
    // for example const newSideBarOptions = setDefaultList([...defaultList, added crypto])
    // the li's below will be replaced with a function thats maps through the useState's array to list an li for each of the items in the array


    const sidebarMap = props.defaultSideArray.map(item => <li><Link to={"/" + item.id}><img src={item.image.thumb} alt={item.id}/><span className="sidebar-sym">{item.symbol.toUpperCase()}</span></Link></li>)

    

    return (
        <div className="sidebar">
            
            <ul>
                {sidebarMap}
            </ul>
        </div>
    )
}

export default Sidebar