import React, { Component } from 'react'

class NormCompo extends Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
    render() {
      console.log('this is render method')
      return (
        <>
          <h4>count value : {this.state.count}</h4>
          <button onClick={()=>this.setState({count : 5})}>Change Value</button> 
        </>
      )
    }
    
}
// {/* <button onClick={()=>{this.setState({count : this.state.count + 1})}}>Change Value</button>  */}

export default NormCompo;