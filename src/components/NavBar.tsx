import React from 'react'

interface Props {
    cartItemsNumber : number;
}

const NavBar = ({cartItemsNumber} : Props) => {
  return (
    <div>NavBar {cartItemsNumber} </div>
  )
}

export default NavBar