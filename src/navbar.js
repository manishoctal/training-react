import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <ul>
            <li><Link to="/">Content</Link></li>
            <li><Link to="/footer">Footer</Link></li>
            <li><Link to="/header">Header</Link></li>
          </ul>
    )
}

export default NavBar;