import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const Details = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json=>setProduct(json))
    }, [id])
   console.log(product);
   const navigate = useNavigate()
    return(
        <>
        <div className="card lg:card-side bg-white text-slate-900 m-10 shadow-xl">
            <figure><img className="rounded-md" src={product.image} alt={product.title}/></figure>
            <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p>{product.description}</p>
                <div className="card-actions justify-end">
                <button onClick={() => navigate(-1)} className="btn btn-primary">Go back</button>
                </div>
            </div>
            </div>
           
        </>
        
    )
}

export default Details