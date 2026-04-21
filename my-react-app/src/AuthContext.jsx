import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function obtenerUsuarioInicial() {
  const storedUser = localStorage.getItem("user");

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser);
  } catch {
    return null;
  }
}

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(obtenerUsuarioInicial);
  const isAdmin = user?.rol === "admin";

  const login = (newToken, usuario) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);

    if (usuario) {
      localStorage.setItem("user", JSON.stringify(usuario));
      setUser(usuario);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken("");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        isLoggedIn: Boolean(token),
        isAdmin,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }

  return context;
};
