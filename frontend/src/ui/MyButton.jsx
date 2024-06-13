import  styled, { css } from 'styled-components';

const MyButton = styled.button`
/* background-color: red; */
color: white;
border-radius: 5px;
border: 1px solid black;
min-width: 200px;
padding: 10px;
font-size: large;


${props => props.$primary && css `
  background:maroon;
  color:white;
`}

${props => props.$secondary && css `
  background:white;
  color:black;
`}

${props => props.$red && css `
  background:red;
  color:white;
`}

${props => props.$green && css `
  background:green;
  color:white;
`}




`;


export default MyButton;





// Use it like this!

// <MyButton $primary> Hello World! </MyButton>
// <Button sx={{color: 'red', backgroundColor: 'black'}}>My Button</Button>