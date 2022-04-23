import React from 'react';
import Login from "./login/login.jsx";
import Userregister from "./register/user.jsx";
import Usernavbar from "./navbar/user.jsx";
import Audiobooks from "./books/audiobooks.jsx"
import Books from "./books/books.jsx"
import Author from "./author.jsx"
import Library from "./library.jsx"
import Sell from "./sell.jsx"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div> 
        <Usernavbar/> 
       <Routes>
       <Route path="/" exact element={<Home/>}/>
       <Route path="/books" element={<Books/>}/>
       <Route path="/audiobooks" element={<Audiobooks/>}/>
       <Route path="/authors" element={<Author/>}/>
       <Route path="/library" element={<Library/>}/>
       <Route path="/sell" element={<Sell/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/register" element={<Userregister/>}/>
       {/* <Route path="/register/user" element={<Userregister/>}/> */}
       {/* <Route path="/register/seller" element={<Sellerregister/>}/> */}
       </Routes>
       </div>
       </Router>
  );

}
const Home = () => (
<div>
   <h1>Home Page</h1>
</div>
);

export default App;
