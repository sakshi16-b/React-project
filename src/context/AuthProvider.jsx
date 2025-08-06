import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)
    useEffect(() => {
         setLocalStorage()
        const { employees} = getLocalStorage();
        setUserData( employees);
    }, [])

    return (
        <AuthContext.Provider value={[userData,setUserData]}>
            {children}

        </AuthContext.Provider>

    )
}
