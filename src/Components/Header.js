import React, {Component} from "react"
import Todos from "./page/Todos"
import Main from "./Main"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import { BrowserRouter as Router, Link, Routes, Route} from "react-router-dom"

const GlobalStyle = createGlobalStyle`
// @import url('https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@900&family=Montserrat+Alternates:wght@500&family=Montserrat:ital,wght@1,600&family=Raleway:ital,wght@0,500;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Frank+Ruhl+Libre:wght@900&family=Montserrat+Alternates:wght@500&family=Montserrat:ital,wght@1,600&family=Raleway:ital,wght@0,500;1,400&display=swap');
*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   color: #FFFFFF;
   text-decoration: none;
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
  //  font-family:  'Raleway', sans-serif;
  font-family: 'Bebas Neue',Regular;
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
    summary{
      color:white;
  }
  details{
      display:flex;
      width: 15vw;
      flex-direction:column;
      justify-content:space-evenly;
      p{
        margin-top: 8px;
        &:hover{
          cursor: pointer;
        }
      }
  }
  div{
      color:white;
      position: absolute;
      z-index: 1;
    
  }
`
const Boxbutton = styled.div`
  width: 30%;
  button{
    float:right;
    background-color: #E71B27;
    padding: 0.5vw 0.1vh;
    width: 35%;
    border-radius: 5px;
    &:hover{
      cursor: pointer;
    }
`
const Box = styled.div`
   display: flex;
   align-items: center;
   width:50%;
   justify-content: space-around;
   justify-content: flex-end;
   img{
      width:3vw;
      &:hover{
        cursor: pointer;
      }
   }
   h2{
     color: white;
     width: 10vw;
   }
`

export default class App extends Component{
  state = {
    listfilms:[
      {
        Title: 'Animais Fant??sticos: Os Segredos de Dumbledore',
        poster:'https://br.web.img3.acsta.net/r_1280_720/pictures/21/12/20/18/43/0062398.jpg'
      },
      {
        Title: 'Animais Fant??sticos e Onde Habitam',
        poster:'https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/201906131051-uau-posters-filmes-fantastic-beasts-animais-fantasticos-e-onde-acha-los.jpg'
      },
      {
        Title: 'Vingadores Ultimato',
        poster:'https://img.elo7.com.br/product/original/259A7AA/big-poster-filme-vingadores-ultimato-lo001-tamanho-90x60-cm-poster-marvel.jpg'
      },
      {
        Title: 'N??s',
        poster:'https://img.elo7.com.br/product/original/269D300/big-poster-nos-filme-lo01-tamanho-90x60-cm-presente-geek.jpg'
      },
      {
        Title: 'Bumblebee',
        poster:'https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/201906131110-uau-posters-filmes-bumblebee.jpg'
      },
      {
        Title: 'Interestelar',
        poster:'https://ingresso-a.akamaihd.net/img/cinema/cartaz/4238-cartaz.jpg'
      },
      {
        Title: 'Uncharted',
        poster:'https://assets-prd.ignimgs.com/2022/01/13/uncharted-poster-full-1642086040683.jpg'
      },
      {
        Title: 'Simplesmente Acontece',
        poster:'https://i.pinimg.com/originals/2e/e7/d9/2ee7d90e56312ea62360f393eaa1716a.jpg'
      },
      {
        Title: 'Com Amor, Simon',
        poster:'http://www.intrinseca.com.br/blog/wp-content/uploads/2017/10/love-simon-poster.jpg'
      },
      {
        Title: 'Animais Fant??sticos: Os Crimes de Grindelwald',
        poster:'https://img.elo7.com.br/product/zoom/2650223/big-poster-filme-animais-fantasticos-grindelwald-l5-90x60-cm-presente-nerd.jpg'
      }
    ]
  }
  render(){
    return(
      <Router>
        <Container>
          <GlobalStyle/>
          <box1>
            <Title>TODOFLIX</Title>
            <Nav>
              <ul>
                <Link to="/"><li>In??cio</li></Link>
              </ul>
              <details>
                <summary>Categorias</summary>
                <div>
                  <Link to="Todos" ><p>Todos</p></Link>
                  <p>Favoritos</p>
                   <p>J?? vistos</p>
                   <p>Adicionados</p>
                   </div>
                   </details>
            </Nav>
          </box1>
          <Boxbutton>
            <button>Adicionar filme</button>
          </Boxbutton>
          <Box>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt='img of profile'/>
            <img src="https://pngimage.net/wp-content/uploads/2018/06/seta-branca-em-png-1-300x200.png" alt="seta para baixo"/>
         </Box>
         </Container>
         <Routes>
           <Route path="Todos" element={<Todos/>}/>
           <Route path="/" element={<Main/>}/>
         </Routes>
      </Router>


      
    )
  }
}