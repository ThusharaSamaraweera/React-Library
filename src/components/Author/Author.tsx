import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Trash2,Edit} from 'react-feather';
import {Authors} from "../../types/LibraryTypes";

type AuthorProps = {
    author: Authors,
    index: number
}

const Author : React.FC<AuthorProps> = (props) => {
    const {author, index} = props;

    return(
        <li className='py-2' >
            < Container fluid={true}>
                <Row>
                    <Col xs={10}>
                        <label>{index}. {author.name}</label>
                    </Col>

                    <Col xs={2} className='text-right'>
                        <i><Edit className='text-warning'/> </i>
                        <i><Trash2 className='text-danger mx-2'/> </i>
                    </Col>
                </Row>
            </Container>

        </li>
    );
}

export default Author;