import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setIndex } from '../actions/setIndex';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

const Button = styled(Link)`
    border: #8E8A83 1px solid;
    background-color: #2869A5;
    color: #FAF8F7;
    padding: 30px;
    position: relative;
    height: 125px;
    width: 120px;
    font-size: 18px;
    border-radius: 10px;
    &:hover {background-color: #85606A};
    cursor: pointer;
    text-decoration: none;
`

const RouterButton = (props) => {

    const onClick = () => {
        props.setIndex(0)
        console.log('is clicked')
    }

    return (
        <Button to={props.route} type='button' onClick={onClick}>
            {props.children}
        </Button>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setIndex: (i) => dispatch(setIndex(i))
    }
}

export default connect(null, mapDispatchToProps)(RouterButton)
