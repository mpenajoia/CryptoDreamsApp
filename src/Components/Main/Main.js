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
    const [userCrypto, setUserCrypto] = useState();
    const [validCrypto, setValidCrypto] = useState([]);

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
        setUserCrypto(inputCrypto)
        searchApiCall(inputCrypto)
    }

    // const addError = <p>I'm afraid that may not be a cryptocurrency</p>

    const searchApiCall = (input) => {
        fetch(`https://api.coingecko.com/api/v3/coins/${input}`)
        .then(response => response.json())
        .then(data => {
            if(data.error){
                console.log('Not a real coin')
            }else{
                setValidCrypto([...validCrypto, data])

            }
        })
        .catch(() => setValidCrypto(false))
    }
    
    // useEffect(()=>{
    //     setCoinList([...coinList, validCrypto]);
    // }, [userCrypto])
    
    return (
        <div className="main">
            <Sidebar sym={sym} validCrypto={validCrypto} coinList={coinList}  inputCrypto={inputCrypto} setInputCrypto={setInputCrypto} searchCrypto={searchCrypto} handleAddCrypto={handleAddCrypto} handleCryptoChange={handleCryptoChange} handleSubmitCrypto={handleSubmitCrypto} />
            <Content singleCrypto={singleCrypto} handleMoney={props.handleMoney}/>
        </div>
    )
}

export default Main

