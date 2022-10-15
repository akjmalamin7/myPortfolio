import React, { Fragment } from 'react'
import styled from 'styled-components'
import { socialMenu } from '../../../assets/data/menu'
import Social from './social/Social'
const Menu = styled.ul`
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
    & li{
        & a{
            color:var(--white);
            display:flex;
            gap:15px;
            & svg{
              width:15px;
              height:15px;
          }
        }
    }
}
`
const SocialNav = () => {
  return (
    <Fragment>
      <Menu>
        {
          socialMenu.map((socialItem, index) => {
            return (
              <Social key={index} socialItem={socialItem} />
            )
          })
        }
      </Menu>
    </Fragment>
  )
}

export default SocialNav