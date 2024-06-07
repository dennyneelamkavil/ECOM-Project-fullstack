import React from 'react';
import { Button } from '@mui/material';
import { MyButton } from './ui/MyButton';
import MyNavbar from './components/MyNavbar';

export default function App() {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <MyButton>My Button</MyButton>
      <Button>My Button</Button>
    </div>
  )
}

