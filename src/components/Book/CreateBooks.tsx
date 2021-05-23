import React from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";

type CreateBooksProps = {
    handleOnFormClose:()=> void
}

const CreateBooks: React.FC<CreateBooksProps> = (props) => {
    return (
        <Row className='create-book my-5'>
            <Col xs={12} md={8}>
                <Row>
                    <Col xs={9}>
                        <h3>Create Book</h3>
                    </Col>
                    <Col xs={3}>
                        <i onClick={props.handleOnFormClose}><XCircle/></i>
                    </Col>
                </Row>

                <Row>

                    <Col className='my-4'>
                        <Form className='mx-5'>
                            <Form.Group controlId="bookName">
                                <Form.Label>Title of the Book</Form.Label>
                                <Form.Control type="text"
                                              placeholder=""
                                />
                            </Form.Group>
                            <Form.Group controlId="Price">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text"
                                              placeholder=""
                                />
                            </Form.Group>
                            <Form.Group controlId="authorName">
                                <Form.Label>Author</Form.Label>
                                <Form.Control type="text"
                                              placeholder=""
                                />
                            </Form.Group>

                            <Button className='create-btn mt-3 py-1 px-4'>
                                Create
                            </Button>
                        </Form>
                    </Col>

                </Row>
            </Col>
        </Row>
    )
}

export default CreateBooks