import React, { useState } from 'react'
import myContext from './store/storeContext'
import Home from './components/Home'
export default function App() {
  const [data,setData]=useState('home');
  function handleClick(){
    localStorage.setItem('username','rahul')
    localStorage.setItem('password','1234')

  }
  function fetchData(){
    setData(localStorage.getItem('username'))
  }
  function deleteData(){
    localStorage.clear();
  }
  function deletePassword(){
    localStorage.removeItem('password')
  }
  return (
    <div>
      <myContext.Provider value={{title:`i am ${data}`}}>
         <Home/>
      </myContext.Provider>
      <button onClick={handleClick}>save data</button>
      <button onClick={fetchData}>welcome user</button>
      <button onClick={deleteData}>delete all data</button>
      <button onClick={deletePassword}>delete password</button>
    </div>
  )
}
