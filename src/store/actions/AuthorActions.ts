import { ADD_AUTHOR, DELECT_AUTHOR, UPDATE_AUTHOR } from "../constants/AuthorConstant";
import { IAuthor } from "../../types/LibraryTypes";
import { AddAuthorType, DelectAuthorType, UpdateAuthorType } from "../types/AuthorActionTypes";

export const addAuthor = (author: IAuthor): AddAuthorType => {
    return {
        type: ADD_AUTHOR,
        payload: author
    }
}

export const delectAuthor = (index: number) : DelectAuthorType => {
    return {
        type: DELECT_AUTHOR, 
        paylaod: index
    }
}

export const updateAuthor = (index: number, updateAuthor: IAuthor): UpdateAuthorType => {
    return {
        type: UPDATE_AUTHOR,
        paylaod: {
            index: index,
            author: updateAuthor
        }
    }
}
