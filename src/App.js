import React from 'react';
import Titles from './component/Title'

const API_KEY = "XCJBBh7dmjUJjVoFD1KXksoY26x2";
const btnClick = false;
class App extends React.Component{
    constructor(props){
        super(props);
        
        this.state = { items: [] }
        this.getData = this.getData.bind(this);
    }

    getData = async(e) => {
        const newItems = [];
        this.btnClick = true;
        var api_call = await fetch(`https://cricapi.com/api/matches?apikey=${API_KEY}`)
        var data =  await api_call.json()
        newItems.push(data.matches);
        this.setState({
            items: this.state.items.concat(newItems[0])
        })
        console.log(data)
    }
    render(){
        return(
            <div>
            { this.btnClick ? <Titles items={this.state.items}/> : "Click Here To Get Cricket Info"}
                <button onClick={this.getData}>Click Here</button> 
            </div>
        )
    }
}

export default App;