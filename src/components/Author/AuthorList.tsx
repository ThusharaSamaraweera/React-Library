import React from "react";
import {Col, Row} from "react-bootstrap";
import Author from "./Author";
import {IAuthor} from "../../types/LibraryTypes";
import { RootState } from "../../store/reducers/RootReducer";
import {useSelector} from "react-redux"

type AuthorsListProps = {
  onUpdateRequest: (authorIndex: number) => void
}

const AuthorList: React.FC<AuthorsListProps> = (props) => {

  const authors:IAuthor[] = useSelector((state: RootState) => state.authorReducer.authors)

  const renderAuthorList = () => {
    if (authors.length === 0) {
      return;
    }
    return authors.map((author: IAuthor, index: number) => {
      return <Author author={author} key={index} index={index + 1}
                     onUpdateRequest={props.onUpdateRequest}
      />
    });
  };

  return (
    <Row>
      <Col>
        {authors.length === 0 && <label className='empty-list mb-2'>No authors listed here</label>}
        <ul className='author-ul'>
          {renderAuthorList()}
        </ul>
      </Col>
    </Row>
  );
}

export default AuthorList;