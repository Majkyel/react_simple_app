import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Footer } from '../components/views/index';
import Routes from '../_website/layout/routes.js';

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
