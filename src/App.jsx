import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Pages from './pages/Pages';
import NotFoundPage from './pages/NotFoundPage.jsx'
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetails from './pages/ProductDetails';
import BlogDetails from './pages/BlogDetails';



const App = () => {
  return (
    <BrowserRouter>
   <Header />
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/blog/:slug' element={<BlogDetails/>}></Route>
        <Route path='/pages' element={<Pages/>}></Route>
        <Route path='/shop/:slug' element={<ProductDetails/>}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App





