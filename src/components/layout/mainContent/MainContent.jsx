import React from 'react'
import styled from 'styled-components'

const MainContentWrapper = styled.div`
    width:100%
    margin-left:0;
    height:100vh;
    padding:20px;
    @media(min-width:1024px){
        width:calc(100% - 300px);
        margin-left:auto;
       
    }
`
const MainContent = ({ children }) => {
    return (
        <MainContentWrapper>{children}</MainContentWrapper>
    )
}

export default MainContent