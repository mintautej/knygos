import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Admin_Create = () => {
  const [book_name, setName] = useState('');
  const [book_description, setDescription] = useState('');
  const [isbn_number, setIsbnNumber] = useState('');
  const [pages, setPages] = useState('');
  const [reservation_date, setDate] = useState('');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();



  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { book_name, book_description, isbn_number, pages, reservation_date };

    setIsPending(true);

    fetch('http://localhost:8080/api/books', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book)
    }).then(() => {
      console.log('rezervacija patvirtinta!');
      setIsPending(false);
      navigate('/profile');
    })
  }

  return (
    <div className="create">
      <h3>Pridėti naują rezervaciją</h3>
      <form onSubmit={handleSubmit}>
        <label>Knygos pavadinimas:</label>
        <input
          type="text"
          required
          value={book_name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Knygos aprašymas:</label>
        <textarea
          value={book_description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>ISBN numeris:</label>
        <input
          type="text"
          value={isbn_number}
          onChange={(e) => setIsbnNumber(e.target.value)}
        />
        <label>Puslapių skaičius:</label>
        <input
          type="number"
          value={pages}
          onChange={(e) => setPages(e.target.value)}
        />
        <label>Knygą norima pasiskolinti iki:</label>
        <input
          type="date"
          required
          value={reservation_date}
          onChange={(e) => setDate(e.target.value)}
        />
        {!isPending && <button>Pridėti rezervaciją</button>}
        {isPending && <button disabled>Rezervacija pridedama...</button>}
      </form>
    </div>
  );
}

export default Admin_Create;