import { Route, Routes } from 'react-router-dom'; 
import { Home, Login, Signup } from './pages';
import Navbar from './components/navbar/Navbar';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Search from './pages/Search';
import Shop from './pages/Shop';



function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/about' element={<About />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/search' element={<Search />} />
          <Route path='/shop' element={<Shop />} />
        </Routes> 
      </div>
    </>
  );
};

export default App
