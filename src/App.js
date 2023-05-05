import './App.css';

import React, { Component } from 'react'
import listItems from './listItems';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      currentItem:{
        text:'',
        key:''
      }
      
    }
    this.handleInput= this.handleInput.bind(this);
    this.addItem= this.addItem.bind(this);
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem= this.state.currentItem;
    console.log(newItem);
    if(newItem!==""){
      const items=[...this.state.items , newItem];
      this.setState({
        items: newItem,
        currentItem:{
          text: '',
          key:''
        }

      })
    }
  }
  render() {
    return (
      <div className='App'>
      <header>
        <form id='to-do-form' onsubmit={this.addItem}>
            <input type="text" placeholder="Enter text"
            value={this.state.currentItem.text}
            onChange={this.handleInput} />
            <button type="submit"> Add</button>


        </form>
      </header>
      </div>
    )
  }
}

export default App;

