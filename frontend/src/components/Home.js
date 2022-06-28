// import React, { useState, useEffect } from "react";
// import UserService from "../services/user.service";
// import DishList from "./DishList";
// import useFetch from "./useFetch";

// const Home = () => {
//   const [content, setContent] = useState("");
//   useEffect(() => {
//     UserService.getPublicContent().then(
//       (response) => {
//         setContent(response.data);
//       },
//       (error) => {
//         const _content =
//           (error.response && error.response.data) ||
//           error.message ||
//           error.toString();
//         setContent(_content);
//       }
//     );
//   }, []);
//   return (
//     <div className="container">
//       <header className="jumbotron">
//         <h3>{content}</h3>
//       </header>
//     </div>
//   );
// };
// export default Home;

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