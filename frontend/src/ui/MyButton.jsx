import styled, { css } from "styled-components";
export const MyButton = styled.button`
background-color: blue;
color: white;
border: none;
font-size: 16px;
padding: 10px 20px;
border-radius: 5px;
cursor: pointer;
${props => props.primary && css` background-color: green;` }
${props => props.color ? `background-color: ${props.color}` : ''}
${props => props.fontSize ? `font-size: ${props.fontSize}` : ''}

`;

