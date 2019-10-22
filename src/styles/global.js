import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }

  body {
    /* Linhas adicionadas */
    /* background-image: -moz-linear-gradient(70deg, navy 35%, black);
    background-image: -webkit-linear-gradient(70deg, navy 35%, black);
    background-image: -o-linear-gradient(70deg, navy 35%, black);
    background-image: linear-gradient(70deg, navy 35%, black); */
    background-image: -moz-radial-gradient(left center, ellipse farthest-corner, black, navy, black);
    background-image: -webkit-radial-gradient(left center, ellipse farthest-corner, black, navy, black);
    background-image: -o-radial-gradient(left center, ellipse farthest-corner, black, navy, black);
    background-image: radial-gradient(left center, ellipse farthest-corner, black, navy, black);
    background-repeat: no-repeat;
    width: 100%;
    height: auto;
    font-size: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    /* até aqui, o resto é padrão do autor original */
    line-height: 1;
  }

  .bg {
    /* background-image: url('../images/fundoArcos.png'); */
    position: absolute;
    width: 100%
    height: auto;
  }

  /* img {
    display: block;
  	width: 100%;
  	height: auto;
  } */
`
export default GlobalStyles
