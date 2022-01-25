import React, {useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {XCircle} from "react-feather";
import {IAuthor, AuthorInDropDown, IBook} from "../../types/LibraryTypes";
import Select from 'react-select/creatable';
import NumberFormat from 'react-number-format';

type CreateBooksProps = {
  handleOnFormClose: () => void
  authors: IAuthor[]
  onBookAdded: (name: string, price: number, author: string) => void
  bookToUpdate: IBook | null
  onBookUpdated: (bookUpdated: IBook) => void
}

const CreateBooks: React.FC<CreateBooksProps> = (props) => {

  const [name, setName] = useState<string | null>(null);
  const [price, setPrice] = useState<number | null>(null);
  const [author, setAuthor] = useState<null | AuthorInDropDown>(null)
  const [validated, setValidated] = useState(false);

  const authorsOfOptionList: AuthorInDropDown[] = props.authors.map(
    (author) => {
      return {value: author.name, label: author.name}
    });

  const handleOnBookNameChanged = (name: string) => {
    setName(name);
  }

  const handleOnPriceChanged = (price: number | undefined) => {
    if (price === undefined) {
      setPrice(null);
    } else if (price) {
      setPrice(price);
    }
  }

  const handleOnAuthorChanged = (author: null | AuthorInDropDown) => {
    setAuthor(author);
  }

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    if (!name || name === "" || !price || price <= 0 || !author) {
      return;
    }
    if (props.bookToUpdate) {
      const updatedBook: IBook = {...props.bookToUpdate, name: name, price: price, author: author.value};
      props.onBookUpdated(updatedBook);
      return;
    }
    props.onBookAdded(name, price, author.value);
    setValidated(false);
    setName('');
    setPrice(null);
    setAuthor(null);

  }

  useEffect(() => {
    if (!props.bookToUpdate) {
      setName('');
      setPrice(null);
      setAuthor(null);
      return;
    }
    setName(props.bookToUpdate.name);
    setPrice(props.bookToUpdate.price);
    const goingToUpdateAuthor: AuthorInDropDown = {
      value: props.bookToUpdate.author,
      label: props.bookToUpdate.author
    }
    setAuthor(goingToUpdateAuthor);
  }, [props.bookToUpdate])


  return (
    <Row className='create-book my-5'>
      <Col xs={12} md={11} lg={10}>
        <Row>
          <Col xs={10}>
            <h3>{props.bookToUpdate ? "Update Book" : "Create Book"}</h3>
          </Col>
          <Col xs={2}>
            <i onClick={props.handleOnFormClose}><XCircle/></i>
          </Col>
        </Row>

        <Row>

          <Col className='my-4'>
            <Form className='formInputs' noValidate validated={validated}
                  onSubmit={handleOnSubmit}
            >
              <Form.Group controlId="bookName">
                <Form.Label>Title of the Book</Form.Label>
                <Form.Control type="text"
                              placeholder=""
                              value={name ? name : ''}
                              required
                              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                handleOnBookNameChanged(event.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Book Name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="Price">
                <Form.Label>Price</Form.Label>
                <NumberFormat thousandSeparator={true}
                              className='form-control'
                              required
                              prefix={'$'}
                              value={price ? price : ''}
                              placeholder=""
                              onValueChange={(values) => {
                                handleOnPriceChanged(values.floatValue)
                              }}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Price.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="authorName">
                <Form.Label>Author</Form.Label>
                <Select

                  value={author}
                  onChange={(selected: AuthorInDropDown | null) => {
                    handleOnAuthorChanged(selected)
                  }}
                  allowCreateWhileLoading
                  options={authorsOfOptionList}
                  isClearable={true}
                  isSearchable={false}
                  theme={theme => ({
                    ...theme,
                    borderRadius: 0,
                    borderWidth: 2,
                    colors: {
                      ...theme.colors,
                      primary25: '#f5f5f5',
                      primary: '#989898',
                    },
                  })}
                  styles={{
                    container: base => ({
                      ...base,
                      backgroundColor: '#989898',
                      padding: 2,
                    }),
                    control: base => ({
                      ...base,
                      border: 0,
                    }),
                  }}
                />
              </Form.Group>

              {(!author && validated === true) &&
              <span className='select-invalid'>
                                Please select an Author.
                            </span>}
              <Button type="submit"
                      className='create-btn mt-4 py-1 px-4'>{props.bookToUpdate ? "Update" : "Create"}
              </Button>
            </Form>
          </Col>

        </Row>
      </Col>
    </Row>
  )
}

export default CreateBooks