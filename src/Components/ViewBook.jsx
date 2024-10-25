import React, { useState } from 'react';
import { Button, Card, Col, Row, Container, Modal, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBook, updateBook } from '../slices/bookSlice';

function ViewBook() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  
  const [show, setShow] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (book) => {
    setSelectedBook(book);
    setShow(true);
  };

  const handleDelete = (bookId) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      dispatch(deleteBook(bookId));
    }
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedBook = {
      ...selectedBook,
      title: event.target.title.value,
      author: event.target.author.value,
      yearOfPublication: event.target.year.value,
      coverImageLink: event.target.coverImageLink.value,
    };
    dispatch(updateBook(updatedBook));
    handleClose();
  };

  return (
    <Container>
      <Row className='m-5 0' style={{height:"350px"}}>
        {books.map((book) => (
          <Col key={book.id} lg={3} md={6} sm={12} className="mb-4">
            <Card>
              <Card.Img variant="top" height={'300px'} src={book.coverImageLink} />
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
                  <Button variant="outline-danger" onClick={() => handleDelete(book.id)}>
                    <i className="fa-solid fa-trash"></i>
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedBook && (
            <Form onSubmit={handleUpdate}>
              <Form.Group className="mb-3" controlId="formBookTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" defaultValue={selectedBook.title} name="title" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBookAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" defaultValue={selectedBook.author} name="author" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formYearOfPublication">
                <Form.Label>Year of Publication</Form.Label>
                <Form.Control type="number" defaultValue={selectedBook.yearOfPublication} name="year" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCoverImageLink">
                <Form.Label>Cover Image Link</Form.Label>
                <Form.Control type="text" defaultValue={selectedBook.coverImageLink} name="coverImageLink" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default ViewBook;
