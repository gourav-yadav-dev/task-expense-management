export function Header() {
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
                    Profile
                </button>

                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                    <li><a className="dropdown-item" href="#">My Profile</a></li>
                    <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
            </div>
        </header>
    );
}
