import React, { Fragment } from 'react'
import styled from 'styled-components';

const Home = (props) => {
    return (
        <Fragment>
            <HomeWrapper>
                <ContentWrapper>
                    {props.children}
                </ContentWrapper>
                <FooterWrapper>
                    &copy; wofran HR 2021. all rights reserved.
                </FooterWrapper>
            </HomeWrapper>
        </Fragment>
    )
}

export default Home

const HomeWrapper = styled.main`
    width: 100%;
    border: 1px solid #17365D;
    border-right: 0;
    border-top: 0;
    height: calc(100vh - 130px);
    display: flex;
    flex-direction: column;
`;

const ContentWrapper = styled.div`
    flex: 1;
    padding: 50px 100px 50px 43vw ;
    overflow-x: auto;
`;
const FooterWrapper = styled.footer`
    width: 100%;
    height: 73px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #17365D;
    font-size: 14px;
    color: #17365D;
`;