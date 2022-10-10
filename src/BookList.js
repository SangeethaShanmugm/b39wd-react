import { Book } from './Book';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function BookList({ bookList, setBookList }) {
  // const bookList = INITIAL_BOOK_LIST;

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  return (
    <div>
      <div className='add-book-form'>
        <TextField
          // onChange -typing event , setColor -react-> value -> word
          onChange={(event) => setName(event.target.value)}
          label="Name"
          variant="standard" />
        <TextField
          // onChange -typing event , setColor -react-> value -> word
          onChange={(event) => setPoster(event.target.value)}
          label="Poster"
          variant="standard" />
        <TextField
          // onChange -typing event , setColor -react-> value -> word
          onChange={(event) => setRating(event.target.value)}
          label="Rating"
          variant="standard" />

        <TextField
          onChange={(event) => setSummary(event.target.value)}
          label="Summary"
          variant="standard" />

         <TextField
          onChange={(event) => setTrailer(event.target.value)}
          label="Trailer"
          variant="standard" />

        <Button
          // copy the bookList and add newBook to it - newBook is an object
          onClick={() => {
            const newBook = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
              trailer: trailer,
            };
            setBookList([...bookList, newBook]);
          }}
          variant="contained">Add Book</Button>

      </div>
      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book key={index} books={bk} id={index} />
        ))}
      </div>
    </div>


  );
}
