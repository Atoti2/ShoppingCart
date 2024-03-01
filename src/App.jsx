import RootLayout from "./layouts/RootLayout"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Shop from "./pages/Shop.jsx"
import NotFound from "./pages/NotFound.jsx"
import Details from "./components/Details.jsx"
import { useState } from "react"
import Cart from "./components/Cart.jsx"
import { AnimatePresence } from "framer-motion"

function App() {
  const [cart, setCart] = useState([])
  const [open, setOpen] = useState(false)

  function handleAddToCart(newProduct) {
    const index = cart.findIndex((item) => item.id === newProduct.id);
    if (index === -1) {
        setCart([...cart, newProduct]);

    } else {
        const updatedCart = [...cart];
        updatedCart[index] = {
            ...updatedCart[index],
            quantity: updatedCart[index].quantity + newProduct.quantity
        };
        setCart(updatedCart);
    }
}

  return (
    <>
    <div onClick={() => setOpen(!open)} className={open ? "fixed w-full h-full top-0 left-0 right-0 bottom-0 z-10 bg-black/30 cursor-pointer " : ""}></div>
    <RootLayout open={open} setOpen={setOpen}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="shop" element={<Shop handleAddToCart={handleAddToCart}/>}/>
        <Route path="shop/:id" element={<Details/>}/> 
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    
      
      <div className="fixed right-0 top-0  z-20 rounded-md overflow-hidden min-h-screen">
      <AnimatePresence>
        {open && 
          <Cart
           open={open} setOpen={setOpen} cart={cart} 
        />}
      </AnimatePresence>
      </div>
  
    </>
  )
}

export default App
