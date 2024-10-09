import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Switch>
                        <Route path="/" exact component={MovieList} />
                        <Route path="/movie/:id" component={MovieDetails} />
                    </Switch>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

