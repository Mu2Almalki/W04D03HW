import { Component } from "react";
import './index.css';


  class App extends Component{
  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list:[],
      count:0
    }
  }

  updateInput(key,value){
    //update react state 
    this.setState({
      [key]:value
    })
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
  addItem(){
    // creat item with unique id 
    const newItem ={
      id:1+Math.random(),
      value:this.state.newItem.slice()
    };
    // copy of current list of items
    const list =[...this.state.list]
    // add new item to list
    list.push(newItem);

    // update state with new list and reset newItem input
    this.setState({
      list,
      newItem:""
    })
  };
   deleteItem(id){
    const list=[...this.state.list];
    const updatedList = list.filter(item=>item.id !==id);
    this.setState({list:updatedList});
  }
 render() {
   let {count}=this.state;
    return (
      <div className="App">
        <div>
        <h1>What needs to be done</h1>
          <br/>
          <input
             type="text"
              placeholder="Add ToDo"
              value={this.state.newItem}
             onChange={e=>this.updateInput("newItem",e.target.value)}
  
           />
           <button onClick={()=>this.addItem()}>
              Add
           </button>
           <br/>
           <ul>
             {this.state.list.map(item=>{
               return(
                 <li key={item.id}>
                   {item.value}
                   <button onClick={()=>this.deleteItem(item.id)}> Delete </button>
                   <br/>
                   <button title="+" onClick={this.incrementCount}>+</button>
                   <h4>{count} </h4>
                   <button title="-" onClick={()=> this.decrementCount()}>-</button>
                 </li>
               )
             })}
           </ul>
        </div>
      </div>
    )
  }
  }
export default App;

 
     
