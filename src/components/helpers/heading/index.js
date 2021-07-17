import React, { useRef } from 'react'
import styled from 'styled-components';
import HighlightIcon from '../../../assets/svg/highlight.svg';
const Heading = ({ text, highlightText, fontSize, isAnimate = true }) => {
    const titleRef = useRef();

    const handleSetTitle = (text) => {
        const wordArray = text.split(' ');
        return wordArray.map((x, index) =>
            (<span key={index} className={`${isAnimate ? 'animate__animated animate__bounceIn':''} ${(highlightText === x ? 'highlight' : '')}`}>{x}</span>)
        )
    }


    return (
        <Title ref={titleRef} fontSize={fontSize}>
            {handleSetTitle(text)}
        </Title>
    )
}

export default Heading;

const Title = styled.h1`
    display: flex;
    flex-wrap: wrap;

    span {
        color: #17365D;
        margin-right: .5rem;
        font-size: ${props => props.fontSize}px;

        &.highlight{
            position:relative;
            z-index:1;

            &:after {
                content:'';
                width:100%;
                height:100%;
                position: absolute;
                left:0;
                top:0;
                z-index:-1;
                background: url(${HighlightIcon}) no-repeat bottom left;
                background-size: 100%;
            }
        }
        &:last-child {
            margin-right: 0;
        }

            &:nth-child(1){ animation-delay: .1s}
            &:nth-child(2){ animation-delay: .2s}
            &:nth-child(3){ animation-delay: .3s}
            &:nth-child(4){ animation-delay: .4s}
            &:nth-child(5){ animation-delay: .5s}
            &:nth-child(6){ animation-delay: .6s}
            &:nth-child(7){ animation-delay: .7s}
            &:nth-child(8){ animation-delay: .8s}
    }
`;
