
import { createContext, useState, useContext } from "react";
const AuthContext = createContext(); 
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

    const login = (token) => {
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
    };
    const logout = () => {
        localStorage.removeItem('token'); 
        setIsLoggedIn(false);
    };
    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );

};
export const useAuth = () =>{
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe ser usado dentro de un AuthProvider");
       
    }
    return context;
};
/*Para saber si esta logeado
Para almacenar el token de autenticación
Para eliminar el token de autenticación */
/*Queremos que vaya verificando variables o algo asi 
Vamos a controlar el estado de si si esta logeado o no lo esta, vamos a controlar ese evento a traves de este archivo*/
