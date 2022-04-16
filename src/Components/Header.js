import React, {Component} from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@900&family=Montserrat+Alternates:wght@500&family=Montserrat:ital,wght@1,600&family=Raleway:ital,wght@0,500;1,400&display=swap');
*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   color: #FFFFFF;
  }
`
const Container = styled.div`
   display: flex;
   margin: 10px 0px 0px -5px;
   align-items: center;
   width: 100%;
   justify-content: space-between;
   box1{
     display:flex;
     width:45%;
     justify-content: space-evenly;
   }
`
const Title = styled.h1`
   color: #E71B27;
   font-family:  'Raleway', sans-serif;
   &:hover{
    cursor: pointer;
  }
`
const Nav = styled.nav`
   width: 48%;
   display: flex; 
   align-items: center;
   ul{
      width: 100%;
      display: flex;
      justify-content: space-evenly;
     }
     li{
      color: #FFFFFF;
      display: flex;
      text-align:center;
      &:hover{
        cursor: pointer;
      }
    }
    select{
      background-color: #000000;
      border: none;
    }
`
const Box = styled.div`
   display: flex;
   align-items: center;
   width:50%;
   justify-content: space-around;
   
   img{
      width:3vw;
      &:hover{
        cursor: pointer;
      }
   }
   button{
     background-color: #E71B27;
     padding: 0.5vw 0.1vh;
     width: 20%;
     border-radius: 5px;
     &:hover{
       cursor: pointer;
     }
   }
   input{
     background: #2C2C2C;
     border: solid 1px rgba(255,255,255,0.85);
     border-radius: 4px;
     width: 55%;
     height:40px;
     padding: 7px 14px 7px 40px;
   }
`

export default class App extends Component{
  render(){
    return(
      <Container>
      <GlobalStyle/>
      <box1>
        <Title>TODOFLIX</Title>
        <Nav>
          <ul>
            <li>Início</li>
            {/* <li>Categorias</li> */}
          </ul>
          <select name="Categorias" id="Categorias">
          <option value="Categorias">Categorias</option>
            <option value="Todos">Todos</option>
            <option value="Favoritos">Favoritos</option>
            <option value="Já vistos">Já vistos</option>
            <option value="Adicionados">Adicionados</option>
            </select>
         </Nav>
      </box1>
           <Box>
              <button>Adicionar filme</button>
              <input type="text" placeholder=" pesquisar"/>
              <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt='img of profile'/>
              <img src="https://pngimage.net/wp-content/uploads/2018/06/seta-branca-em-png-1-300x200.png" alt="seta para baixo"/>
         </Box>
      </Container>
    )
  }
}