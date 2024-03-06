import { useState } from 'react'
import fetchData from '../api/getStoreItems.js'
import sortItems from '../api/sortItemsByCategory.js'
import { useEffect } from 'react'
import Card from '../components/Card.jsx'
const Shop = ({handleAddToCart}) => {
    const [items, setItems] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState([])
    
    useEffect(() => {
        fetchData(setItems, setError, setLoading)
    }, [])

    useEffect(() => {
        fetchData(setCategories, setError, setLoading, "categories")
    }, [])

    
    useEffect(() => {
        sortItems(setItems, setLoading, `category/${category}`)
    }, [category])
        


    return(
        <>
        {error && (
            <p>{error.message}</p>
        )}
        {loading && (
            <p className='text-center text-xl'>Loading...</p>
        )}
        <div className='flex flex-col sm:flex-row items-center justify-center gap-8 mb-10 -mt-10'>
            {categories.map((category) => {
                return(
                    <p className='first-letter:uppercase text-lg font-mono cursor-pointer text-slate-100' onClick={() => setCategory(category)} key={category}>{category}</p>
                )
            })}
        </div>
      
        <div className='flex flex-wrap justify-center gap-10'>
      
        {items.map((item) => {
                return(
                    <Card key={item.id} {...item} handleAdd={handleAddToCart}/>
                )
            })}
        </div>
         
       
        </>
    )
}

export default Shop