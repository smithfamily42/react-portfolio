// import logo from './logo.svg';
import React, { useState } from 'react';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Page from "./components/Page"

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
      <Header>
        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      </Header>


      <main>
      <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;
