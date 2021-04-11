import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from 'components/Header'
import Footer from 'components/Footer'
import Showcase from 'components/Showcase'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Showcase />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

