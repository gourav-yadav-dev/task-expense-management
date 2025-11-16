import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export function Header() {
    const [userToken, setUserToken] = useState('')
    const [alreadyLogin, setAlreadyLogin] = useState()
    useEffect(() => {
        let useToken = localStorage.getItem('token')
        if (useToken === null) {
            setUserToken("Profile")
            setAlreadyLogin(false)
        }
        else {
            let useName = localStorage.getItem('name')
            setUserToken(useName)
            setAlreadyLogin(true)
        }

    }, [])
    function handleLogout() {
        localStorage.removeItem('token')
        localStorage.removeItem('name')
        setAlreadyLogin(false)
    }



    return (
        <header className="  fixed top-0 left-0 w-full 
      bg-white shadow 
      flex justify-between items-center 
      px-4 py-3 
      z-50 ">
            <div className="fw-bold fs-4">
                Organify
            </div>

            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    {userToken}
                </button>

                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                    {alreadyLogin ? <div><li><button className="dropdown-item" href="#" onClick={handleLogout}>Logout</button></li>
                    </div>
                        : <div><li><Link className="dropdown-item" to="/Signup" >Signup</Link></li>
                            <li><Link className="dropdown-item" to="/Login">Login</Link></li></div>}

                </ul>
            </div>
        </header>
    );
}
