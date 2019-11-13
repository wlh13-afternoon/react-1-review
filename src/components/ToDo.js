import React, { Component } from "react";
import '../App.css'

class ToDo extends Component {
  constructor() {
    super();
    this.state = {
      things: ["meat", "cheese", "bread"],
      input: ''
    };
    this.inputChange = this.inputChange.bind(this)
    this.addToList = this.addToList.bind(this)
    this.delete = this.delete.bind(this)
  }

inputChange(event){
    this.setState({
        input: event.target.value
    })
}
addToList(){
    let newArr = [...this.state.things, this.state.input]
    this.setState({
        things: newArr,
        input: ''
    })
}

delete(ind){
    let deletedArr = [...this.state.things]
    deletedArr.splice(ind, 1)
    this.setState({
        things: deletedArr
    })
}
  render() {
      let mappedThings = this.state.things.map((el, index) => (
          <h3 onClick={() => this.delete(index)}key={index}>{el}</h3>
      ))
    return (
      <div className='todo-list'>
        <h1>This is the Functional Part of the App</h1>
        <input value={this.state.input} onChange={event => this.inputChange(event)} type="text" placeholder="add an item here" />
        <button onClick={this.addToList}>Add Item</button>
        {mappedThings}
      </div>
    );
  }
}

export default ToDo;
