import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h1 id="nav-headline">My products</h1>
            <div id="nav-links">
                <Link className='nav-link' to="/">Home</Link>
                <Link className='nav-link' to="/create">Add product</Link>
            </div>
        </nav>
    )
}

export default Navbar;