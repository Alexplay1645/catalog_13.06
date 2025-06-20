import React from 'react';
import Card from './Card';

export default function CardGroup(props) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {props.arr.map(item => <Card key={item.img} item={item} />)}
    </div>
  );
}