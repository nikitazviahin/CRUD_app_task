CREATE DATABASE books;

CREATE TABLE book(
    book_id SERIAL PRIMARY KEY,
    book_title VARCHAR(255),
    description VARCHAR(255),
    imageurl VARCHAR(255)
);