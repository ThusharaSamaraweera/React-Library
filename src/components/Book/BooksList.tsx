import React from "react";
import Book from "./Book";
import {IBook} from "../../types/LibraryTypes";
import {Col, Row} from "react-bootstrap";

type BooksListProps = {
  booksList: IBook[];
  onBookDeleted: (bookIndex: number) => void
  onUpdateRequest: (bookIndex: number) => void
}

const BooksList: React.FC<BooksListProps> = (props) => {

  const renderBookList = () => {
    if (props.booksList.length === 0) {
      return;
    }
    return props.booksList.map((book: IBook, index: number) => {
      return <Book book={book} key={index} index={index + 1}
                   onBookDeleted={props.onBookDeleted}
                   onUpdateRequest={props.onUpdateRequest}

      />
    })
  }

  return (
    <Row>
      <Col>
        {props.booksList.length === 0 &&
        <label className='empty-list mb-2'>No books listed here</label>}

        <ul className='book-ul'>
          {renderBookList()}
        </ul>
      </Col>
    </Row>
  )
}

export default BooksList