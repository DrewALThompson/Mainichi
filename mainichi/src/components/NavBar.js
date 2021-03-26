import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Bubble = styled.div`
    border: 2px solid #8B8F94;
    position: absolute;
    left: auto;
    top: auto;
    cursor: pointer;
`

const NavLink = styled(Link)`
    cursor: pointer;

`


const NavBar = () => {

    return (
        <Bubble>
                <NavLink to='/study'>
                        Study
                </NavLink>
                <NavLink to ='/user'>
                        My Page
                </NavLink>
        </Bubble>
    )
}

export default NavBar