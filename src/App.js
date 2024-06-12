import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../src/Pages/Home/Home'
import AddProduct from '../src/Pages/AddProduct/AddProduct'
import EditProduct from '../src/Pages/EditProduct/EditProduct'
import Favorite from '../src/Pages/Favorite/Favorite'
import Products from '../src/Pages/Products/Products'
import Search from '../src/Pages/Search/Search'



function App() {
  localStorage.setItem("user","userDetails")
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addproduct' element={<AddProduct/>} />
        <Route path='/editProduct' element={<EditProduct/>} />
        <Route path='/favorite' element={<Favorite/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/search' element={<Search/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
