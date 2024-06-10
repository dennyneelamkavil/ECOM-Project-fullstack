import React from 'react';
import { Button } from '@mui/material';
import MyNavbar from './components/MyNavbar';
import MyButton from './ui/MyButton';

export default function App() {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <MyButton $primary> Hello World! </MyButton>
      <Button sx={{color: 'red', backgroundColor: 'black'}}>My Button</Button>
    </div>
  )
}

