import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='nav-bubble'>
            <ul>
                <li><Link to ='/'>Home</Link></li>
                <li><Link to ='/user'>My Page</Link></li>
            </ul>
        </div>
    )
}

export default NavBar