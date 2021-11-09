import { Component } from "react";
class Counter extends Component{
    constructor(props){
      super(props);
      this.state={
        newItem:"",
        list:[],
        count:0
      }
    }
    incrementCount =()=>{
        console.log("inc")
        this.setState({
         count:this.state.count +1
        })
       }
        decrementCount =()=>{
         this.setState({
          count:this.state.count -1 
         })
        
      }
      render(){
        let {count}=this.state;
    return(
        <div>
             <button title="+" onClick={this.incrementCount}>+</button>
                   <h4>{count} </h4>
                   <button title="-" onClick={()=> this.decrementCount()}>-</button>

        </div>
    )}
}
export default Counter;