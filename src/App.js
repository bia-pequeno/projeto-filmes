import React, {Component} from "react"
import { createGlobalStyle } from "styled-components"
import Header from "./Components/Header"

const GlobalStyle = createGlobalStyle`
*{
     margin:0;
     padding:0;
     box-sizing:border-box;
     font-family:  'Raleway', sans-serif;
   }
   body{
     background-color: #000000;
     color: #FFFFFF;
  }
`

export default class App extends Component{
  
  render(){
    return(
      <>
      <GlobalStyle/>
      <Header/>
      </>
    )
  }
}