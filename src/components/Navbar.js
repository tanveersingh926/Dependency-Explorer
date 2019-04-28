import React, { useState } from 'react'
import { MESSAGES } from '../constants'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

const PageNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Navbar color='primary' dark expand='sm'>
      <NavbarBrand href='/'>{MESSAGES.appName}</NavbarBrand>
      <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink href='/'>Home</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default PageNavbar
