import { useState } from 'react'
import fetchData from '../api/getStoreItems.js'
import { useEffect } from 'react'
import { useParams } from "react-router-dom";
import Card from '../components/Card.jsx'
const Shop = ({handleAddToCart}) => {
    const [items, setItems] = useState([])
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData(setItems, setError, setLoading)
    }, [])

    return(
        <>
        {error && (
            <p>A network error was encountered.</p>
        )}
        {loading && (
            <p className='text-center text-xl'>Loading...</p>
        )}
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