import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Footer } from '../pages/views/index';
import Routes from '../_website/layout/routes.js';
import '../_website/styles/style.scss';

class App extends Component {
    render() {
        return(
          <Router>
            <Header />
            <Routes />
            <Footer />
          </Router>
        );
    }
}

export default App;
