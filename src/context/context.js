import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  const [chn, setChn]= useState(false)

  const navigate = useNavigate()

  useEffect(() =>{
    fetchUser()
  }, [chn])

  const fetchUser = () =>{
    if(document.cookie){
        navigate('/')
    } else{
        navigate('/login')
    }
  } 

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        user,
        setUser,
        chn,
        setChn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserState = () => {
  return useContext(UserContext);
};
