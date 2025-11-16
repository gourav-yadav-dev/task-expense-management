import { Link } from "react-router-dom";

export function MainNavigation() {
    return (
        <>
            <nav className="  fixed bottom-0 left-0 w-full h-14 bg-gray-200 
    flex items-center justify-around       
    lg:fixed lg:top-18 lg:left-0 lg:p-5 lg:gap-7   
    lg:w-52 lg:h-[calc(100vh-5rem)]
    lg:flex-col 
    lg:items-start lg:justify-start
    z-40">
                <Link to="/" className="font-bold text-black hover:!text-blue-600 text-decoration-none hover:underline!">Dashboard</Link>
                <Link to="/Task" className="font-bold text-black hover:text-blue-600! text-decoration-none hover:underline!"> Task</Link>
                <Link to="/Expensive" className="font-bold text-black hover:text-blue-600! text-decoration-none hover:underline!">Expensive</Link>
                <Link to="Setting" className="font-bold  text-black hover:text-blue-600! text-decoration-none hover:underline!">Setting</Link>
            </nav>
        </>
    )
}