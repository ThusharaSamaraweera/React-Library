import React, {useEffect, useState} from "react";
import BookTitle from "./BookTitle";
import BooksList from "./BooksList";
import AddBook1 from "./AddBook";
import CreateBooks from "./CreateBooks";
import {IAuthor, IBook} from "../../types/LibraryTypes";
import {useToasts} from "react-toast-notifications";

type BooksProps = {
  authors: IAuthor[]
}

const Books: React.FC<BooksProps> = (props) => {
  const bookList: IBook[] = [
    {name: 'book 1', price: 11, author: 'author1'},
    {name: 'book 2', price: 22, author: 'author2'},
    {name: 'book 3', price: 33, author: 'author1'}
  ]
  const [formVisible, setFormVisibility] = useState<false | true>(false);
  const [books, setBooks] = useState<IBook[]>(bookList)
  const [bookToUpdate, setBookToUpdate] = useState<IBook | null>(null);
  const [bookToUpdateIndex, setBookToUpdateIndex] = useState<number | null>(null);

  const {addToast} = useToasts();


  const handleOnFormOpen = () => {
    setBookToUpdateIndex(null);
    setBookToUpdate(null);
    if (!formVisible) {
      setFormVisibility(true);
    }
  }

  const handleOnFormClose = () => {
    setFormVisibility(false);
    setBookToUpdate(null);
    setBookToUpdateIndex(null);
  }

  const handleOnBookDeleted = (index: number) => {
    const userConfirmation: boolean = window.confirm('Delete this book?');
    if (index === null) {
      return;
    }
    if (userConfirmation) {
      const allBooks: IBook[] = bookList.slice()
      allBooks.splice(index, 1);
      setBooks(allBooks);
      addToast("Book Deleted", {appearance: 'info', autoDismiss: true});

      if (bookToUpdateIndex) {
        if (bookToUpdateIndex > index) {
          setBookToUpdateIndex(bookToUpdateIndex - 1);
        }
      }
      if (bookToUpdateIndex === index) {
        setBookToUpdateIndex(null);
        setBookToUpdate(null);
        setFormVisibility(false);

      }

    }
  }

  const handleOnBookAdded = (name: string, price: number, author: string) => {
    const newBook: IBook = {name, price, author};
    const allbooks: IBook[] = bookList.slice();
    allbooks.push(newBook);
    setBooks(allbooks);
    addToast("Nex Book Created", {appearance: 'success', autoDismiss: true});
  }

  const HandleOnUpdateRequest = (bookIndex: number) => {
    setBookToUpdate(books[bookIndex]);
    setBookToUpdateIndex(bookIndex);
  }

  useEffect(() => {
    if (!bookToUpdate) {
      return;
    }
    setFormVisibility(true);
  }, [bookToUpdate]);

  const handleUpdatedBook = (updatedBook: IBook) => {
    const allBooks: IBook[] = books.slice();
    if (bookToUpdateIndex === null) {
      return;
    }
    allBooks.splice(bookToUpdateIndex, 1, updatedBook);
    setBooks(allBooks);
    addToast("Book Updated", {appearance: 'success', autoDismiss: true});
    setBookToUpdate(null);
    setBookToUpdateIndex(null);
    setFormVisibility(false);
  }

  return (
    <div>
      <BookTitle/>
      <BooksList booksList={books}
                 onBookDeleted={handleOnBookDeleted}
                 onUpdateRequest={HandleOnUpdateRequest}

      />
      <AddBook1 handleOnFormOpen={handleOnFormOpen}/>
      {formVisible && <CreateBooks handleOnFormClose={handleOnFormClose}
                                   authors={props.authors}
                                   onBookAdded={handleOnBookAdded}
                                   bookToUpdate={bookToUpdate}
                                   onBookUpdated={handleUpdatedBook}
      />}
    </div>
  )
}
export default Books

