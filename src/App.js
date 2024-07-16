import './App.css';
import { useState, useEffect } from 'react';
import Articolo from "./Articolo";
import data from "./data";

const getFromLocalStorage = () => {
  if(localStorage.getItem("theme")) {
    return localStorage.getItem("theme");
  } else {
    return "light-mode";
  }
}

function App() {
  //Stato iniziale del theme
  const [theme, setTheme] = useState(getFromLocalStorage());

  //Cambio il valore di theme
  const cambiaTheme = () => {
    if(theme === "light-mode"){
      setTheme("dark-mode");
    } else {
      setTheme("light-mode")
    }
  }

  useEffect(() => {
    document.documentElement.className = theme;

    //Inserisco il valore di theme in localStorage
    localStorage.setItem("theme", theme);
  },[theme]);

  return (
    <section className='section-center'>
      <div className='container'>
        <button className='btn' onClick={cambiaTheme}>Cambia</button>
        <section className='article-section'>
          {data.map((el) => {
            return <Articolo key= {el.id} {...el}/>
          })}
        </section>
      </div>
    </section>
  );
}

export default App;
