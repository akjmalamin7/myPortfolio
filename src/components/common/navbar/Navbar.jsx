import React, { Fragment } from 'react'
import { menus } from "../../../assets/data/menu"
import Nav from './nav/Nav'
import styled from 'styled-components'

const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 10px;
    & li{
        & a{
            color:var(--white);
            display:flex;
            gap:15px;
            padding: 10px 25px;
            border-bottom: 1px solid rgb(9 214 108 / 18%);
            font-size: 12px;
            align-items: center;
            font-family: var(--themeFont);
            text-transform:uppercase;
            font-weight:500;
            & span{
                display:flex;
                & svg{
                    width:20px;
                    height:20px;
                }
            }
        }
    }
}
`
const Navbar = () => {
    return (
        <Fragment>
            <Menu> {
                menus.map((menu, index) => {
                    return (
                        <Nav key={index} menu={menu} index={index} />
                    )
                })
            }
            </Menu>
        </Fragment>
    )
}

export default Navbar