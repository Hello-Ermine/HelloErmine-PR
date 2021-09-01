import styled from 'styled-components';

export const NavbarStyle = styled.ul`
    position: fixed;
    display: flex;
    justify-content: space-between;
    background: transparent;
    padding: 1em 1.5em;
    width: 100%;
    color: white;
    top: 0;

    img.nav-logo {
        width: 150px;
        opacity: ${(props) => props.show ? 1.0 : 0.0};
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
    }

    ul li a {
        color: white;
        text-decoration: none;
        transition: all .3s ease-out;
    }

    ul li a:hover {
        color: #FFD8BB;
    }

    ul li img {
        display: block;
        width: 79px;
        height: 32px;
    }
`;
