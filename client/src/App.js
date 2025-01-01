import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Login from "./pages/login/Login.jsx";
import Register from "./register/Register.jsx";
import Profile from "./pages/profile/Profile.jsx";

function App() {
  return (

    <Router>
      <Routes>
        <Route exact path='/' element={<Home></Home>}>
        </Route>
        <Route path='/login' element={<Login></Login>}>
        </Route>
        <Route path='/register' element={<Register></Register>}>
        </Route>
        <Route path='/profile/:username' element={<Profile></Profile>}>
        </Route>
      </Routes>
    </Router>

  )
}

export default App;