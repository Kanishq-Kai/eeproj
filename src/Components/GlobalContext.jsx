import React, { createContext, useState } from 'react';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [info, setInfo] = useState({
        username: "",
        email: "",
        PAN: "",
        monthlyIncome: 0,
        monthlyPayment: 0,
        plan: "",
        receivableAmount: 0,
        Basic: 5, Premium: 10, Ultra: 12,
        date: "",
        end: ""
    });
    return (
        <GlobalContext.Provider value={{ info, setInfo }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalProvider };
