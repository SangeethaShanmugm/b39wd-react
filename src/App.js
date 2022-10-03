import './App.css';
import { AddColor } from './AddColor';
import { Counter } from './Counter';
import { useState } from 'react';

const INITIAL_BOOK_LIST = [
  {
    name: "Charlotte's web",
    poster:
      "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
    rating: 8.8,
    summary:
      "The novel tells the story of a livestock pig named Wilbur and his friendship with a barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live.",  
  },
  {
    name: "The power of your subconscious mind",
    poster:
      "https://kbimages1-a.akamaihd.net/6f3cf06c-4811-42d4-bd63-564c8264bc2d/1200/1200/False/the-power-of-your-subconscious-mind-57.jpg",
    rating: 7,
    summary:
      "Your subconscious mind is a powerful force to be reckoned with. It makes up around 95% of your brain power and handles everything your body needs to function properly, from eating and breathing to digesting and making memories"
  },
  {
    name: "Attitude is everything ",
    poster:
      "https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg",
    rating: 8.1,
    summary:
      "Attitude, In psychology, a mental position with regard to a fact or state. Attitudes reflect a tendency to classify objects and events and to react to them with some consistency. Attitudes are not directly observable but rather are inferred from the objective, evaluative responses a person makes."
  },
  {
    name: "The Secret",
    poster:
      "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
    summary:
      "There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from a catalogue",
    rating: 8.8
  },
  {
    name: "Discover Your Destiny",
    rating: 6,
    summary:
      "'Discover Your Destiny' is a story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside.",
    poster:
      "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg"
  },
  {
    name: "The 5 AM Club",
    poster: "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
    rating: 6.5,
    summary:
      "In The 5 AM Club: Own Your Morning. Elevate Your Life, he uses a fictitious story about a billionaire mentor teaching a struggling artist and an entrepreneur about the importance of waking up early to show how revolutionary it is for success."
  },
  {
    name: "Atomic Habits",
    poster: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    rating: 8,
    summary:
      "Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time."
  },
  {
    name: "I Can Do It",
    poster: "https://images-na.ssl-images-amazon.com/images/I/81T3L1yTJwL.jpg",
    rating: 7.9,
    summary:
      "Hay shows you that you “can do it”—that is, change and improve virtually every aspect of your life—by understanding and using affirmations correctly. Louise explains that every thought you think and every word you speak is an affirmation. Even your self-talk, your internal dialogue, is a stream of affirmations."
  }
];


function App() {
   
  const users = [
    {
      name:"Sathish",
      pic:"https://scontent.fixm1-1.fna.fbcdn.net/v/t1.6435-9/121193596_2200160230128519_8049283258679180567_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UMSDv1lTNF8AX9l0sMK&_nc_ht=scontent.fixm1-1.fna&oh=00_AT-PN6LtxpJWEgn1Lpr71JPig499DKWKrRB5sEYkwyyYEw&oe=6358B5E7",
        
    },
    {
      name:"Navyasri",
      pic:"https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name:"persis",
      pic:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600", 
    },
    {
      name:"manish",
      pic:"https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
    },
    {
      name: "Sneha",
      pic: "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/11/alone-Best-Dp-Profile-Images-For-Instagram-photo.gif"
    }
  ]
  
  const bookList = INITIAL_BOOK_LIST;
 
  return (
    <div className="book-list">   
    {bookList.map((bk, index) => (
      <Book key={index} books={bk} />
    ))}  
  </div>
  );
}

function Book( { books } ) {
  
  const [show, setShow]  = useState(true);
 
  //conditional Styling
  const styles = {
    color: books.rating > 8 ? "green" :  "red",
  }
  
  //true -visible - block
  //false -hide - none

  const summaryStyle =  {
    display: show ? "block" : "none",
  }

  return(
    <div className='book-container'>
      <img className="book-poster" src={books.poster} alt={books.name} />
     <div className='book-spec'>
     <h1 className='book-name'>{books.name} </h1>
      <h3 style={styles}  className='book-rating'>⭐{books.rating}</h3>
      </div>
      <button
      onClick={() => setShow(!show)}
      >Toggle description</button>
      <p style={summaryStyle}  className='book-summary'>{books.summary}</p>    
      <Counter />
    </div>
  )
}




export default App;


//name - props
//component
// 1. First letter must be capital
// 2. It return a JSX element
// component - declaration