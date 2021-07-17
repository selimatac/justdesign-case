import React from 'react'
import styled from 'styled-components';

const CustomLink = ({ text, fontSize = "18", icon = false, isAnimate = true, onClick, color = "#B2B2B2" }) => {

    return (
        <LinkWrapper text={text} fontSize={fontSize} isAnimate={isAnimate} onClick={onClick} color={color}>
            <Link>
                <LinkText>{text}</LinkText>
            </Link>
                {icon && <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height={fontSize} viewBox="0 0 24 24" width="24px" fill={color}><rect fill="none" height="24" width="24" /><path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z" /></svg>}
        </LinkWrapper>
    )
}

export default CustomLink;

const LinkWrapper = styled.div`
    font-size: ${props => props.fontSize};
    height: ${props => (parseInt(props.fontSize) + 1)}px;
    display: inline*flex;
    overflow-y: hidden;
    cursor: pointer;

    a {
        display: flex;
        flex-direction: column;
        color: ${props => props.color};
        transition: transform .2s;
        text-decoration: none;

        &::after {
            content:'${props => props.text}';
            color: #BF5628;
            text-decoration: underline;
        }

        span {
            line-height:${props => parseInt(props.fontSize)+1}px;
        }
    }

    &:hover {
        a {
            transform: translateY(-${props => props.isAnimate ? parseInt(props.fontSize) + 2 : '0'}px);
        }
    }
`;


const Link = styled.a`
`;
const LinkText = styled.span`
    text-decoration: underline;
    line-height: 1;
`;
