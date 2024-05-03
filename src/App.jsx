import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Pages from './pages/Pages';
import NotFoundPage from './pages/NotFoundPage.jsx'
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails';
import BlogDetails from './pages/BlogDetails';
import Cart from './pages/Cart';
import Login from './pages/Login';



const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/login' element={<Login/>}></Route>
    <Route
      element={
        <>
             <Header />
             <Outlet/>
             <Footer />
        </>
      }
      >
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/blog/:slug' element={<BlogDetails/>}></Route>
        <Route path='/pages' element={<Pages/>}></Route>
        <Route path='/shop/:slug' element={<ProductDetails/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App





