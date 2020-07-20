import React, {Component} from 'react';
import './Monsters.css';

class Monsters extends Component{

  constructor(){
    super();

    this.state = {
      monsters: [
        {
          id: 0,
          name: 'Dracula'
        },
        {
          id: 1,
          name: 'Zombie'
        },
        {
          id: 2,
          name: 'Alien'
        }
      ]
    }
  }

  render(){
    return(
      <div className="monsters-body">
        {
          this.state.monsters.map((monster) => {
            return <li key={monster.id}> {monster.name} </li>
          })
        }
      </div>
    )
  }
}
export default Monsters;
