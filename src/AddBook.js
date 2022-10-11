import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function AddBook({ bookList, setBookList }) {

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const navigate = useNavigate();

  return (
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
          navigate("/books");
        }}
        variant="contained">Add Book</Button>

    </div>
  );

}
