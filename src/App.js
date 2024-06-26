import React, { useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from "react-redux"
import "./App.css"
import Feed from './Feed'
import { login, logout, selectUser } from "./features/userSlice"
import Login from './Login'
import { auth } from './firebase';
import Widgets from './Widgets';

function App()
{
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
      auth.onAuthStateChanged(userAuth => {
        if (userAuth){
          //user logged in
          dispatch(
            login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL
          }))
        }
        else{
          //user logged out
          dispatch(logout());
        }
      })
  }, [])
  return (
    <div className="app">

    
      {!user ? (<Login />) : (
        <>
            <Header/>
            <div className="app-body">
              <Sidebar/>
              <Feed/>
              <Widgets/>
            </div>
          </>

      )}
    </div>
  );
}

export default App;
