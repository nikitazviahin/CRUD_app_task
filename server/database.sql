CREATE DATABASE books_table;

CREATE TABLE book(
    book_id SERIAL PRIMARY KEY,
    book_title VARCHAR(255),
    description VARCHAR(1000),
    imageurl VARCHAR(1000)
);