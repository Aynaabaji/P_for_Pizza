import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Menu from './pages/menu/Menu';
import Footer from './components/footer/Footer';
import Erro from '../src/pages/Erro'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<Erro/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;



// import React from 'react';
// import {Route, Routes} from 'react-router-dom';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Erro from './pages/Erro.jsx';



// const App = () => {
//   return (
//     <>
//       <Routes>
//         <Route exact path='/' element={<About/>} />
//         <Route path='/contact' element={<Contact/>} />
//         <Route path='*' element={<Erro/>}/>
//       </Routes>
//     </>
//   )
// }

// export default App
