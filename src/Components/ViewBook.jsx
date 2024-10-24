import React from 'react';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../slices/bookSlice'; 

function ViewBook() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books); 

  // Function to handle delete action
  const handleDelete = (bookId) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      dispatch(deleteBook(bookId)); 
    }
  };

  return (
    <Container>
      <Row className='m-5'>
        {books.map((book) => (
          <Col key={book.id} lg={3} md={6} sm={12} className="mb-4">
            <Card>
              <Card.Img variant="top" src={book.coverImageLink} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  <h5>By: <span>{book.author}</span></h5>
                  <h6>Year of Publication: <span>{book.yearOfPublication}</span></h6>
                </Card.Text>
                <div className="d-flex justify-content-between">
                 
                    <Button variant="outline-success" onClick={() => handleShow(book)}>
                      <i className="fa-regular fa-pen-to-square"></i>
                    </Button>
                    
                  <Button 
                    variant="outline-danger" 
                    onClick={() => handleDelete(book.id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ViewBook;
