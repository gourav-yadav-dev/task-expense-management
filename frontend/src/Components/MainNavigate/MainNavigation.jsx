import { Link } from "react-router-dom";

export function MainNavigation() {
    return (
        <>
            <Link to="/">Dashboard</Link>
            <Link to="/Task">Task</Link>
            <Link to="/expensive">Expensive</Link>
            <Link to="setting">Setting</Link>
        </>
    )
}