import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardAdmin from "./components/BoardAdmin";
import Nav from "./components/Nav";
import Admin_Create from "./components/Admin_Create"
import Admin_Edit from "./components/Admin_Edit";
import BookDetails from "./components/BookDetails";
import NotFound from "./components/NotFound";

const App = () => {
  
  return (
    <div>
      <Nav/>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/books" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/admin" element={<BoardAdmin />} />
          <Route path="/create" element={<Admin_Create />} />
          <Route path="/books/edit/:id" element={<Admin_Edit />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;