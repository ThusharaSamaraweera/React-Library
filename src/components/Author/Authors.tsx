import AuthorTitle from "./AuthorTitle";
import AuthorList from "./AuthorList";
import AddAuthor from "./AddAuthor";
import CreateAuthor from "./CreateAuthor";
import {IAuthor} from "../../types/LibraryTypes";
import React, { useState } from "react";

type AuthorsProps = {
  onUpdateRequest: (authorIndex: number) => void
  onClickAddAuthor: () => void
  onAuthorUpdated: () => void;
  authorToUpdate: IAuthor | null
  formVisible: boolean
  onFormClose: () => void;
  authorToUpdateIndex: number | null 
  setFormVisible: (arg0: boolean) => void
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
                                          authorToUpdateIndex={props.authorToUpdateIndex}
                                          setFormVisible={props.setFormVisible}
      />}
    </div>
  )
}

export default Authors
