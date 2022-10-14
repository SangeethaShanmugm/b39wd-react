import { Book } from './Book';
import {useState, useEffect } from 'react';



export function BookList() {
  // const bookList = INITIAL_BOOK_LIST;
  const [bookList, setBookList] = useState([])

  useEffect(() => {
    fetch("https://63479fe4db76843976aee6fb.mockapi.io/books", {
      method: "GET"
    })
    .then((res) => res.json())
    .then((data) => setBookList(data))
  }, [])



   return (
    <div>
       <div className="book-list">
        {bookList.map((bk, index) => (
          <Book key={index} books={bk} id={index} />
        ))}
      </div>
    </div>


  );
}
