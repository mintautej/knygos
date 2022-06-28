import BookList from "./BookList";
import useFetch from "./useFetch";
import React, {useState, useEffect} from 'react'

const Home = () => {
  const { error, isPending, data: books } = useFetch('http://localhost:8080/api/books')

  return (
      <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Kraunama...</div>}
        {books && <BookList books={books} />}
      </div>
  );
}

export default Home;