import {Col, Row} from "react-bootstrap";
import Authors from "./Author/Authors";
import {IAuthor} from "../types/LibraryTypes";
import React, {useEffect, useState} from "react";
import { useToasts} from "react-toast-notifications";
import Books from "./Book/Books";
import { useDispatch, useSelector } from "react-redux";
import { updateAuthor } from "../store/actions/AuthorActions";
import { RootState } from "../store/reducers/RootReducer";

const LibraryContent: React.FC = () => {
  const authorsList:IAuthor[] = useSelector((state: RootState) => state.authorReducer.authors)

  const [authors, setAuthors] = useState(authorsList);

  const dispatch = useDispatch();
  const [authorToUpdate, setAuthorToUpdate] = useState<IAuthor | null>(null);
  const [authorToUpdateIndex, setAuthorToUpdateIndex] = useState<number | null>(null)
  const [formVisible, setFormVisibility] = useState<boolean>(false)
  const {addToast} = useToasts();

  const handleOnClickAddAuthor = () => {
    setFormVisibility(true);
  }

  useEffect(() => {
    if (!authorToUpdate) {
      return;
    }
    setFormVisibility(true);
    console.log(authorToUpdateIndex);
  }, [authorToUpdate]);


  // const handleUpdateAuthor = (updatedAuthor: IAuthor) => {
  //   if (authorToUpdateIndex === null) {
  //     return;
  //   }
  //   setAuthorToUpdate(null)
  //   setAuthorToUpdateIndex(null)
  //   setFormVisibility(false);
  // }

  const handleUpdateAuthor = () => {
    if (authorToUpdateIndex === null) {
      return;
    }
    setAuthorToUpdate(null)
    setAuthorToUpdateIndex(null)
    setFormVisibility(false);
  }

  const handleOnUpdateRequest = (index: number) => {
    setAuthorToUpdate(authors[index]);
    setAuthorToUpdateIndex(index);
    
  }

  const handleOnFormClose = () => {
    setFormVisibility(false);
    setAuthorToUpdate(null)
    setAuthorToUpdateIndex(null)
  }

  return (
      <Row className='library-content'>
        <Col xs={{span: 12, order: 2}} md={{span: 6, order: 1}} className='book-section'>
          <Books authors={authorsList}/>
        </Col>
        <Col xs={{span: 12, order: 1}} md={{span: 6, order: 1}} className='author-section'>
          <Authors 
                   onUpdateRequest={handleOnUpdateRequest}
                   onAuthorUpdated={handleUpdateAuthor}
                   authorToUpdate={authorToUpdate}
                   formVisible={formVisible}
                   onFormClose={handleOnFormClose}
                   onClickAddAuthor={handleOnClickAddAuthor}
                   authorToUpdateIndex={authorToUpdateIndex}
                   setFormVisible={setFormVisibility}
          />
        </Col> 
      </Row>

  )
}

export default LibraryContent;