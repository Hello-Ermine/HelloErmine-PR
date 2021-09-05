import styled from 'styled-components';

export const NavbarStyle = styled.ul`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    padding: 1em 1.5em;
    width: 100%;
    color: white;
    top: 0;

    img.nav-logo {
        display: block;
        width: 136px;
        padding: 0 10px;
        transform: translateY(-14px);
        opacity: ${props => props.showLogo ? 1 : 0};
        transition: .8s;
    }

    /* .active {
        color: red;
    } */

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    ul li {
        margin: 0 2em;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
        padding: 1em 0;
    }

    ul li a {
        color: white;
        text-decoration: none;
        transition: all .3s ease-out;
    }

    @media (hover: hover) {
      ul li a:hover {
        color: #FFD8BB;
      }
    }

    ul li img {
        display: block;
        width: 79px;
        height: 32px;
        opacity: 0;
    }
`;
