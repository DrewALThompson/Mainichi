import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Bubble = styled.div`
    border: 2px solid #8B8F94;
    position: absolute;
    left: 10px;
    top: 10px;
    cursor: pointer;
`

const NavLink = styled(Link)`
    cursor: pointer;
    text-decoration: none;
`


const NavBar = () => {


    return (
        <Bubble>
                <button>
                    <NavLink to='/study'>
                        Study
                    </NavLink>
                </button>
                <button>
                    <NavLink to ='/user' >
                        My Page
                    </NavLink>
                </button>
        </Bubble>
    )
}

export default NavBar