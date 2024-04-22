import React, { useState,useEffect } from 'react'
import { AppContext } from './App_Context'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'



const App_State = (props) => {
  const Url ="http://localhost:3000/api";
  // const navigate = useNavigate()
  const [token, setToken] = useState("")
  const [receipe, setReceipe] = useState([])
  const [savedReceipe, setSavedReceipe] = useState([])
  const [user, setUser] = useState([])
  const [userId, setUserId] = useState("")
  const [userReceipe, setUserReceipe] = useState([])
const [isAuthenticated, setisAuthenticated] = useState(false)
const [reload, setReload] = useState(true)

  useEffect(() => {
        const fetchReceipe = async () =>{
      
      const api = await axios.get(`${Url}/`, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
    
      console.log(api.data.receipe)
      setReceipe(api.data.receipe)
    };

  fetchReceipe();
  getSavedReceipeById()
  profile()
  receipeByUser(userId);
}, [token,userId,reload]);

////for profile
useEffect(() => {
 if(token){
  localStorage.setItem("token",token)
 }
const tokenFromLocalStorage = localStorage.getItem("token",token)
if(tokenFromLocalStorage)
{
  setToken(tokenFromLocalStorage);
  setisAuthenticated(true)
}
}, [token,reload])


//  useEffect(() => {
//   //  login("vgdan@2512@gmail.com","123456")
//  }, [])
   
//register--------------------------------
const register = async(name,gmail,password)=>{

   const api = await axios.post(`${Url}/register`,
   {
    name,  
    gmail,
    password
    },{
      headers:{
        "Content-Type":"application/json"
      },
        withCredentials:true
      
    }
  );
    return api;
}
  //login------------------------------
  const login = async(gmail,password)=>{
    
    const api = await axios.post(`${Url}/login`,{
      gmail,password
    },{
      headers:{
        "Content-Type":"application/json"
      },
        withCredentials:true
      
    })
     setToken(api.data.token)
     setisAuthenticated(true)
    return api;
    // console.log("login data",api)
  }
 
  //AddReceipe Details----------------
const addReceipe = async(
  title,
  ist,
  ing1,
  ing2,
  ing3,
  ing4,
  qty1,
  qty2,
  qty3,
  qty4,
  imgUrl,
)=>{
   const api = await axios.post(`${Url}/add`,{
      title,
      ist,
      ing1,
      ing2,
      ing3,
      ing4,
      qty1,
      qty2,
      qty3,
      qty4,
      imgUrl
    },{
      headers:{
        "Content-Type":"application/json",
        Auth:token,
      },
        withCredentials:true
      
    })
    setReload(!reload)
    return api;
}

//receipe by id
const getReceipeById = async(id)=>{
  const api = await axios.get(`${Url}/${id}`,
    {
      headers:{
        "Content-Type":"application/json"
      },
        withCredentials:true
      
    })
    console.log(api);
    return api;
}

//save receipe by id
const savedReceipeById = async(id)=>{
    const api = await axios.post(`${Url}/${id}`,{},
    {
      headers:{
        "Content-Type":"application/json",
        Auth:token
      },
        withCredentials:true
      
    })
    console.log(api);
       setReload(!reload)
    return api;
}

//getSaved Receipe
const getSavedReceipeById = async()=>{
    const api = await axios.get(`${Url}/saved`,
    {
      headers:{
        "Content-Type":"application/json",

        
      },
        withCredentials:true
      
    })
    console.log("gettingSavedReceipe",api.data.receipe)
    setSavedReceipe(api.data.receipe)
    // return api;
}
///profile
const profile = async()=>{
     const api = await axios.get(`${Url}/user`,
    {
      headers:{
        "Content-Type":"application/json",
        Auth:token
        
      },
        withCredentials:true,
      
    });
    // console.log("this is user profile",api.data.user)
    setUserId(api.data.user._id)
    setUser(api.data.user)
    // setUser(api.data.user)
}


//get receipeby userid

const receipeByUser = async(id)=>{
        const api = await axios.get(`${Url}/user/${id}`,
    {
      headers:{
        "Content-Type":"application/json",
      },
        withCredentials:true
      
    })
    console.log("user receipe",api)
    setUserReceipe(api.data.receipe)

}

const logOut = ()=>{
  localStorage.removeItem("token",token)
  setToken("")
  setisAuthenticated(false)
     setReload(!reload) 

}

  return (
   <AppContext.Provider value={{
login,
register,
receipe,
addReceipe,
getReceipeById,
savedReceipeById,
savedReceipe,
userReceipe,
user,
logOut,
isAuthenticated,
 setisAuthenticated,
 reload,
  setReload




   }}>
{props.children}
   </AppContext.Provider>
  )
}

export default App_State;