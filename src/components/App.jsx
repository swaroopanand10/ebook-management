import React from 'react';
import Login from "./login/login.jsx";
import Userregister from "./register/user.jsx";
import Sellerregister from "./register/seller.jsx";
import Choice from "./register/choice.jsx";
import Usernavbar from "./navbar/user.jsx"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div> 
        <Usernavbar/> 
       <Routes>
       <Route path="/" exact element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/register" element={<Choice/>}/>
       <Route path="/register/user" element={<Userregister/>}/>
       <Route path="/register/seller" element={<Sellerregister/>}/>
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
