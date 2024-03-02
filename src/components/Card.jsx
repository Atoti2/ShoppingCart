import { useState } from "react"
import { Link } from "react-router-dom"

const Card = ({category, description, id, image, price, title, handleAdd}) => {
    const [quantity, setQuantity] = useState(1)
    function addToQuantity(){
        if(quantity >= 1){
            setQuantity(quantity + 1)
        }
    }
    function decreaseQuantity(){
        if(quantity != 1){
            setQuantity(quantity - 1)
        }
    }
    return(
        <>
            <div className="rounded-md w-96 mb-20 shadow-xl bg-white justify-between">
                <Link to={id.toString()} >
                <figure>
                    <img src={image} alt={title} className="w-full rounded-md h-96"/>
                </figure>
                </Link>
                
                <div className="p-5">
                    <h1 className="text-xl text-black ">{title}</h1>
                    <p className="text-lg italic text-black">${price}</p>

                        <button onClick={() => handleAdd({id, title, price, quantity})}
                        className="bg-black text-white p-5 mt-5 rounded-md hover:bg-black/80 transition-all">Add to cart</button>
                        <p className="text-xl text-black font-bold inline ml-5">{quantity}</p>

                        <div className="flex mt-5 gap-3">
                            <p className="text-xl text-white bg-black rounded-md hover:bg-black/80 cursor-pointer p-2 w-8 text-center" 
                            onClick={() => addToQuantity()}
                            >+</p>
                            <p className="text-xl text-white bg-black rounded-md hover:bg-black/80 cursor-pointer p-2 w-8 text-center"
                            onClick={() => decreaseQuantity()}
                            >-</p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Card