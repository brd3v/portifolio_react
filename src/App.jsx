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
      <a target='blank' href="https://www.linkedin.com/in/bruno-s-60132b102/"><i className="bi bi-linkedin"></i> </a>
      <a target='blank' href="https://github.com/brd3v?tab=repositories"><i className="bi bi-git"></i> </a>
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
        <div className='col-md-4'><img src="../public/images/termometro.png" alt="" /> <h5>Termometro</h5><p>Projeto Feito com javascript + Reactjs + ajax +  Bootstrap + react icons</p>
        <a className='link' target='blank' href="https://github.com/brd3v/temperatura">Código</a>
        <a className='link' target='blank' href="https://temperatura-ecru.vercel.app/">Deploy</a></div>
        <div className='col-md-4'><img src="../public/images/anime news.png" alt="" /> <h5>Portal de notícias</h5> <p>Aplicação utilizando Ajax, React, bootstrap</p> 
        <a className='link' target='blank' href="https://github.com/brd3v/MangaNews">Código</a> 
        <a className='link' target='blank' href="https://manga-news.vercel.app/">Deploy</a></div>
        <div className='col-md-4'><img src="../public/images/papgina de venda.png" alt="" /> <h5>Pafgina de vendas</h5><p>Pagina de vendas desenvolvida para infoprodutores</p>
        <a className='link' target='blank' href="https://github.com/brd3v/site_vendas">Código</a>
        <a className='link' target='blank' href="https://site-vendas-seven.vercel.app/">Deploy</a></div>
        <div className='col-md-4'><img src="../public/images/site advogado.png" alt="" /><h5>Landingpage + Fromulario</h5><p>Projeto Feito com Javascript + Bootstrap</p>
        <a className='link' target='blank' href="https://github.com/brd3v/sites">Código</a>
        <a className='link' href="sites-black.vercel.app">Deploy</a></div>

        

      </div>
      
    </div>
    <footer>
    <div>    
    <a target='blank' href="https://www.linkedin.com/in/bruno-s-60132b102/"><i className="bi bi-linkedin"></i> </a>
    <a target='blank' href="https://github.com/brd3v?tab=repositories"><i className="bi bi-git"></i> </a>
    <a href="../public/curriculo.pdf  "><i className="bi bi-file-earmark-pdf-fill"></i></a>
     </div>
    </footer>

    </>
  )
}

export default App
