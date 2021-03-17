import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled(Link)`
    border: #8E8A83 1px solid;
    background-color: #2869A5;
    color: #FAF8F7;
    padding: 30px;
    position: relative;
    height: 125px;
    max-width: 125px;
    font-size: 18px;
    border-radius: 10px;
    &:hover {background-color: #85606A};
    cursor: pointer;
    text-decoration: none;
`




const RouterButton = (props) => {

    return (
        <Button to={props.route} type='button'>
            {props.children}
        </Button>
    )
}

export default RouterButton
