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



    return (
        <header className="d-flex justify-content-between align-items-center p-3 shadow-sm bg-white">
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
                    {alreadyLogin ? <div><li><button className="dropdown-item" href="#">Logout</button></li>
                    </div>
                        : <div><li><Link className="dropdown-item" >Signup</Link></li>
                            <li><Link className="dropdown-item" >Login</Link></li></div>}

                </ul>
            </div>
        </header>
    );
}
