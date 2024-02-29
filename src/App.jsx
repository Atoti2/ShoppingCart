import RootLayout from "./layouts/RootLayout"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Shop from "./pages/Shop.jsx"
import NotFound from "./pages/NotFound.jsx"
import Details from "./components/Details.jsx"
import { useState } from "react"
import Cart from "./components/Cart.jsx"

function App() {
  const [cart, setCart] = useState([])
  const [open, setOpen] = useState(false)

  function handleAddToCart(newProduct) {
        let productsToAdd = []
        productsToAdd.push(newProduct)
        setCart([...cart, ...productsToAdd])
}

  return (
    <>
      <RootLayout open={open} setOpen={setOpen}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="shop" element={<Shop handleAddToCart={handleAddToCart}/>}/>
        <Route path="shop/:id" element={<Details/>}/> 
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      
      <div className="fixed right-0 top-0 rounded-md overflow-hidden min-h-screen">
        {open && <Cart open={open} setOpen={setOpen} cart={cart}/>}
      </div>
  
    </>
  )
}

export default App
