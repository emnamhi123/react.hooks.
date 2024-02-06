import React from 'react'
import {Container,  Nav , Navbar, Button, Form} from 'react-bootstrap';
import Rating from '@mui/material/Rating';

const Filter = ({setSearch, setRating}) => {
  return (
    <div>
       <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">MovieReviews</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">My Selection</Nav.Link>
            <Nav.Link href="#features">Best Of</Nav.Link>
          </Nav>
          <Form className='d-flex' style={{marginTop: "20px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
     
        <Form.Control type="search" placeholder="Movie Title" onChange={(e) =>{setSearch(e.target.value);}} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <Rating
        name="simple-controlled"
        max={10}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />
        </Container>
      </Navbar>

    </div>
  )
}

export default Filter
