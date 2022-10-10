import { useParams, useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

//eg - books/1
//useParama - extract (number - id/index) from URL
export function BookDetails({ bookList }) {

  const { bookid } = useParams();
  const book = bookList[bookid];
  console.log(bookList, book);

  const navigate = useNavigate();

  return (
    <div>
    <iframe width="100%" height="580" src={book.trailer} title="The Secret - Full Documentary - English Sub" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="book-detail-container">
       <div className="book-spec">
       <h2 className="book-name">{book.name}</h2>
        <p className="book-rating">⭐ {book.rating}</p>
       </div>
       <p className="book-summary">{book.summary}</p>
       <Button 
       startIcon={<ArrowBackIosIcon />}
       onClick={() => navigate(-1)}
       variant="contained" 
       >
       BACK
      </Button>

      </div>
    </div>
  );
}

