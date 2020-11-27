import React, { Fragment, useState } from 'react';

const EditBook = ({ book }) => {

    const [book_title, setBook_title] = useState(book.book_title);
    const [description, setDescription] = useState(book.description);
    const [imageurl, setImageurl] = useState(book.imageurl);

    //edit func

    const updateBook = async e => {
        e.preventDefault();
        try {
            const body = {book_title, description, imageurl};
            const response = await fetch(`http://localhost:5000/books/${book.book_id}`, {
                method: "PUT", 
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response);
            window.location = "/";
        } catch (error) {
            console.log(error.message);
        }    
    }

    return (
        <Fragment>
            <button 
                type="button" 
                className="btn btn-warning" 
                data-toggle="modal" 
                data-target={`#id${book.book_id}`}>
                Edit
            </button>
                <div className="modal" id={`id${book.book_id}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Book</h4>
                            <button 
                                type="button" 
                                className="close" 
                                data-dismiss="modal"
                            >
                                &times;
                            </button>
                    </div>

                    
                    <div className="modal-body">
                    <input 
                        type="text" 
                        className="form-control mt-2" 
                        value={book_title}
                        onChange={e => setBook_title(e.target.value)}
                    />
                    <input 
                        type="text" 
                        className="form-control mt-2" 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        type="text" 
                        className="form-control mt-2" 
                        value={imageurl}
                        onChange={e => setImageurl(e.target.value)}
                    />
                    
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-warning" 
                            data-dismiss="modal"
                            onClick={e => updateBook(e)}    
                        >Edit</button>
                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>

                    </div>
                </div>
                </div>
        </Fragment>
    );
}

export default EditBook;