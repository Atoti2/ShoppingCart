import { Outlet, useParams } from "react-router-dom";
const Details = () => {
    const { id } = useParams(); 
    console.log(id);
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(json=>console.log(json))
    
    return(
        <>
            <h1>{id}</h1>
           
        </>
        
    )
}

export default Details