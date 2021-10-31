const App = () => {
    const [search, setSearch] = useState('')
    const [receipt, setReceipt] = useState(receiptsArr)
  ​
  ​
    let receipts = receipt.map((value) => {
      let order = value.order
      return (
        <ReceiptComponent stateCheck={search} All={value}/>
      )
    })
  ​
   ​
    function handleSubmit(event) {
  ​
  ​
      let searched = event.target.value
      setSearch(searched)
  ​
      let filteredReceipts = receiptsArr.filter((value) => {
        let name = value.person
        return name.toLowerCase().includes(searched.toLowerCase());
      })
  ​
      setReceipt(filteredReceipts)
      
      
  ​
      console.log(filteredReceipts)
  ​
    }
  ​
    return (
      <div className="App">
  ​
        <h1>Korilla Receipts</h1>
        <div className="search-container">
        <input onChange={handleSubmit}  type="search" placeholder='search'/>
        {/* <button onClick={handleSubmit}> Search </button> */}
        </div>
        <div id="receipts">
          {receipts}
        </div>
      </div>
    );
  }