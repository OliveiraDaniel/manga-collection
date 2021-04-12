import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'components/Header'
import Form from 'components/Form'
import Footer from 'components/Footer'
import Showcase from 'components/Showcase'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Form />
    <Showcase />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

