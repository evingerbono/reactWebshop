import './App.css';
import { useState } from 'react';
import { termekek } from './Termekek';
import Termek from './Termek';

function App() {
  return (
    <div className="App container">
      <header className="App-header">
      </header>
      <h1>Autók</h1>
      <section>
      </section>
      <article>
        {termekek.map((elem, index) => {
          return (<Termek src={elem.eleres} key={index} cim={elem.cim} leiras={elem.leiras} ar={elem.ar}/>)
        })
        }
      </article>
      <footer>Evinger Bono</footer>
    </div>
  );
}

export default App;
