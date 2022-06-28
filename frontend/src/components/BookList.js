import { Link } from "react-router-dom";

const BookList = ({ books, book_name }) => {
    return (
      <div className="book-list">
        <h2>{ book_name }</h2>
        {books.map(book => (
          <div className="book-preview" key={book.id} >
            <Link to={`/books/` + book.id}>
            <h2>{ book.book_name }</h2>
            <p>Patiekalo kaina: { book.book_price }</p>
            <p>Rezervuotas kiekis: { book.book_amount }</p>
            <p>Mokėtina suma: {book.book_price * book.book_amount}</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
   
  export default BookList;