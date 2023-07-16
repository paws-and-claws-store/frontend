import { css } from '@emotion/react';
import { theme } from 'styles/theme';

export const GlobalStyles = css`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;

    margin: 0;
    background: ${theme.colors.mainBackground};
    min-height: 100vh;

    font-style: normal;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
    line-height: 1;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
    margin: 0;
    padding: 0;
  }

  code {
    font-family: Releway, monospace;
  }
`;
