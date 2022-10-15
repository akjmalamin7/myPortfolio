import React from 'react'
import styled from 'styled-components'
import Navbar from '../../common/navbar/Navbar'
import SocialNav from '../../common/socialNav/SocialNav'
import Logo from './logo/Logo'
const SidebarStyled = styled.div`
    width: 280px;
    height: 100vh;
    position: fixed;
    left: -100%;
    top: 0;
    background:#1e1d1e;
    border-right: 2px solid #2e2c2e;
    

    @media(min-width:1024px){
        left: 0;
        top:0;
        height: 90vh;
        margin-top:5vh;
        border-radius:5px;
    }

    @media(min-width:1320px){
        left: 3%;
    }
    @media(min-width:1600px){
        left: 10%;
    }
    @media(min-width:1700px){
        left: 12%;
    }
    @media(min-width:1800px){
        left: 14%;
    }
    @media(min-width:2000px){
         left: 17%;
     }

`
const LogoWrapper = styled.div`
    padding:30px;
    height: 230px;
`
const NavbarWrapper = styled.div`
    padding:30px;
    height:calc(90vh - 360px);
    width:300px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display:none;
      }
`
const SocialWrapper = styled.div`
    padding:30px;
    height: 130px;
    display: flex;
    align-items: center;
`
const Sidebar = () => {

    return (
        <SidebarStyled>
            <LogoWrapper>
                <Logo />
            </LogoWrapper>
            <NavbarWrapper>
                <Navbar />
            </NavbarWrapper>
            <SocialWrapper>
                <SocialNav />
            </SocialWrapper>
        </SidebarStyled>
    )
}

export default Sidebar