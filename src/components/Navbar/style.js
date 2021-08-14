import styled from 'styled-components';

export const NavbarStyle = styled.ul`
    position: fixed;
    display: flex;
    background: transparent;
    padding: 2em 0;
    width: 100%;
    color: white;

    ul {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    ul li {
        margin: 0 2em;
        font-size: 24px;
        font-weight: 600;
    }

    ul li a {
        color: white;
        text-decoration: none;
        transition: all .3s ease-out;
    }

    ul li a:hover {
        color: #FFD8BB;
    }
`;
