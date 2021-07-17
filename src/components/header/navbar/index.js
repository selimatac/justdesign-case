import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';

const NavBar = ({ navs = [] }) => {
    let {pathname} = useLocation();

    const [activeItem, setActiveItem] = useState('');

    useEffect(() => {
        setActiveItem(pathname)
    }, [pathname])
    return (
        <Nav>
            { navs.map((item, index) => (
                    < Link key={index} to={item.path} className={activeItem === item.path ? 'active' : ''}>{item.text}</ Link>
                )
            )}
        </Nav>
    )
}

export default NavBar;


const Nav = styled.nav`
    display: flex;
    align-items: center;
    height: 100%;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #17365D;
        font-size: 18px;
        font-weight: 500;
        margin-right: 64px;
        text-decoration: none;
        position: relative;
        height: 100%;
        overflow: hidden;
        min-width: fit-content;
        transform: scaleX(1);

        &.active{
            &:after {
                transform: translateX(0);
            }
        }

        &:after,
        &:before {
            content: '';
            position: absolute;
            bottom: 0;
            height: 5px;
            width:100%;
            background-color: #17365D;
            opacity: 1;
        }

        &:before {
            transform: translateX(-102%);
        }

        &:after {
            transform: translateX(102%);
            transition: transform .8s cubic-bezier(.23, 1, .32, 1);
        }

        &:hover {
            &:before,
            &:after {
                transform: translateX(0);
            }

            &:before {
                transition: transform .8s cubic-bezier(.23,1,.32,1);
                opacity: 1;
            }

            &:after {
                transition: none;
                opacity: 0;
            }
        }

        &:last-child {
            margin-right:0;
        }
    }
`;
