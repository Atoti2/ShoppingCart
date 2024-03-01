import { motion } from "framer-motion"
const Cart = ({open, setOpen, cart}) => {
    const total = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    return(
        <>
        <motion.div
        initial={{translateX: 384}}
        animate={{translateX: 0}}
        exit={{translateX: 384}}
        transition={{type: "just"}}
         className="bg-white min-h-screen w-96 flex flex-col">
            <span className="text-black text-2xl font-bold block" onClick={() => {setOpen(!open)}}><svg className="w-10 h-10 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg></span>
            {cart.map((item) => {
                return(
                    <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    key={item.id} className="text-slate-900 m-5">
                        <h1 className="text-xl font-bold">{item.title}</h1>
                        <p className="text-lg italic">${item.price}</p>
                        <p>{item.quantity} pcs</p>
                    </motion.div>
                )
            })}
                <p className="text-xl mt-auto m-5 text-black">{total > 0 ? `Total: $${total}`  : ""}</p>
           
           
        </motion.div>
         
           
        </>
    )
}

export default Cart