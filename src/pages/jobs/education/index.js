import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components';
import CustomLink from '../../../components/helpers/link';

const EducationCardItem = ({ data, handleClickEdit, handleClickDelete, selectedEducation }) => {
    const cardActionNode = useRef();
    const [isActive, setIsActive] = useState('');

    const handleOutSideClick = (e) => {
        if (cardActionNode.current.contains(e.target)) {
            return;
        }
        setIsActive(false);
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleOutSideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutSideClick);
        };
    });

    return (
        <CardWrapper>
            <CardTitle>
                {data.degreeName}
                {data.id === selectedEducation && <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#17365D"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z"/></svg>}
            </CardTitle>
            <CardTDescription>
                {`${data.schoolName} | ${data.country},${data.province}, ${data.startYear}-${data.studyHere ? 'Current' : data.completionYear}`}
            </CardTDescription>
            <CardActions ref={cardActionNode}>
                <ActionsWrapper className={isActive ? 'active' : ''}>
                    <CustomLink text="edit" fontSize="18px" onClick={handleClickEdit} />
                    <CustomLink text="delete" fontSize="18px" onClick={handleClickDelete} />
                </ActionsWrapper>
                <CardAction onClick={() => setIsActive(!isActive)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9.876" height="39.505" fill="#B2B2B2" viewBox="0 0 9.876 39.505"><path className="a" d="M48.023,48.023a4.7,4.7,0,0,0,1.457-3.481,4.941,4.941,0,1,0-4.938,4.938,4.7,4.7,0,0,0,3.481-1.457m0-14.814a4.7,4.7,0,0,0,1.457-3.481,4.941,4.941,0,1,0-4.938,4.938,4.7,4.7,0,0,0,3.481-1.457m1.457-18.3a4.938,4.938,0,1,0-9.876,0,4.931,4.931,0,0,0,4.938,4.938,4.7,4.7,0,0,0,3.481-1.457A4.7,4.7,0,0,0,49.48,14.913Z" transform="translate(-39.603 -9.975)" /></svg>
                </CardAction>
            </CardActions>
        </CardWrapper>
    )
}

export default EducationCardItem;

const CardWrapper = styled.div`
    display:flex;
    flex-direction:column;
    border: 1px solid #17365D;
    padding: 1rem;
`;
const CardTitle = styled.div`
    color:#17365D;
    font-size:18px;
    text-decoration:underline;
    margin-bottom:1rem;
    cursor:pointer;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;
const CardTDescription = styled.div`
    color:#B2B2B2;
    font-size:1rem;
    flex:1;
`;
const CardActions = styled.div`
    display:flex;
    justify-content: flex-end;
`;
const CardAction = styled.button`
    border:none;
    outline:none;
    background:none;
    cursor:pointer;
`;
const ActionsWrapper = styled.div`
    display:flex;
    align-items:flex-end;
    overflow:hidden;
    width:0;
    opacity:0;
    transition: .3s;

    &.active{
        width:100%;
       opacity:1;
    }

    > * {
        margin-right:2rem;
    }
`;