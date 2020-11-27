import React, {Fragment, useEffect, useState} from "react";
import EditBook from './editBook';

const ListBooks = () => {

    const [books, setBooks] = useState([]);

    //delete a Book
 
    const deleteBook = async id => {
        try {
            const deleteBook = await fetch(`http://localhost:5000/books/${id}`, {
                method: "DELETE"
            }); 
            setBooks(books.filter(book => book.book_id !== id));
            console.log(deleteBook);
            window.location = "/";
        } catch (error) {
            console.error(error.message);
        }

    }


    //get all books

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
        <table className="table table-bordered mt-5 text-center">
        <thead>
            <tr>
            <th>Book Title</th>
            <th>Description</th>
            <th>Book Image</th>
        </tr>
        </thead>
        <tbody>
        {books.map(book => (
            <tr key={book.book_id}>
                <td>{book.book_title}</td>
                <td>{book.description}</td>
                <td><img width='120' height='200' src={book.imageurl}  alt="book"></img></td>
                <td><EditBook book={book}></EditBook></td>
                <td><button className="btn btn-danger" onClick={() => deleteBook(book.book_id)}>Delete</button></td>
            </tr>
        ))}
        </tbody>
        </table>
    </Fragment>
    );
};

export default ListBooks;