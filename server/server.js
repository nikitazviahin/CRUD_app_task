const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server had started on port ${PORT}`);
})

//add book

app.post("/books", async (req,res) => {
    try {
        const { book_title, description, imageurl } = req.body;
        const newBook = await pool.query("INSERT INTO book (book_title, description, imageurl) VALUES($1, $2, $3) RETURNING *",
        [book_title, description, imageurl])
        res.json(newBook);
    } catch (error) {
        console.error(error.message);
    }
})

//get all books


app.get("/books", async (req,res) => {
    try {
        const allBooks = await pool.query("SELECT * FROM book");
        res.json(allBooks.rows);
    } catch (error) {
        console.error(error.message);
    }
})

//get a book

app.get("/books/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const book = await pool.query(
        "SELECT * FROM book WHERE book_id = $1",
        [id])
        res.json(book.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
})

//update a book

app.put("/books/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const { book_title, description, imageurl } = req.body;
        const updateBook = await pool.query(
            "UPDATE book SET book_title = $1, description = $2, imageurl = $3 WHERE book_id = $4",
            [book_title, description, imageurl, id]);
        res.json("updated");
    } catch (error) {
        console.error(error.message)
    }
})

//delete a book


app.delete("/books/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const deleteBook = await pool.query("DELETE FROM book WHERE book_id = $1",
        [id]);
        res.json("Book was Deleted");
    } catch (error) {
        console.error(error.message)
    }
})