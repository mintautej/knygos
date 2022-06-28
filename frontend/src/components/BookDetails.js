import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const { data: book, error, isPending } = useFetch('http://localhost:8080/api/books/' + id);
  const history = useNavigate();

  const handleClick = () => {
    fetch('http://localhost:8080/api/books/' + book.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

  return (
    <div className="book-details">
      { isPending && <div>Kraunama...</div> }
      { error && <div>{ error }</div> }
      { book && (
        <article>
          <h2>{ book.book_name }</h2>
          <p>Knygos aprašymas: { book.book_description }</p>
          <p>ISBN numberis:  { book.isbn_number }</p>
          <p>Puslapių skaičius:  { book.pages }</p>
          <p>Norima rezervuoti iki:  { book.reservation_date }</p>
          <div>{ book.body }</div>
          <button onClick={handleClick}>Ištrinti rezervaciją</button>
          <Link to={`edit/${book.id}`}>Redaguoti rezervaciją</Link>
        </article>
      )}
    </div>
  );
}
 
export default BookDetails;