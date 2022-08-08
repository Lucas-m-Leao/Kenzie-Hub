import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    color: var(--grey);
}
:root{
    --grey:#F8F9FA;
    --grey2:#868E96;
    --black:#000000;
    --lightGray:#212529;
    --grayInput:#343B41;
    --Pink:#FF577F;
}
body{
    background-color: var(--black);
}
h1{
    font-family: 'Inter', sans-serif;
    font-weight: 700;
}
h2{font-family: 'Inter', sans-serif;
    font-weight: 600;
}
button{
    cursor: pointer;

}
li{
    list-style: none;
}
`