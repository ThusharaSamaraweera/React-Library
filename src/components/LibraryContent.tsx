import {Col, Row} from "react-bootstrap";
import Authors from "./Author/Authors";
import {IAuthor} from "../types/LibraryTypes";
import React, {useEffect, useState} from "react";
import {ToastProvider, useToasts} from "react-toast-notifications";
import Books from "./Book/Books";

const LibraryContent: React.FC = () => {
  const authorsList: IAuthor [] = [{name: 'Author 1'}, {name: 'Author 2'}, {name: 'Author 3'}];
  const [authors, setAuthors] = useState(authorsList);


  const [authorToUpdate, setAuthorToUpdate] = useState<IAuthor | null>(null);
  const [authorToUpdateIndex, setAuthorToUpdateIndex] = useState<number | null>(null)
  const [formVisible, setFormVisibility] = useState(false)
  const {addToast} = useToasts();

  const handleOnClickAddAuthor = () => {
    setFormVisibility(true);
  }
  useEffect(() => {
    if (!authorToUpdate) {
      return;
    }
    setFormVisibility(true);
  }, [authorToUpdate]);

  const handleOnAuthorDeleted = (index: number) => {
    const allAuthors: IAuthor[] = authors.slice();
    const userConfirmation: boolean = window.confirm("Delete Author?");
    if (userConfirmation) {
      allAuthors.splice(index, 1);
      setAuthors(allAuthors);
      addToast("Author Deleted", {appearance: 'info', autoDismiss: true});
    }
  };

  const handleUpdateAuthor = (updatedAuthor: IAuthor) => {
    const allAuthors: IAuthor[] = authors.slice();

    if (authorToUpdateIndex === null) {
      return;
    }
    allAuthors.splice(authorToUpdateIndex, 1, updatedAuthor);
    setAuthors(allAuthors);
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

  const handleAuthorAdded = (author: IAuthor) => {
    const allAuthors: IAuthor[] = authors.slice();
    allAuthors.push(author);
    setAuthors(allAuthors);
  };

  return (
      <Row className='library-content'>
        <Col xs={{span: 12, order: 2}} md={{span: 6, order: 1}} className='book-section'>
          <Books authors={authorsList}/>
        </Col>
        <Col xs={{span: 12, order: 1}} md={{span: 6, order: 1}} className='author-section'>
          <Authors authors={authors}
                   onAuthorDeleted={handleOnAuthorDeleted}
                   onUpdateRequest={handleOnUpdateRequest}
                   onAuthorUpdated={handleUpdateAuthor}
                   authorToUpdate={authorToUpdate}
                   formVisible={formVisible}
                   onAuthorAdded={handleAuthorAdded}
                   onFormClose={handleOnFormClose}
                   onClickAddAuthor={handleOnClickAddAuthor}
          />
        </Col>
      </Row>

  )
}

export default LibraryContent;