import React from 'react'
import '../../../src/components/styles/Navbar.css'
import {HamburgerIcon} from '@chakra-ui/icons'
export const Navbar = () => {
  return (
    <div className='navbar'>
        <div><a href='#event'><p style={{fontFamily : 'starjedi-outline', letterSpacing: '2px', fontSize: '1vw', paddingRight: '40px'}}>EVENTS</p></a></div>
        <div><a href='#sponsor'><p style={{fontFamily : 'starjedi-outline', letterSpacing: '2px', fontSize: '1vw', paddingRight: '40px'}}>SPoNSoRS</p></a></div>
        <div><a href='#techy'><p style={{fontFamily : 'starjedi-outline', letterSpacing: '2px', fontSize: '1vw', paddingRight: '40px'}}>TECY</p></a></div>
        <div><a href='#contact'><p style={{fontFamily : 'starjedi-outline', letterSpacing: '2px', fontSize: '1vw'}}>CoNTACT US</p></a></div>
    </div>
    
  )
}
