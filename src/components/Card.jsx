import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { motion } from 'framer-motion'

const Card = ({id, image, price, title, handleAdd}) => {
    
    const [quantity, setQuantity] = useState(1)
    const [animating, setAnimating] = useState(false)
    const [position, setPosition] = useState({x: 0, y: 0})

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

    function startAnimate(){
        return(
        <>
            <motion.p
            initial={{left: `{${position.x}px`, top:`${position.y}px` }}
            animate={{
                top: 15, 
                right: 30,
                scale: 1.5,
                transitionEnd: {
                    display: "none",
                    top: 0,
                    left: 0,
                }
            }}
            transition={{type: "just", duration: 0.3}}
            className="text-3xl text-black font-bold inline fixed">{quantity}
            </motion.p>
            </>
        )
        
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
                    <h1 className="text-xl text-black">{title}</h1>
                    <p className="text-lg italic text-black">${price}</p>

                        <button 

                        onClick={((e) => {
                            handleAdd({id, title, price, quantity})
                            setAnimating(true)
                            setPosition({
                                x: e.clientX,
                                y: e.clientY
                            })
                            setTimeout(() => {
                                setAnimating(false)
                            }, 300)
                          
                        })} 
                        className="bg-black text-white p-5 mt-5 rounded-md hover:bg-black/80 transition-all">Add to cart</button>
                    
                        <div className="flex mt-5 gap-3 items-center">
                            <p className="text-xl text-white bg-black rounded-md hover:bg-black/80 cursor-pointer p-2 w-8 text-center" 
                            onClick={() => addToQuantity()}
                            >+</p>
                                {animating && (
                                <>
                                <motion.p
                                initial={{left: `{${position.x}px`, top:`${position.y}px` }}
                                animate={{
                                    top: 15, 
                                    right: 30,
                                    scale: 1.5,
                                    transitionEnd: {
                                        display: "none",
                                        top: 0,
                                        left: 0,
                                    }
                                }}
                                transition={{type: "just", duration: 0.3}}
                                className="text-3xl text-black font-bold inline fixed">{quantity}
                                </motion.p>
                                </>
                                )   
                                }
                                
                                <p className="text-xl text-black font-bold inline">{quantity}</p>

                            <p 
                            
                            className="text-xl text-white bg-black rounded-md hover:bg-black/80 cursor-pointer p-2 w-8 text-center"
                            onClick={() => decreaseQuantity()}
                            >-</p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Card