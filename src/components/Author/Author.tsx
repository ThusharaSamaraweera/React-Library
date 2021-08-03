import React from "react";
import {Col, Row} from "react-bootstrap";
import {Trash2, Edit} from 'react-feather';
import { useDispatch } from "react-redux";
import { delectAuthor } from "../../store/actions/AuthorActions";
import {IAuthor} from "../../types/LibraryTypes";
import {ToastProvider, useToasts} from "react-toast-notifications";

type AuthorProps = {
  author: IAuthor,
  index: number
  onUpdateRequest: (authorIndex: number) => void
}

const Author: React.FC<AuthorProps> = (props) => {
  const {author, index} = props;
  const dispatch = useDispatch()
  const {addToast} = useToasts();

  const handleOnAuthorDeleted = (index: number) => {
    const userConfirmation: boolean = window.confirm("Delete Author?");
    if (userConfirmation) {
      dispatch(delectAuthor(index))
      addToast("Author Deleted", {appearance: 'info', autoDismiss: true});
    }
  };

  

  return (
    <li className='py-2'>
      <Row>
        <Col xs={8}>
          <label>{index}. {author.name}</label>
        </Col>

        <Col xs={4} className='author-icons'>
          <i
            onClick={() => props.onUpdateRequest(index - 1)}
          > <Edit className='text-warning'/> </i>
          <i
            onClick={() => handleOnAuthorDeleted(index - 1)}
          ><Trash2 className='text-danger mx-2'/> </i>
        </Col>
      </Row>
    </li>
  );
}

export default Author;