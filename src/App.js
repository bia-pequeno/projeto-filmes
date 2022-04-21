import React, {Component} from "react"
import styledComponents from "styled-components"
import { createGlobalStyle } from "styled-components"
import Header from "./Components/Header"
import Main from "./Components/Main"

const GlobalStyle = createGlobalStyle`
*{
     margin:0;
     padding:0;
     box-sizing:border-box;
     font-family:  'Raleway', sans-serif;
   }
   body{
     background-color: #000000;
    // background-color: #EFC7C2;
   }
`

export default class App extends Component{
  render(){
    return(
      <>
      <GlobalStyle/>
      <Header/>
      {/* <Main/> */}
      </>
    )
  }
}