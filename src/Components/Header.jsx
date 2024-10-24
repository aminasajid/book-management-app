import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

function Header() {
  return (
 <>
 <Navbar className="bg-body-teritary" >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://www.pngarts.com/files/12/Bookshelf-Rack-PNG-Image-Background.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Book Shelf
          </Navbar.Brand>
        </Container>
      </Navbar>
 </>
  )
}

export default Header
