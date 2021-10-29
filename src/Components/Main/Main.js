import Content from "../Content/Content"
import Sidebar from "../Sidebar/Sidebar"

const Main = (props) => {
    console.log('props on Main:', props)


    return (
        <div>
            <h1>Main Page</h1>
            <Sidebar/>
            <Content handleMoney={props.handleMoney}/>
        </div>
    )
}

export default Main