import React, {Component} from 'react';

//importing Components and CSS
import './Monsters.css';
import {CardList} from './components/card-list/card-list.component'

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
      <div className="project-body">

        <CardList monsters={this.state.monsters}/>
        
      </div>
    )
  }
}
export default Monsters;
