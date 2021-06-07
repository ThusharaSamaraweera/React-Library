import AuthorTitle from "./AuthorTitle";
import AuthorList from "./AuthorList";
import AddAuthor from "./AddAuthor";
import CreateAuthor from "./CreateAuthor";
import {IAuthor} from "../../types/LibraryTypes";
import React from "react";

type AuthorsProps = {
  authors: IAuthor[]
  onAuthorDeleted: (authorIndex: number) => void
  onUpdateRequest: (authorIndex: number) => void
  onClickAddAuthor: () => void
  onAuthorUpdated: (updatedAuthor: IAuthor) => void;
  authorToUpdate: IAuthor | null
  formVisible: boolean
  onAuthorAdded: (author: IAuthor) => void;
  onFormClose: () => void;
}

const Authors: React.FC<AuthorsProps> = (props) => {
  return (
    <div>
      <AuthorTitle/>
      <AuthorList authors={props.authors}
                  onAuthorDeleted={props.onAuthorDeleted}
                  onUpdateRequest={props.onUpdateRequest}
      />
      <AddAuthor addClick={props.onClickAddAuthor}/>
      {props.formVisible && <CreateAuthor onFormClose={props.onFormClose}
                                          onAuthorAdded={props.onAuthorAdded}
                                          authorToUpdate={props.authorToUpdate}
                                          onAuthorUpdated={props.onAuthorUpdated}
      />}
    </div>
  )
}

export default Authors
