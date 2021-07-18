import { IAuthor } from "../../types/LibraryTypes";
import { AuthorActionTypes } from "../types/AuthorActionTypes"
import { ADD_AUTHOR } from "../constants/AuthorConstant";

interface storestate {
    authors: IAuthor[]
}

const initState: storestate = {
    authors: [{name: "kamal"}, {name: "amal"}]
}

export const AuthorReducer = (state:storestate = initState, action: AuthorActionTypes) => {
    switch(action.type){
        case ADD_AUTHOR: {
            return {
                ...state, 
                authors: [...state.authors, action.payload]
            }
        }
        default: 
            return state
    }
}