import React from "react";
import {IBook} from "../../types/LibraryTypes";
import {Col, Row} from "react-bootstrap";
import {Edit, Trash2} from "react-feather";

type BookProps = {
  book: IBook,
  index: number
  onBookDeleted: (authorIndex: number) => void
  onUpdateRequest: (authorIndex: number) => void

}

const Book: React.FC<BookProps> = (props) => {

  return (
    <li key={props.index} className='py-2'>
      <Row>
        <Col xs={8}>
          <label>{props.index}. {props.book.name}</label>
        </Col>
        <Col xs={4} className='book-icons'>
          <i> <Edit className='text-warning'
                    onClick={() => props.onUpdateRequest(props.index - 1)}
          /> </i>
          <i><Trash2 className='text-danger mx-2'
                     onClick={() => {
                       props.onBookDeleted(props.index - 1)
                     }}
          /> </i>
        </Col>
      </Row>
    </li>
  )
}

export default Book