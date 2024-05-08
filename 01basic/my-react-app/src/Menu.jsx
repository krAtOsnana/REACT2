import React from 'react'

function Menu() {
    let item1="Halwa";
    let item2="Pooori"
  return (
    <div>
        <ul>
            <li>{item1.toUpperCase()}</li>
            <li>{item2.toUpperCase()}</li>
            <li>raita</li>
            <li>salad</li>
            <li>papad</li>
        </ul>
    </div>
  )
}

export default Menu
