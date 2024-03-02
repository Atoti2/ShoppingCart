import { Link } from "react-router-dom"
const Home = () => {
    return(
        <>
        <div>
            <Link to="shop" className="text-5xl font-mono text-slate-100 flex bg-purple-500 p-3 rounded-md w-fit m-auto"><span className="text-yellow-400 mr-1">SHOP</span> <span className="text-pink-400">NOW</span></Link>

        </div>
        </>
    )
}

export default Home