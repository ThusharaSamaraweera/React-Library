import React, {useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import {IAuthor} from "../../types/LibraryTypes";
import {useToasts} from "react-toast-notifications";
import { useDispatch } from "react-redux";
import { addAuthor, updateAuthor } from "../../store/actions/AuthorActions";

type createAuthorProps = {
  onFormClose: () => void;
  authorToUpdate: IAuthor | null
  onAuthorUpdated: () => void;
  authorToUpdateIndex: number | null
  setFormVisible: (arg0: boolean) => void
};

const CreateAuthor: React.FC<createAuthorProps> = (props) => {
  const dispatch = useDispatch();
  const {authorToUpdate} = props
  const [authorName, setAuthorName] = useState<string | null>(null)
  const [validated, setValidated] = useState(false);

  const {addToast} = useToasts();


  useEffect(() => {
    if (!authorToUpdate) {
      setAuthorName('');
      return;
    }
    setValidated(false);
    setAuthorName(authorToUpdate.name);
  }, [authorToUpdate])


  const handleOnAuthorNameChanged = (name: string) => {
    setAuthorName(name);
  }

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    if (!authorName || authorName === '') {
      return;
    }


    if (authorToUpdate) {
      console.log(props.authorToUpdateIndex);
      if(!props.authorToUpdateIndex && props.authorToUpdateIndex !== 0){
        return;
      }
      const userConfirmation:boolean = window.confirm("Update Author Name?");
      if (userConfirmation) {
        // const updatedAuthor: IAuthor = {...authorToUpdate, name: authorName}
        // props.onAuthorUpdated(updatedAuthor);
        dispatch(updateAuthor(props.authorToUpdateIndex, {name: authorName}))
        console.log(authorName);
        props.onAuthorUpdated();
        setAuthorName('');
        addToast("Author Updated", {appearance: 'success', autoDismiss: true});
      }
      return;
    }

    dispatch(addAuthor({name: authorName}) )
    props.setFormVisible(false)
    setValidated(false);
    addToast("New Author Created", {appearance: 'success', autoDismiss: true});
    setAuthorName('');
  }

  return (
    <Row className='create-author mt-5 mb-3'>
      <Col xs={12} md={11} lg={10}>
        <Row>
          <Col xs={10}>
            <h3>{authorToUpdate ? 'Update' : 'Create'} Author</h3>
          </Col>

          <Col xs={2}>
            <i><XCircle onClick={props.onFormClose}/></i>
          </Col>
        </Row>

        <Row>

          <Col className='my-3'>
            <Form className='formInputs ml-5 mr-3' onSubmit={handleOnSubmit} noValidate validated={validated}
            >
              <Form.Group controlId="authorName">
                <Form.Label>Name of Author</Form.Label>
                <Form.Control type="text" placeholder=""
                              value={authorName ? authorName : ''}
                              required
                              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                handleOnAuthorNameChanged(event.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Author Name.
                </Form.Control.Feedback>
              </Form.Group>
              <Button className='create-btn mt-4 py-1 px-4' type='submit'>
                {authorToUpdate ? 'Update' : 'Create'}
              </Button>
            </Form>

          </Col>
        </Row>

      </Col>
    </Row>
  );
}

export default CreateAuthor;