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
    const singleCrypto = sym
    const [inputCrypto, setInputCrypto] = useState();
    const [searchCrypto, setSearchCrypto] = useState(false)
    const [validCrypto, setValidCrypto] = useState([]);
    const handleAddCrypto = (event) => {
        event.preventDefault();
        if(searchCrypto){
            setSearchCrypto(false)
        }else{
            setSearchCrypto(true)
        }
    }
    const handleCryptoChange = (event) => {
        event.preventDefault();
        setInputCrypto(event.target.value)
    }
    const handleSubmitCrypto = (event) => {
        event.preventDefault();
        searchApiCall(inputCrypto)
        setInputCrypto('')
    }
    const [searchError, setSearchError] = useState(false);
    const searchApiCall = (input) => {
        fetch(`https://api.coingecko.com/api/v3/coins/${input}`)
        .then(response => response.json())
        .then(data => {
            if(data.error){
                setSearchError(true)
            }else{
                setValidCrypto([...validCrypto, data]);
                setSearchError(false)
            }
        })
        .catch(() => setValidCrypto(false))
    }
    return (
        <div className="main">
            <Sidebar sym={sym} searchError={searchError} validCrypto={validCrypto} coinList={coinList}  inputCrypto={inputCrypto} searchCrypto={searchCrypto} handleAddCrypto={handleAddCrypto} handleCryptoChange={handleCryptoChange} handleSubmitCrypto={handleSubmitCrypto} />
            <Content singleCrypto={singleCrypto} handleMoney={props.handleMoney}/>
        </div>
    )
}
export default Main

