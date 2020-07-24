import React from 'react';
import './card-list.styles.css'

export const CardList = props => (
    <div className='card-list'>
      {
        props.monsters.map((monster) => {
          return <p key={monster.id}> {monster.name} </p>
        })
      }
    </div>
)