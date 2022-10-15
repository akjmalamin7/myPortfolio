import React, { Fragment, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainContent from '../components/layout/mainContent/MainContent'
import Sidebar from '../components/layout/sidebar/Sidebar'
import { Container, ContentBodyBg } from '../components/styled/layout'
const Home = React.lazy(() => import("../pages/Home"))
const About = React.lazy(() => import("../pages/About"))
const Contact = React.lazy(() => import("../pages/Contact"))
const Portfolio = React.lazy(() => import("../pages/Portfolio"))
const Resume = React.lazy(() => import("../pages/Resume"))
const Skill = React.lazy(() => import("../pages/Skill"))

const Routing = () => {
    return (
        <Fragment>
            <Container>
                <div>
                    <Sidebar />
                </div>

                <MainContent>
                    <ContentBodyBg>
                        <Suspense>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/portfolio" element={<Portfolio />} />
                                <Route path="/skill" element={<Skill />} />
                                <Route path="/resume" element={<Resume />} />
                                <Route path="/contact" element={<Contact />} />
                            </Routes>
                        </Suspense>

                    </ContentBodyBg>
                </MainContent>
            </Container>
        </Fragment>
    )
}

export default Routing