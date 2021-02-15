import React from 'react'
import axios from 'axios'
import List from './components/List.jsx'
import Submit from './components/Submit.jsx'



class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {  
            
        }

    }

    render() {
        
        return (
            <div>
               <h1>Philia</h1>
               <Submit />
               <List />
            </div>
        )
    }
}

export default App