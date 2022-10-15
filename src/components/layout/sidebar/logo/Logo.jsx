import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import ProfileImg from '../profileImg/ProfileImg'

const LogoWrapper = styled.div`
    // background: #00000012;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
    & a{
        font-family: var(--logoFont);
        color: var(--white);
        font-size: 22px;
        letter-spacing: 2px;
        // background: #00000038;
        padding: 10px 20px;
        & span{
            color:var(--red)
        }
    }
`
const Logo = () => {
    return (
        <LogoWrapper>
            <ProfileImg/>
            <NavLink to="/">
                <span>
                    Akjm
                </span> Al-Amin</NavLink>
        </LogoWrapper >
    )
}

export default Logo