import React, { Fragment, useState } from 'react';


const InputBook = () => {

    const [book_title, setBook_title] = useState('');
    const [description, setDescription] = useState('');
    const [imageurl, setImageurl] = useState('');

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = {book_title, description, imageurl};
            const response = await fetch("http://localhost:5000/books", {
                method: "POST", 
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            
            console.log(response);
            window.location = "/";
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <Fragment>
        <h1 className="text-center mt-5">CRUD test task</h1>
        <form className="mt-10" onSubmit={onSubmitForm}>
            <p>Input book title</p>
            <input 
                type="text" 
                className="form-control mb-2" 
                value={book_title} 
                onChange={e => setBook_title(e.target.value)}
            />
            <p>Input short book description</p>
            <input 
                type="text" 
                className="form-control mb-2" 
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <p>Input book picture url</p>
            <input 
                type="text" 
                className="form-control mb-2" 
                value={imageurl}
                onChange={e => setImageurl(e.target.value)}
            />
            <button className="btn btn-success mt-5">Add Book</button>
        </form>
        </Fragment>
    )
}

export default InputBook;