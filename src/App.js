import React from 'react'; 
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import NavBar from './component/layouts/NavBar';
import { BrowserRouter , Routes , Route, useLocation } from "react-router-dom";
import Home from './component/pages/Home';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
import NotFound from './component/pages/NotFound';
import Adduser from './component/users/Adduser';
import EditUser from './component/users/EditUser';
import UserView from './component/users/UserView';

function App() {

  
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/users/add" element={<Adduser />} />
          <Route exact path="/users/edit/:id" element={<EditUser/>} />
          <Route exact path="/users/:id" element={<UserView/>} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App;
