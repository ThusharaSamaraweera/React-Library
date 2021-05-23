import React, {useState} from "react";
import BookTitle from "./BookTitle";
import BooksList from "./BooksList";
import AddBook1 from "./AddBook";
import CreateBooks from "./CreateBooks";

const Books: React.FC = () => {

    const [formVisible, setFormVisibility] = useState<false | true>(false);

    const handleOnFormOpen = () => {
        if (!formVisible) {
            setFormVisibility(true);
        }

    }

    const handleOnFormClose = () => {
        setFormVisibility(false)
    }

    return (
        <div>
            <BookTitle/>
            <BooksList/>
            <AddBook1 handleOnFormOpen={handleOnFormOpen}/>
            {formVisible && <CreateBooks handleOnFormClose={handleOnFormClose}/>}
        </div>
    )
}
export default Books