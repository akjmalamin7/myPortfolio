import React, { Fragment } from 'react'
import styled from 'styled-components'
import Img from "../../../../assets/images/profileImage/Alamin00.png"

const ProfileImgWrapper = styled.div`
    height: 95px;
    width: 95px;
    border-radius: 50%;
    border: 5px solid #ffe4e41c;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    & img{
        width:100%;
    }
`
const ProfileImg = () => {
  return (
    <Fragment>
        <ProfileImgWrapper>
            <img src={Img} alt="Akjm Alamin"/>
        </ProfileImgWrapper>
    </Fragment>
  )
}

export default ProfileImg