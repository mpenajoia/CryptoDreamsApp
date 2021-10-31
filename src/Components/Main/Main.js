import './Main.css'
import { useEffect, useState } from "react"
import Content from "../Content/Content"
import Sidebar from "../Sidebar/Sidebar"
import { useParams } from "react-router"

const Main = (props) => {
    let { sym } = useParams();

    const [coinList, setCoinList] = useState([])
    const makeApiCall = () => {
        fetch('https://api.coingecko.com/api/v3/coins/')
        .then(response => response.json())
        .then((data) => {
            setCoinList(data);
        })
    }
    useEffect(() => {
        makeApiCall()
    }, [])
    const [addedCrypto, setAddedCrypto] = useState(sym)

    const defaultSideArray = coinList.filter((item) => {
        return item.symbol === 'btc' || item.symbol === 'eth' || item.symbol === 'sol' || item.symbol === 'ada' || item.symbol === 'dot'
    })
    

    return (
        <div className="main">
            <Sidebar sym={sym} setAddedCrypto={setAddedCrypto} defaultSideArray={defaultSideArray}/>
            <Content sym={sym} defaultSideArray={defaultSideArray} handleMoney={props.handleMoney}/>
        </div>
    )
}

export default Main