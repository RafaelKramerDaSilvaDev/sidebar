import { createGlobalStyle, css } from "styled-components";

const Reset = css`
  *,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,
  #root {
    height: 100vh;
    overflow-x: hidden;
    background: #f4f4f6;
  }

  body,
  button,
  select,
  input {
    font-family: "Inter", sans-serif !important;
  }

  select::placeholder,
  input::placeholder {
    font-family: "Inter", sans-serif !important;
  }

  input,
  button {
    outline: 0;
    border: 0;
  }

  button {
    cursor: pointer;
    background-color: transparent;
  }

  table {
    border-collapse: s;
    border-spacing: 0;
  }

  th,
  td {
    padding: 0;
    border: none;
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${Reset};
`;
