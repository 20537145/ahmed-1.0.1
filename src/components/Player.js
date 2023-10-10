import React from 'react'
import { Card } from 'react-bootstrap'
function Player({e}) {

  
  return (
       
 <Card style={{ display:'inline-block' ,width: '255px' , background:'#444',fontSize:'10px', margin:'4px', marginLeft:'6px'}} key={e.id}>
      <Card.Img variant="top" src={e.imageUrl} style={{height:'200px' }}  />
      <Card.Body>
        <Card.Title style={{color:'#fa0'}}>{e.title  }</Card.Title>
        <Card.Text>
          <div style={{color:'white'}}>
        <h1 >{e.name} </h1>
        <h3>{e.team}</h3>
        <h3>{e.nationality}</h3>
        <h3>jNumber: {e.jerseyNumber}</h3>
        <h3>age: {e.age}</h3></div>
        </Card.Text>
       
      </Card.Body>
    </Card>
    
  )
}

export default Player