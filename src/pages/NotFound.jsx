import { Link } from "react-router-dom"

const NotFound = () => {
    return(
        <>
        <div className="text-center text-yellow-400 gap-10 flex flex-col">
            <h1 className="text-6xl ">Page not found!</h1>
            <Link className="p-2 bg-purple-400 w-fit m-auto rounded-md text-slate-900 font-bold" to="/">Go to home page!</Link>
        </div>
        </>
    )
}

export default NotFound