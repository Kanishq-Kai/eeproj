import React, { createContext, useState } from 'react';
const GlobalContext = createContext();
const GlobalProvider = ({ children }) => {
    const [info, setInfo] = useState({
        username: "",
        email: "",
        plan: "",
        PAN: "",
        amount: 0,
        planDays: 180,
        nextAmountDays: 30
    });
    return (
        <GlobalContext.Provider value={{ info, setInfo }}>
            {children}
        </GlobalContext.Provider>
    );
};
export { GlobalContext, GlobalProvider };
