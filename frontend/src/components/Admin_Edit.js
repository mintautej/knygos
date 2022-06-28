import { useState } from 'react';
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from 'react-router-dom';

function Admin_Edit() {
    const [editedName, setEditedName] = useState('');
    const [editedDescription, setEditedDescription] = useState('');
    const [editedIsbnNumber, setEditedIsbnNumber] = useState('');
    const [editedPages, setEditedPages] = useState('');
    const [editedDate, setEditedDate] = useState('');

    const [editingName, setEditingName] = useState(false);
    const [editingDescription, setEditingDescription] = useState(false);
    const [editingIsbnNumber, setEditingIsbnNumber] = useState(false);
    const [editingPages, setEditingPages] = useState(false);
    const [editingDate, setEditingDate] = useState(false);

    const history = useNavigate();

    const { id } = useParams();

    const { data: book, error, isPending } = useFetch('http://localhost:8080/api/books/' + id);

    const handleSave = (e) => {
        e.preventDefault();

        let book_name = editingName ? editedName : book.book_name;
        let book_description = editingDescription ? editedDescription : book.book_description;
        let isbn_number = editingIsbnNumber ? editedIsbnNumber : book.isbn_number;
        let pages = editingPages ? editedPages : book.pages;
        let reservation_date = editingDate ? editedDate : book.reservation_date;

        const editedBook = { book_name, book_description, isbn_number, pages, reservation_date };

        fetch('http://localhost:8080/api/books/' + id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editedBook)
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="edit">
            <h2>Redaguoti knygos rezervaciją - {id}</h2>
            {isPending && <div>Kraunama...</div>}
            {error && <div>{error}</div>}
            {book && (<form>
                <label>Knygos pavadinimas:</label>
                <input type="text" value={editingName ? editedName : book.book_name} onChange={(e) => {
                    setEditingName(true);
                    setEditedName(e.target.value);
                }} />

                <label>Knygos aprašymas:</label>
                <textarea value={editingDescription ? editedDescription : book.book_description} onChange={(e) => {
                    setEditingDescription(true);
                    setEditedDescription(e.target.value);
                }} ></textarea>

                <label>ISBN numberis:</label>
                <textarea value={editingIsbnNumber ? editedIsbnNumber : book.isbn_number} onChange={(e) => {
                    setEditingIsbnNumber(true);
                    setEditedIsbnNumber(e.target.value);
                }}></textarea>

                <label>Puslapių skaičius:</label>
                <textarea value={editingPages ? editedPages : book.pages} onChange={(e) => {
                    setEditingPages(true);
                    setEditedPages(e.target.value);
                }}></textarea>

                <label>Knygą norima pasiskolinti iki:</label>
                <textarea value={editingDate ? editedDate : book.reservation_date} onChange={(e) => {
                    setEditingDate(true);
                    setEditedDate(e.target.value);
                }}></textarea>

                <button onClick={handleSave}>Išsaugoti</button>

            </form>)}
        </div>
    );
}

export default Admin_Edit;
