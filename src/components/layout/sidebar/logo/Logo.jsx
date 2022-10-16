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
        font-family: var(--oswald);
        color: var(--white);
        font-size: 20px;
        letter-spacing: 1px;
        padding: 10px 20px;
        text-transform: uppercase;
        font-weight: 700;
        & span{
            color:var(--active)
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