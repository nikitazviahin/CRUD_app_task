import React, {Fragment, useEffect, useState} from "react";

const ListBooks = () => {

    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        try {
            const response = await fetch("http://localhost:5000/books");
            const jsonData = await response.json();
            
            setBooks(jsonData);
        } catch (error) {
            console.log(error.message);
        }
    }
    
    useEffect(() => {
        getBooks();
    },[]);

    
    return (
    <Fragment>
        <table class="table table-bordered mt-5 text-center">
        <tr>
            <th>Book Title</th>
            <th width>Description</th>
            <th>Book Image</th>
        </tr>
        {books.map(book => (
            <tr>
                <td>{book.book_title}</td>
                <td>{book.description}</td>
                <td><img width='100' height='200' src={book.imageurl}  alt="das"></img></td>
                <td>Edit</td>
                <td>Delete</td>
            </tr>
        ))}
        </table>
    </Fragment>
    );
};

export default ListBooks;