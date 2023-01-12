import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardComp=({coin})=> {
  return (
    <div className='col-3 p-2'>
        <Card >
      <Card.Img variant="top" src={coin.image} style={{ height:"50px", width:"100%", padding:"10px"}} />
      <Card.Body>
        <Card.Title>{coin.title}</Card.Title>
        <Card.Text>
          {coin.desc}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default CardComp;