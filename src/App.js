import React from 'react';
import './App.css';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Login from './pages/Login';
import ProfileRedirect from './router/ProfileRedirect';
import './firebase/config'
import { Route, Routes, Navigate } from 'react-router-dom';
import { UserProvider } from './firebase/userProvider';
import Header from './Header';


function App() {
  // const navigate = useNavigate();

  // const logoutUser = async () => {
  //   await logout();
  //   navigate('/signup')
  // }

  // const { user } = useSession();

  return (
    <>
    <UserProvider> 
    <div className="app">
    <Header />
      <div className="ui grid container">
      
        <Routes>
          <Route exact path="/signup" element={ <Signup /> } />
          <Route path="/profile/:id" element={ <Profile /> } />
          <Route path="Login" element={ <Login /> } />
          <Route exact path='/' element={<ProfileRedirect/>} />
        </Routes>
      </div>
    </div>
    </UserProvider>
    </>
  );
}

export default App;
