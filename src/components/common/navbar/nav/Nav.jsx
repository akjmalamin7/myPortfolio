import React, { Fragment } from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Context } from '../../../../context/Context'

const Item = styled.li`
    transition:all .3s;
    & :hover{
        color:var(--red);
    }
    &:hover a span svg path{
        fill:var(--red);
       
    }
`
const Nav = (props) => {
    const { title, path, icon, name} = props.menu
    const { menuActive, setMenuActive } = useContext(Context)
    const handleMenuActive = (name) => {
        // let nameSet =  localStorage.setItem('menuName', name)
        setMenuActive(name)
    }
    return (
        <Fragment>
            <Item onClick={()=>handleMenuActive(name)} className={menuActive === name? 'activeMenu':''}>
                <NavLink to={path}>
                    <span>{icon}</span>
                    <span>{title}</span>
                </NavLink>
            </Item>
        </Fragment>
    )
}

export default Nav