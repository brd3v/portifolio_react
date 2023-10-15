//import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  'react-bootstrap-icons';




function App() {

  return (
    <>
   <div className='title'>
   <div>  
   <div className='nome'>
      <h1>Bruno Pedro</h1>
   <div>    
      <a href="https://www.linkedin.com/in/bruno-s-60132b102/"><i className="bi bi-linkedin"></i> </a>
      <a href="https://github.com/brd3v?tab=repositories"><i className="bi bi-git"></i> </a>
      <a href="../public/curriculo.pdf  "><i className="bi bi-file-earmark-pdf-fill"></i></a>
     </div>
    </div>
    <div className='subtitle'><h3>React Developer</h3>
  </div>
  
  </div>

    </div>
    <div className='projects'>
      <h3>Projetos</h3>
      <div className='row'>
        <div className='col-md-4'><img src="../public/images/projeto1.png" alt="" /> <h5>Conselhos diarios</h5><p>Projeto Feito com javascript + Bootstrap</p></div>
        <div className='col-md-4'><img src="../public/images/projeto2.png" alt="" /> <h5>Pagina de vevndas</h5> <p>Pagina de vendas basica</p> </div>
        <div className='col-md-4'><img src="../public/images/projeto 3.png" alt="" /> <h5>Site de Adivogado</h5><p>Site Institucional</p></div>
        <div className='col-md-4'><img src="../public/images/projeto 4.png" alt="" /><h5>Conversão de moedas</h5><p>Projeto Feito com Javascript + Bootstrap</p></div>

        

      </div>
      
    </div>
    <footer>
    <div>    
    <a href="https://www.linkedin.com/in/bruno-s-60132b102/"><i className="bi bi-linkedin"></i> </a>
      <a href="https://github.com/brd3v?tab=repositories"><i className="bi bi-git"></i> </a>
      <a href="../public/curriculo.pdf  "><i className="bi bi-file-earmark-pdf-fill"></i></a>
     </div>
    </footer>

    </>
  )
}

export default App
