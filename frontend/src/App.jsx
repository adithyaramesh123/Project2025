import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Aboutus from "./components/Aboutus";
import Contacts from "./components/Contacts";
import Logout from "./components/Logout";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      {/*Navbar visible on all pages*/}
      <Navbar />
      <div style={{ marginTop: "80px"}}>
      {/*page Routes*/}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />}/>
         <Route path='/aboutus' element={<Aboutus />}/>
          <Route path='/p' element={<Contacts />}/>
           <Route path='/logout' element={<Logout />}/>
         
      </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
