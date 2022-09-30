import './App.css';
import { AddColor } from './AddColor';

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

 
  return (
    <div className="App">   

   <Book />
  </div>
  );
}

function Book() {

  const books = {
    name: "charlotte's web ",
    poster: "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
    rating: 8,
    summary:"When Wilbur, a pig adopted by young Fern, grows up, she sells it to her uncle who intends to slaughter it for food. Charlotte, a spider, vows to save the pig's life."
  }

  return(
    <div className='book-container'>
      <img className="book-poster" src={books.poster} alt={books.name} />
     <div className='book-spec'>
     <h1 className='book-name'>{books.name} </h1>
      <h3 className='book-rating'>⭐{books.rating}</h3>
      </div>
      <p className='book-summary'>{books.summary}</p>
    
    </div>
  )
}




export default App;


//name - props
//component
// 1. First letter must be capital
// 2. It return a JSX element
// component - declaration