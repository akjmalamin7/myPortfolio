import React, { createContext, useState } from 'react';
const Context = createContext();
const Provider = (props) => {
    const [menuActive, setMenuActive] = useState('__home')
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <Context.Provider value={{isModalOpen, setIsModalOpen, menuActive, setMenuActive}}>
            {props.children}
        </Context.Provider>
    );
};

export { Context, Provider };