import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from '../_website/layout/Header';
import { Home, Api } from '../components/views/index';

class App extends Component {
    render() {
        return(
            <Router>
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/api" component={Api} />
            </Router>
        );
    }
}

export default App;