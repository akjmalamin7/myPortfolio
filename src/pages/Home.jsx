import React, { Fragment } from 'react'
import { useEffect } from 'react'
import { Text } from '../components/styled/typography'
import HomeBanner from './home/HomeBanner'

const Home = () => {
  useEffect(()=>{
    document.title = "Home"
  })
  return (
    <Fragment>
      <Text size="md" color="white" weight="medium">Home</Text>
      <HomeBanner/>
    </Fragment>
  )
}

export default Home