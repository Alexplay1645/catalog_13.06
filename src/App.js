import React from 'react';
import CardGroup from './CardGroup';

const ArrDB = [
  { img: '/Component19.png', text: 'НАЗВА НАБОРУ' },
  { img: '/Component20.png', text: 'НАЗВА НАБОРУ' },
  { img: '/Component21.png', text: 'НАЗВА НАБОРУ' },
  { img: '/Component22.png', text: 'НАЗВА НАБОРУ' },
  { img: '/Component23.png', text: 'НАЗВА НАБОРУ' },
  { img: '/Component24.png', text: 'НАЗВА НАБОРУ' },
  { img: '/Component25.png', text: 'НАЗВА НАБОРУ' },
  { img: '/Component26.png', text: 'НАЗВА НАБОРУ' },
  { img: '/Component27.png', text: 'НАЗВА НАБОРУ' },
  { img: '/Component28.png', text: 'НАЗВА НАБОРУ' },
  { img: '/Component29.png', text: 'НАЗВА НАБОРУ' },
  { img: '/Component30.png', text: 'НАЗВА НАБОРУ' },
  { img: '/Component31.png', text: 'НАЗВА НАБОРУ' },
  { img: '/Component32.png', text: 'НАЗВА НАБОРУ' },
  { img: '/Component33.png', text: 'НАЗВА НАБОРУ' },
  { img: '/Component34.png', text: 'НАЗВА НАБОРУ' },
  { img: '/Component35.png', text: 'НАЗВА НАБОРУ' },
  { img: '/Component36.png', text: 'НАЗВА НАБОРУ' },
];

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>КАТАЛОГ</h1>
      <CardGroup arr={ArrDB} ></CardGroup>
    </div>
  );
}

export default App;
