import React from 'react'
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

const CustomProgressBar = ({ skill, title, ratio, color }) => {
    return (
        <ProgressWrapper>
            <SkillHeader>
                <SkillName>{skill}</SkillName>
                <SkillTitle>{title}</SkillTitle>
            </SkillHeader>
            <ProgressBar color={color} complated={ratio} />
        </ProgressWrapper>
    )
}

export default CustomProgressBar;

const ProgressWrapper = styled.div`
    margin-bottom:2rem;
`;

const SkillHeader = styled.div`
    display:flex;
    justify-content: space-between;
    margin-bottom:1rem;
`;

const SkillName = styled.div`
    color:#17365D;
    font-size: 18px;
`;

const SkillTitle = styled.div`
    color:#B2B2B2;
    font-size: 18px;
`;