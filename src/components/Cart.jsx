import { motion } from "framer-motion"
const Cart = ({open, setOpen, cart}) => {
    console.log(cart);
    return(
        <>
        <motion.div
        initial={{translateX: 50}}
        animate={{translateX: 0}}
        exit={{translateX: 50}}
         className="bg-white min-h-screen w-64 -z-10">
            <span className="text-black text-2xl font-bold block" onClick={() => {setOpen(!open)}}><svg className="w-10 h-10 cursor-pointer ml-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg></span>
            {cart.map((item) => {
                return(
                    <h1 key={item.id}>{item.title}</h1>
                )
            })}
        </motion.div>
         
           
        </>
    )
}

export default Cart