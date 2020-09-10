import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  div {
    /* background-color: red; */
  }

  body {
    font: 14px sans-serif;
    color: #333;
  }
`;

const Button = styled.button.attrs({
  type: 'button'
})`
  width: 120px;
  height: 32px;
  border: 1px solid #FFF;
  color: #FFF;
  border-radius: 4px;
`;

export const ActionButton = styled(Button)`
  background-color: ${ ({ primary }) => primary ? '#3a86ff' : '#e9ecrf' };
`;

export const CancelButton = styled(Button)`
  background-color: #000;
`

/* const InputPassword = styled.input.attrs({
  type: 'password',
  maxLength: 20
})`


`; */

export default Button;