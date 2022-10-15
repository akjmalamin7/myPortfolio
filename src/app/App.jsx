import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from '../context/Context'
import Routing from './Routing'
import "../assets/styles/style.css"

const App = () => {
    return (
        <Provider>
            <BrowserRouter>
                <Routing />
            </BrowserRouter>
        </Provider>
    )
}

export default App