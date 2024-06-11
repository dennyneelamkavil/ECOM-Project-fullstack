import React from 'react';
import { Button } from '@mui/material';
import MyNavbar from './components/MyNavbar';
import MyButton from './ui/MyButton';
import MyTable from './components/MyTable';

export default function App() {
  return (
    <div>
      <MyNavbar/>
      <MyTable/>
      <MyButton $primary> Hello World! </MyButton>
      <Button sx={{color: 'red', backgroundColor: 'black'}}>My Button</Button>
    </div>
  )
}

