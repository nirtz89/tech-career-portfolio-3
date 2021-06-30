import styled from 'styled-components'

const HeaderLink = styled.div`
    width: 100%;
    height: 100%;   
    display:flex; 
    background:white;
    flex-direction:row;
    justify-content:space-around;
    img{
        border: 2px solid black;
        border-radius:20%
    }
`;


function Header() {
    return (

        <HeaderLink>
            <p><a href="https://tech-career-alternative.firebaseapp.com/">

                <img src="img/techLogo.jpg" width="100" height="80px" />
            </a></p>
            <p style={{marginTop:"45px"}}>my email: czauda@gmail.com</p>
        </HeaderLink>


    )
}
export default Header;