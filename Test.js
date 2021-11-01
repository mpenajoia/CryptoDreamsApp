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

<li><button onClick={handleAddCrypto}>+</button></li>
            </ul>
            {searchCrypto ? 
                <form onSubmit={handleSubmitCrypto}>
                    <input onChange={handleCryptoChange} value={inputCrypto} type="text" placeholder="enter a cryptocurrency"/>