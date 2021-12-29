import React from 'react';
import './App.css';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import './firebase/config'
import { Route, Routes } from 'react-router-dom';
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
          <Route path="/signup" element={ <Signup /> } />
          <Route path="/profile/:id" element={ <Profile /> } />
        </Routes>
      </div>
    </div>
    </UserProvider>
    </>
  );
}

export default App;
