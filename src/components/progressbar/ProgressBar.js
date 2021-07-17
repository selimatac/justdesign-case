import React from 'react'
import styled from 'styled-components';

const ProgressBar = ({color = "black", complated = "1"}) => {
    return (
        <ProgressWrapper>
            <ProgressComplated color={color} complated={complated}/>
        </ProgressWrapper>
    )
}

export default ProgressBar;

const ProgressWrapper = styled.div`
    height: 5px;
    width:100%;
    border-radius:5px;
    background:#B2B2B2;
    overflow:hidden;
`;

const ProgressComplated = styled.div`
    width:${props => props.complated}%;
    height:100%;
    background-color:${props => props.color};
`;