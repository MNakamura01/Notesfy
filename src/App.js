import React from 'react';
import GlobalStyle from './styles/global';
import Board from './components/Board';

import Header from './components/Header/';


function App() {
  return (
    <>
      <Header />
      <Board />
      <GlobalStyle />
    </>
  );
}

export default App;
