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
        transition: opacity .8s ease-out;
    }

    .nav-hamburger {
        cursor: pointer;
        display: none;
    }

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
        cursor: pointer;
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

    @media (max-width: 1080px) {
        flex-direction: row-reverse;
        padding: 2em;
        
        img.nav-logo {
            transform: translateY(0);
            z-index: -2;
        }

        .nav-hamburger {
            display: block;
        }

        ul {
            display: ${props => props.collapNav && 'flex'};
            animation: ${props => props.collapNav ? 'slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both' : 'slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'};
            position: absolute;
            background: #555B6E;
            width: 100%;
            top: 0;
            left: 0;
            flex-direction: column;
            z-index: -1;
        }
    }
`;
