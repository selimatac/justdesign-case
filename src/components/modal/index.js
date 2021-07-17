import React, { useRef, useEffect } from 'react'
import styled from 'styled-components';
import Heading from '../helpers/heading';
import CustomLink from '../helpers/link';

const CustomModalDialog = ({ title, hasOpen, setHasOpen, handleConfirm, children}) => {
    const node = useRef();

    const handleOverlayClick = (e) => {
        if (node.current === e.target) {
            setHasOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleOverlayClick);
        return () => {
            document.removeEventListener("mousedown", handleOverlayClick);
        };
    });

    return (
        <>
            {hasOpen &&
                <ModalWrapper ref={node}>
                <ModalContainer className="animate__animated animate__bounceInUp animate__faster">
                    <ModalTitle>
                        <Heading text={title} fontSize="45" highlightText={title?.split(' ').reverse()[0]} isAnimate={false} />
                        <svg onClick={() => setHasOpen(false)} xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 0 27 27" width="27px" fill="#17365D"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
                    </ModalTitle>
                    <ModalBody>
                        {children}
                    </ModalBody>
                    <ModalFooter>
                        <CustomLink fontSize="27px" color="#17365D" onClick={handleConfirm} isAnimate={false} text="cancel." />
                        <CustomLink fontSize="27px" color="#17365D" onClick={() => setHasOpen(false)} text="done." isAnimate={false} icon={true} />
                    </ModalFooter>
                </ModalContainer>
            </ModalWrapper>}
        </>
    )
}

export default CustomModalDialog;

const ModalWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
`;

const ModalContainer = styled.div`
    width: 90vw;
    height:90vh;
    background: #FFF8F5;
    margin:1rem;
    padding: 2rem;
    z-index: 20;
    flex:1 1 auto;
    display:flex;
    flex-direction:column;
`;

const ModalTitle = styled.div`
    font-weight: bold;
    font-size: 1.5rem;
    text-align:center;
    margin:0;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border:1px solid #17365D;
    padding:1rem;

    > h1{
        margin:0 !important;
    }
`;

const ModalBody = styled.div`
    flex:1;
    overflow: auto;
    border:1px solid #17365D;
    border-top:0;
`;

const ModalFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border:1px solid #17365D;
    border-top:0;
    padding:1rem;
`;