
import React,{useState,useEffect} from 'react';
import LoginForm from './LoginForm';
import NavBar from './NavBar';
import './App.css';

function App() {
  const [userName,setuserName]= useState("");
  const [userPass,setUserPass]=useState("");
  const [userInfo,setUserInfo]=useState({});

  const onChangeUserName=(e)=>{
      setuserName(e.target.value);
  }

  const onChangeUserPass=(e)=>{
    setUserPass(e.target.value)
  }
  const resetValue= ()=>{
   setuserName("");
   setUserPass("");
  }

  

// Displays values as typed
  console.log(userName)
  console.log(userPass);
  console.log(userInfo);
  
 
 

  useEffect(()=>{
    if(userName && userPass){
      setUserInfo({userName,userPass});
      
    }

  },[userPass,userName])
  return (
    <div className="App">
      
      <NavBar/>
      <h3>Login</h3>
      <LoginForm onChangeUserName={onChangeUserName} onChangeUserPassword={onChangeUserPass} resetValue={resetValue}/>
      <h3>Username: {userInfo.userName}</h3>
      <h3>Password: {userInfo.userPass}</h3>
      
    </div>
  );
}

export default App;
