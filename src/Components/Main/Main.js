import './Main.css'
import { useEffect, useState } from "react"
import Content from "../Content/Content"
import Sidebar from "../Sidebar/Sidebar"
import { useParams } from "react-router"

const Main = (props) => {
    let { sym } = useParams();
    // console.log('props on Main:', props.match.params.sym)
    const [coinList, setCoinList] = useState([])
    const makeApiCall = () => {
        fetch('https://api.coingecko.com/api/v3/coins/')
        .then(response => response.json())
        .then((data) => {
            // console.log(data)
            setCoinList(data);
        })
    }
    useEffect(() => {
        makeApiCall()
    }, [])
    // console.log(coinList[0])

    const defaultSideArray = coinList.filter((item) => {
        return item.symbol === 'btc' || item.symbol === 'eth' || item.symbol === 'sol' || item.symbol === 'ada' || item.symbol === 'dot'
    })
    // console.log(defaultSideArray)

    return (
        <div className="main">
            <Sidebar defaultSideArray={defaultSideArray}/>
            <Content sym={sym} defaultSideArray={defaultSideArray} handleMoney={props.handleMoney}/>

            {/* <Route exact path="/:sym" render={(routerProps) => <Content {...routerProps} handleMoney={props.handleMoney}/>}/> */}
        </div>
    )
}

export default Main