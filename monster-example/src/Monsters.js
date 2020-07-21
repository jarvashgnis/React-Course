import React, {Component} from 'react';
import './Monsters.css';

class Monsters extends Component{

  constructor(){
    super();

    this.state = {
      monsters: []
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({monsters: users})})
  }

  render(){
    return(
      <div className="monsters-body">
        {
          this.state.monsters.map((monster) => {
            return <p key={monster.id}> {monster.name} </p>
          })
        }
      </div>
    )
  }
}
export default Monsters;
