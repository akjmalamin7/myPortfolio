import React, { Fragment } from 'react'

const Social = (props) => {
    const {icon, path} = props.socialItem
  return (
    <Fragment>
        {
            <li>
                <a href={path} target="_blank" rel="noreferrer">{icon}</a>
            </li>
        }
    </Fragment>
  )
}

export default Social