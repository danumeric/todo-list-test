<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap");
@font-face {
  font-family: "Vela Sans";
  src: local("Vela Sans"),
    url("~@/assets/fonts/VelaSans-Regular.woff2") format("woff2"),
    url("~@/assets/fonts/VelaSans-Regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: "AGAvantGardeCyr";
  src: local("AGAvantGardeCyr"),
    url("~@/assets/fonts/AGAvantGardeCyr.woff2") format("woff2"),
    url("~@/assets/fonts/AGAvantGardeCyr.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}
* {
  padding: 0px;
  margin: 0px;
  border: 0px;
}
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
:focus,
:active {
  outline: none;
}
a:focus,
a:active {
  outline: none;
}
aside,
nav,
footer,
header,
section {
  display: block;
}

html,
body {
}
body {
  line-height: 1;
  font-family: "Vela Sans", sans-serif;
  text-rendering: optimizeLegibility;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
input,
button,
textarea {
  font-size: inherit;
}
input::-ms-clear {
  display: none;
}
button {
  cursor: pointer;
  background-color: inherit;
}
button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
a,
a:visited {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
ul li {
  list-style: none;
}
img {
  vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}
</style>
