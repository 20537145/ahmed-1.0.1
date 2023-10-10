import React from 'react'
import cards from '../components/Players'
import Player from '../components/Player'
function PlayersList() {
    
  return (
    <div>
        {cards.map((e)=><Player e={e}/>)}
    </div>
  )
}

export default PlayersList