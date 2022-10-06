import { Counter } from './Counter';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


export function Book({ books, id }) {

  const [show, setShow] = useState(true);

  //conditional Styling
  const styles = {
    color: books.rating > 8 ? "green" : "red",
  };

  //true -visible - block
  //false -hide - none
  const summaryStyle = {
    display: show ? "block" : "none",
  };

  const navigate = useNavigate();

  return (
    <div className='book-container'>
      <img className="book-poster" src={books.poster} alt={books.name} />
      <div className='book-spec'>
        <h1 className='book-name'>{books.name} - {id}</h1>
        <h3 style={styles} className='book-rating'>⭐{books.rating}</h3>
      </div>
      <button
      onClick={() => navigate("/books/" + id)}
      >Info</button>
      <button
        onClick={() => setShow(!show)}
      >Toggle description</button>
      {/* <p style={summaryStyle}  className='book-summary'>{books.summary}</p>     */}
      {show ? <p className='book-summary'>{books.summary}</p> : null}
      <Counter />
    </div>
  );
}
