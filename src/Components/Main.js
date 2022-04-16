import React, {Component} from "react"
import styled from 'styled-components'
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        color:#FFFFFF;
    }
`

export default class App extends Component{
  state = {
    listMovies:[
      {
        Title: 'Animais Fantásticos: Os Segredos de Dumbledore',
        Overview:'Animais Fantásticos: Os Segredos de Dumbledore é a sequência das aventuras de Newt Scamander (Eddie Redmayne), um magizoologista que carrega em sua maleta uma coleção de fantásticos animais do mundo da magia descoberta em suas viagens. Dessa vez, ele é convocado por Albus Dumbledore (Jude Law) na luta contra o vilão Grindelwald (Mads Mikkelsen). A trama mostra por que o célebre bruxo de Hogwarts, que sabe da busca por controle de Grindelwald e é incapaz de detê-lo sozinho, confia no magizoologista para liderar uma equipe de bruxos, bruxas e um bravo padeiro trouxa em uma missão perigosa. Ao longo do enredo, eles encontrarão velhos e novos animais fantásticos, além de enfrentar a crescente legião de seguidores do vilão. Mas o que o grupo de Scamander não sabe é que Grindelwald colocará o Mundo Mágico em uma luta contra o mundo dos trouxas. Enquanto o universo da magia fica mais dividido, Dumbledore deve decidir por quanto tempo ele ficará à margem da guerra que se aproxima.',
        poster_path:'https://ingresso-a.akamaihd.net/prd/img/movie/animais-fantasticos-os-segredos-de-dumbledore/70f27af7-cae0-4a08-82ae-e80a933dde68.jpg'
      },
      {
        Title: 'Animais Fantásticos e Onde Habitam',
        Overview:"O excêntrico magizoologista Newt Scamander (Eddie Redmayne) chega à cidade de Nova York levando com muito zelo sua preciosa maleta, um objeto mágico onde ele carrega fantásticos animais do mundo da magia que coletou durante as suas viagens. Em meio a comunidade bruxa norte-americana, que teme muito mais a exposição aos trouxas do que seus colegas ingleses, Newt precisará usar todas suas habilidades e conhecimentos para capturar uma variedade de criaturas que acabam fugindo.",
        poster_path:'https://img.elo7.com.br/product/zoom/2650178/big-poster-filme-animais-fantasticos-e-onde-habitam-l3-90x60-nerd.jpg'
      },
      {
        Title: 'Vingadores Ultimato',
        Overview:'Em Vingadores: Ultimato, após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, o Capitão América/Steve Rogers (Chris Evans) e a Viúva Negra/Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco.',
        poster_path:'https://img.elo7.com.br/product/original/259A7AA/big-poster-filme-vingadores-ultimato-lo001-tamanho-90x60-cm-poster-marvel.jpg'
      },
      {
        Title: 'Nós',
        Overview:"Adelaide (Lupita Nyong'o) e Gabe (Winston Duke) decidem levar a família para passar um fim de semana na praia e descansar em uma casa de veraneio. Eles viajam com os filhos e começam a aproveitar o ensolarado local, mas a chegada de um grupo misterioso muda tudo e a família se torna refém de seus próprios duplos.",
        poster_path:'https://img.elo7.com.br/product/original/269D300/big-poster-nos-filme-lo01-tamanho-90x60-cm-presente-geek.jpg'
      },
      {
        Title: 'Bumblebee',
        Overview:'1987. Refugiado num ferro-velho numa pequena cidade praiana da Califórnia, Bumblebee, um fusca amarelo aos pedaços, machucado e sem condição de uso, é encontrado e consertado pela jovem Charlie (Hailee Steinfeld), às vésperas de completar 18 anos. Só quando Bee ganha vida ela enfim nota que seu novo amigo é bem mais do que um simples automóvel.',
        poster_path:'https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/2/0/201906131110-uau-posters-filmes-bumblebee.jpg'
      },
      {
        Title: 'Interestelar',
        Overview:'Após ver a Terra consumindo boa parte de suas reservas naturais, um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper (Matthew McConaughey) é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand (Anne Hathaway), Jenkins (Marlon Sanders) e Doyle (Wes Bentley), ele seguirá em busca de uma nova casa. Com o passar dos anos, sua filha Murph (Mackenzie Foy e Jessica Chastain) investirá numa própria jornada para também tentar salvar a população do planeta.',
        poster_path:'https://ingresso-a.akamaihd.net/img/cinema/cartaz/4238-cartaz.jpg'
      },
      {
        Title: 'Uncharted',
        Overview:'Baseado em uma das séries de videogame mais vendidas e aclamadas pela crítica de todos os tempos, Uncharted: Fora do Mapa serve como uma prequela para os jogos, seguindo o jovem explorador Nathan "Nate" Drake (Tom Holland), descendente do grande explorador Francis Drake, antes de ser conhecido como um famoso explorador. Mas antes disso, Nate vivia uma vida pacata como bartender em uma cidade, mas acaba se envolvendo com um estranho que viria ser um dos seus mais confiáveis companheiros. Uncharted: Fora do Mapa mostra sua primeira aventura de caça ao tesouro com o sagaz parceiro Victor "Sully" Sullivan (Mark Wahlberg). Os dois partem em uma perigosa busca pelo "maior tesouro nunca encontrado", na cidade sul americana de El Dorado, mas a aventura acaba se estendendo por todo o mundo, enquanto rastreiam pistas que podem levar ao irmão há muito perdido de Nathan. Porém, mal sabiam eles que seriam perseguidos por um grupo de mercenários que também buscam pelo tesouro perdido.',
        poster_path:'https://assets-prd.ignimgs.com/2022/01/13/uncharted-poster-full-1642086040683.jpg'
      },
      {
        Title: 'Simplesmente Acontece',
        Overview:'Os jovens britânicos Rosie (Lily Collins) e Alex (Sam Claflin) são amigos inseparáveis desde a infância, experimentando juntos as dificuldades amorosas, familiares e escolares. Embora exista uma atração entre eles, os dois mantêm a amizade acima de tudo. Um dia, Alex decide aceitar um convite para estudar medicina em Harvard, nos Estados Unidos. A distância entre eles faz com que nasçam os primeiros segredos, enquanto cada um encontra outros namorados e namoradas. Mas o destino continua atraindo Rosie e Alex um ao outro.',
        poster_path:'https://i.pinimg.com/originals/2e/e7/d9/2ee7d90e56312ea62360f393eaa1716a.jpg'
      },
      {
        Title: 'Com Amor, Simon',
        Overview:'Aos 17 anos, Simon Spier (Nick Robinson) aparentemente leva uma vida comum, mas sofre por esconder um grande segredo: nunca revelou ser gay para sua família e amigos. E tudo fica mais complicado quando ele se apaixona por um dos colegas de escola, anônimo, com quem troca confidências diariamente via internet.',
        poster_path:'http://www.intrinseca.com.br/blog/wp-content/uploads/2017/10/love-simon-poster.jpg'
      },
      {
        Title: 'Animais Fantásticos: Os Crimes de Grindelwald',
        Overview:'Newt Scamander reencontra os queridos amigos Tina Goldstein, Queenie Goldstein e Jacob Kowalski. Ele é recrutado pelo seu antigo professor em Hogwarts, Alvo Dumbledore, para enfrentar o terrível bruxo das trevas Gellert Grindelwald, que escapou da custódia da Macusa (Congresso Mágico dos EUA) e reúne seguidores, dividindo o mundo entre seres de magos sangue puro e seres não-mágicos.',
        poster_path:'https://images.justwatch.com/poster/245340285/s592'
      }
    ]
  }

  render(){
    return(
        <>
        <GlobalStyle/>
        </>
    )
  }
}