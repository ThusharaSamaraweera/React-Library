import AuthorTitle from "./AuthorTitle";
import AuthorList from "./AuthorList";
import AddAuthor from "./AddAuthor";
import CreateAuthor from "./CreateAuthor";
import {IAuthor} from "../../types/LibraryTypes";
import React, { useState } from "react";

type AuthorsProps = {
  onUpdateRequest: (authorIndex: number) => void
  onClickAddAuthor: () => void
  onAuthorUpdated: (updatedAuthor: IAuthor) => void;
  authorToUpdate: IAuthor | null
  formVisible: boolean
  onFormClose: () => void;
}

const Authors: React.FC<AuthorsProps> = (props) => {
  
  return (
    <div>
      <AuthorTitle/>
      <AuthorList onUpdateRequest={props.onUpdateRequest}
      />
      <AddAuthor addClick={props.onClickAddAuthor}/>
      {props.formVisible && <CreateAuthor onFormClose={props.onFormClose}
                                          authorToUpdate={props.authorToUpdate}
                                          onAuthorUpdated={props.onAuthorUpdated}
      />}
    </div>
  )
}

export default Authors
