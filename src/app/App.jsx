import './App.css';
import Home from '../pages/Home/Home';
import Mui from '../pages/MUI/Mui';
import MiniDrawer from '../pages/Drawer/Drawer';
import AxiosApi from '../pages/Axios/AxiosApi';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import { Route, Routes, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

function App() {

  const [login, setLogin] = useState(false);

  useEffect(() => {
    console.log(localStorage.getItem('iap-token'))
    if (localStorage.getItem('iap-token')) {
      setLogin(true);
    }
  }, [])

  return (
    <div>
      {login ?
        <MiniDrawer />
        :
        <Routes>
          <Route path='*' element={<Navigate to={'/login'} />} />
          <Route path='/login' element={<Login />} key={'login-page'} />
          <Route path='/register' element={<Register />} key={'register-page'} />
        </Routes>
      }
    </div>
  )

}

export default App
