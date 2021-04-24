import { createGlobalStyle } from "styled-components";

import "@fontsource/rubik/400.css";
import "@fontsource/rubik/600.css";
import "@fontsource/rubik/700.css";
import "@fontsource/dm-mono/400.css";

import { color, font, breakpoint } from "./config";
import { hexToRGBA } from "./util";

export const GlobalStyle = createGlobalStyle`
  /* START OF CSS RESET */
  * {
    margin: 0;
    padding: 0;
    font-size: 1em;
    font-family: inherit;
    box-sizing: border-box;
  }
  html {
    font-size: ${font.size.base};
    min-height: 100vh;
  }
  /* END OF RESET */

  ::selection {
    color: ${color.background};
    background-color: #226699;
  }

  body {
    height: 100%;
    background-color: ${color.background};
    color: ${color.text};
    font-family: ${font.family.sans};
    font-weight: ${font.weight.normal};
  }

  h1 {font-size:${font.size.large}}
  h2 {font-size:1.5rem}
  h3 {font-size:1.2rem}

  h1, h2, h3 {
    margin-bottom: 0.5rem;
    font-weight: ${font.weight.bold};
    color: ${color.heading};
  }
  p {
    margin-bottom: 0.8rem;
    line-height: 1.3;
    text-align: left;
  }
  code {
    color: ${color.accent};
    font-family: ${font.family.mono};
    background-color: ${hexToRGBA(color.accent, 0.1)};
    border-radius: 5px;
    padding: 0.1em 0.5em;
  }

  code[class*="language-"],
  pre[class*="language-"] {
    font-family: "DM Mono", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
    font-size: 16px;
    border-radius: 5px;
    margin: 1em auto;
  }

  section {
    margin-bottom: 1em;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);

    ${breakpoint.md} {

    column-gap: 2em;
    }
  }
`;
