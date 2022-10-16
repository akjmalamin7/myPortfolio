import React, { Fragment } from 'react'
import styled from 'styled-components'
import { socialMenu } from '../../../assets/data/menu'
import Social from './social/Social'
const Menu = styled.ul`
    display: flex;
    gap: 18px;
    flex-wrap: wrap;
    justify-content: center;
    & li{
        & a{
            color:var(--white);
            display:flex;
            gap:15px;
            width:28px;
            height:28px;
            border-radius:50%;
            background: #3c331c;
            align-items:center;
            justify-content:center;
            transition: all .3s ease-in-out;
            &:hover{
              background:var(--white);
              & path{
                fill:var(--active);
              }
            }
            
            & svg{
              width:15px;
              height:15px;
              & path{
                fill:var(--white);
                transition: all .3s ease-in-out;
            }
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