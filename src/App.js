import './App.css';
import { useState } from 'react';
import Colors from './colores.js'
import arrayFrases from './frases';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { CSSTransition } from 'react-transition-group'


function App() {

  let random = Math.floor(Math.random() * arrayFrases.length);
  
  const [frase, setFrase] = useState(arrayFrases[random].frase);
  const [autor, setAutor] = useState(arrayFrases[random].autor);
  const [nuevoColor, setNuevoColor] = useState('#3949AB');
  const [inProp, setInProp] = useState(true);
  const retardo = 800;
  
  

  const cambiarFrase = () => {
    setInProp(false)
    let random2 = Math.floor(Math.random() * Colors.length);
    setTimeout(setFrase, retardo, arrayFrases[random].frase);
    setTimeout(setAutor, retardo, arrayFrases[random].autor);
    setTimeout(setInProp, retardo, true)
    setNuevoColor(Colors[random2]);
  };


  return (

    
    
    <div className='App' style={{backgroundColor:nuevoColor, color: '#fff', transition: `background-color ${retardo*2/1000}s ease`}}>
    
      <div className='contenedor-principal' id='quote-box'>
        
      <CSSTransition
          in={inProp}
          timeout={retardo}
          classNames='fade'>
            
        <div className='contenedor-fraseyautor'>
          <div className='contenedor-frase' id='text' style={{color: nuevoColor, transition: `color ${retardo*2/1000}s ease`}}>
            <p><i className='fa fa-quote-left' id='textToChange' ></i> {frase}</p>
          </div>


          
          <div className='contenedor-autor' id='author' style={{color: nuevoColor, transition: `color ${retardo*2/1000}s ease`}}>
            <p>- {autor}</p>
          </div>
        </div>
        
        </CSSTransition>

        <div className='contenedor-botones'> 
        
          <a  id='tweet-quote' style={{color: nuevoColor, transition: `color ${retardo*2/1000}s ease`}} 
          href={`https://www.twitter.com/intent/tweet?text="${frase}"%20-%20${autor}`}
          target='_blank'> 
            <FontAwesomeIcon className='boton-twitter' icon={faTwitterSquare} />
          </a>

          <button className='boton-frase' style={{backgroundColor:nuevoColor, transition: `background-color ${retardo*2/1000}s ease`}} 
          onClick={()=> cambiarFrase()} id='new-quote' >
              Nueva Frase
          </button>

        </div>
      </div>
      by Caballou 🐴
    </div>
    
  );
}

export default App;