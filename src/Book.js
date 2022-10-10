import { Counter } from './Counter';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';

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
      {/* <button
      onClick={() => navigate("/books/" + id)}
      >Info</button> */}

       <IconButton   
       onClick={() => setShow(!show)}     
       className ="bt-sz-lg"
       aria-label="Toggle-desc"
       color="primary">   
        {show ?  <ExpandLessIcon /> : <ExpandMoreIcon /> }
      {/* <ExpandLessIcon />
      <ExpandMoreIcon /> */}
      </IconButton>

      <IconButton   
       onClick={() => navigate(`/books/${id}`)}
       className ="bt-sz-lg"
       aria-label="Toggle-desc"
       color="primary">   
       <InfoIcon />
      </IconButton>

      {/* <button
        onClick={() => setShow(!show)}
      >Toggle description</button> */}
      {/* <p style={summaryStyle}  className='book-summary'>{books.summary}</p>     */}
      {show ? <p className='book-summary'>{books.summary}</p> : null}
      <Counter />
    </div>
  );
}


//eg - navigate(-) -  back
// navigate(+) - forward -next
//(-4) - 4 page backward

//Task  - 15 mins
//Add Books - similar to Add Color
// 4 input - book name, poster, rating, summary
//AddBook button