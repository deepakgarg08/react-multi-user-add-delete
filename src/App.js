import React from 'react';
import './App.css';
import Ninjas from './Components/Ninjas'
import AddNinja from './Components/AddNinja'

class App extends React.Component {
  state = {
    Ninjas: [
      { name: "Deepak", age: 26, belt: "black", id: 1 },
      { name: "Vikas", age: 30, belt: "brown", id: 2 },
      { name: "Aamir", age: 24, belt: "orange", id: 3 },
      { name: "Sourabh", age: 20, belt: "green", id: 4 },
      { name: "Shariq", age: 28, belt: "red", id: 5 }
    ]
  }

  addNinja = (addNewNinja) => {
    addNewNinja.id = Math.random()
    let newNinjaUser = [...this.state.Ninjas, addNewNinja]
    this.setState({
      Ninjas: newNinjaUser
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.Ninjas.filter((ninja) => { return ninja.id !== id })
    this.setState({
      Ninjas: ninjas
    })
  }


  componentDidMount(){
  }

  componentDidUpdate(prevProps, prevState){
    
  }


  render() {
    return (
      <div className="App">
        <h1>hello react youtube tutorial</h1>
        <Ninjas viewNinja={this.state.Ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
