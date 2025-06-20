import React from 'react';

export default function Card(props) {
  return (
    <div style={{
      border: '1px solid #ccc',
      margin: 10,
      padding: 10,
      width: 200,
      textAlign: 'center'
    }}>
      <img src={props.item.img} alt="Фото" style={{ width: '100%', height: 'auto' }} />
      <p>{props.item.text}</p>
    </div>
  );
}