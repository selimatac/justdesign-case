import React from 'react'
import styled from 'styled-components';
import logo from '../../assets/svg/logo.svg';
import letter from '../../assets/svg/letter-icon.svg';
import NavBar from './navbar';

const Header = () => {
    const navs = [
        { text: 'why?', path: '/why'},
        { text: 'services', path: '/services'},
        { text: 'find jobs', path: '/'}
    ]
    return (
        <HeaderWrapper>
            <Logo src={logo} alt="Wofran" />
            <NavBar navs={navs}/>
            <MenuRight>
                <LetterIcon src={letter} />
                <span>Welcome, Joe</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#17365D"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87" /><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" /></svg>
            </MenuRight>
        </HeaderWrapper>
    )
}

export default Header;

const HeaderWrapper = styled.header`
    height: 73px;
    border: 1px solid #17365D;
    border-right: 0;
    display: flex;
    align-items: center;
    padding: 0 59px;
`;

const Logo = styled.img`
    width:127px;
    margin-right: 110px;
`;

const MenuRight = styled.button`
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: 0;
    cursor: pointer;

    span {
        margin-right: 7px;
        color: #17365D;
        font-size: 18px;
        font-weight: 500;
    }
`;

const LetterIcon = styled.img`
    width: 31px;
    margin-right: 15px;
`;