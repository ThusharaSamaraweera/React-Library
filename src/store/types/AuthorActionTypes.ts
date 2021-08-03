import { IAuthor } from "../../types/LibraryTypes";
import { ADD_AUTHOR, DELECT_AUTHOR, UPDATE_AUTHOR } from "../constants/AuthorConstant";

export interface AddAuthorType {
    type: typeof ADD_AUTHOR
    payload: IAuthor
}
    
export interface DelectAuthorType {
    type: typeof DELECT_AUTHOR
    paylaod: number
}

export interface UpdateAuthorType {
    type: typeof UPDATE_AUTHOR
    paylaod: {
        index: number,
        author: IAuthor
    }
}

export type AuthorActionTypes = AddAuthorType | DelectAuthorType | UpdateAuthorType;