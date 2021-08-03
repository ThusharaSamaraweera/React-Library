import { IAuthor } from "../../types/LibraryTypes";
import { AuthorActionTypes } from "../types/AuthorActionTypes"
import { ADD_AUTHOR, DELECT_AUTHOR, UPDATE_AUTHOR } from "../constants/AuthorConstant";
import { useToasts} from "react-toast-notifications";

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
        case DELECT_AUTHOR: {
            const allAuthors: IAuthor[] = state.authors.slice();
            allAuthors.splice(action.paylaod, 1);

            return {
                ...state,
                authors: allAuthors
            }
        }
        case UPDATE_AUTHOR: {
            const allAuthors: IAuthor[] = state.authors.slice();
            allAuthors.splice(action.paylaod.index, 1, action.paylaod.author);

            return{
                ...state,
                authors: allAuthors
            }
        }
        default: 
            return state
    }
}