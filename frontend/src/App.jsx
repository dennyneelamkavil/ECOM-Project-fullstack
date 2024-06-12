import React from 'react';
import { Button } from '@mui/material';
import MyNavbar from './components/MyNavbar';
import MyButton from './ui/MyButton';
import MyTable from './components/MyTable';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <div>
      <MyNavbar/>
      <LoginPage/>
      <MyTable/>
      <MyButton $primary> Hello World! </MyButton>
      <Button sx={{color: 'red', backgroundColor: 'black'}}>My Button</Button>
    </div>
  )
}

