import React, { useState } from 'react';
import ViewBook from '../Components/ViewBook';
import { Button, FloatingLabel, Form, Modal, Row, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addBook } from '../slices/bookSlice'; 

function Home() {
  const [show, setShow] = useState(false);
  const [bookData, setBookData] = useState({
    id: '',
    coverImageLink: '',
    title: '',
    author: '',
    yearOfPublication: '',
  });
  
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleAddBook = () => {
    dispatch(addBook(bookData));
    handleClose(); 
    setBookData({ id: '', coverImageLink: '', title: '', author: '', yearOfPublication: '' }); 
  };

  console.log(bookData);
  
  return (
    <>
      <Container fluid>
        <Row className='justify-content-center m-5'>
          <Button variant="info" className='w-50 w-md-25' onClick={handleShow}>
            Add Book <i className="fa-solid fa-plus"></i>
          </Button>
        </Row>
        <ViewBook />
        {/* modal */}
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <FloatingLabel controlId="floatingInput1" label="Book ID" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Book ID"
                  name="id"
                  value={bookData.id}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput3" label="Cover Image Link" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Cover Image Link"
                  name="coverImageLink"
                  value={bookData.coverImageLink}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput4" label="Title" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={bookData.title}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput5" label="Author" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Author"
                  name="author"
                  value={bookData.author}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput2" label="Year Of Publication" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Year Of Publication"
                  name="yearOfPublication"
                  value={bookData.yearOfPublication}
                  onChange={handleInputChange}
                />
              </FloatingLabel>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="info" onClick={handleClose}>Cancel</Button>
            <Button variant="success" onClick={handleAddBook}>Add</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
}

export default Home;
