import { Button } from 'antd';
import { useState } from 'react';
import './App.css';
import LoginForm from './Components/login'

function App() {

  const adminUser={
    username:"1605586",
    password:"Shubham1234#"
  }
  
  const [username, setUsername] = useState("")
  const [error, setError] = useState("");

  const login = details => {
    console.log(details)
    if(details.username === adminUser.username && details.password === adminUser.password)
    {
      console.log('Logged in')
      setUsername({
        username: details.username
      })
    }
    else
    {
      console.log('Dont Match')
    }
  }

  const logout = () => {
    console.log('Logout')
    setUsername("")
  }

  return (
    <div >
    {(username != "")?(
      <div>Welcome
      <Button onClick={logout}>Logout</Button>
      </div>):
    <LoginForm login={login} error={error}/>}
    </div>
  );
}

export default App;
