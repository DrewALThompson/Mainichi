import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavButton = styled.button`

`


const WordRouter = () => {

    return (
        <>
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
        </>
    )
}

export default WordRouter

// const WordButton = styled.button`
//     border: #8E8A83 1px solid;
//     background-color: #2869A5;
//     color: #FAF8F7;
//     padding: 30px;
//     position: relative;
//     height: 125px;
//     width: 125px;
//     font-size: 18px;
//     border-radius: 10%;
//     &:hover {background-color: #85606A};
// `

// const Word1Button = styled(WordButton)`
//     top: -10px;
//     left: -10px;
// `

// const Word2Button = styled(WordButton)`
//     top: -10px;
//     left: 45px;
// `

// const Word3Button = styled(WordButton)`
//     top: -10px;
//     left: 90px;
// `

// const WordAllButton = styled(WordButton)`
//     top: -10px;
//     left: 135px;
// `

// const WordMyButton = styled(WordButton)`
//     top: -20px;
//     left: 190px;
// `

// const Border = styled.div`
//     border: #8E8A83 1px solid;
//     position: absolute;
//     top: 40%;
//     left: 20%;
//     height: 100px;
//     width: 800px;
//     background-color: #E2D7EC;
// `

// const Header = styled.p`
//     display: flex;
//     justify-content: center;
//     font-size: 30px;
//     color: #FAF8F7;
// `
// const HeaderEn = styled(Header)``

// const HeaderJp = styled(Header)``
