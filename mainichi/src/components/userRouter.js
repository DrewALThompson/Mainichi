import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
    border: #8E8A83 1px solid;
    background-color: #2869A5;
    color: #FAF8F7;
    padding: 30px;
    position: relative;
    height: 125px;
    width: 125px;
    font-size: 18px;
    border-radius: 10%;
    &:hover {background-color: #85606A};
`

const UserRouter = (props) => {

    return (
        <>
            <Link to='/user'>
                <Button  type='button'>
                    Take me to my page!
                </Button>
            </Link>
        </>
    )
}

export default UserRouter