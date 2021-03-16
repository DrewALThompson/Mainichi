import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Bubble = styled.div`
    border: 2px solid #8B8F94;
    position: absolute;
    left: auto;
    top: auto;
`

const NavButton = styled.button`

`

const NavBar = () => {

    return (
        <Bubble>
                <Link to ='/'>
                    <NavButton type='button'>
                        Home
                    </NavButton>
                </Link>
                <Link to ='/user'>
                    <NavButton type='button'>
                        My Page
                    </NavButton>
                </Link>
        </Bubble>
    )
}

export default NavBar