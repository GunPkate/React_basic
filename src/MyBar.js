import React from 'react'

function MyBar() {
  return (
    <ul>
        <li><a className="active" href='/'>My App</a></li>
        <li><a href='/'>Home</a></li>
        <li><a href='#contact'>Contact</a></li>
        <li><a href='#about'>About</a></li>
    </ul>
  );
}

export default MyBar