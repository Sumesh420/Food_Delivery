import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from "./pages/Home/Home.jsx"
import Cart from "./pages/Cart/Cart.jsx"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx"
import Footer from './components/Footer/Footer.jsx'
import Search from './pages/Search/SearchResult.jsx'

function App() {
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="placeorder" element={<PlaceOrder/>}/>
      <Route path="/search/:searchInput" element={<Search/>}/>
    </Route>
  )
)
  return (
    <>
    <div className="app">
    <RouterProvider router={router}/>
    </div>
    <Footer/>
    </>
  )
}

export default App
