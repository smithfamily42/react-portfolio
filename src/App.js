// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Nav from "./components/Nav";

function App() {

  const [pages] = useState([
    {
      name: "about"
    },
    {
      name: "portfolio"
    },
    {
      name: "contact"
    },
    {
      name: "resume"
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="m-0 py-3">Brad Smith's React Portfolio</h1>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </header>


      <main>

      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
