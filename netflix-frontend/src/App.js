import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Use 'Routes' instead of 'Switch'
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
                    <Routes>  {/* Replace Switch with Routes */}
                        <Route path="/" element={<MovieList />} />  {/* Update Route syntax */}
                        <Route path="/movie/:id" element={<MovieDetails />} />  {/* Update Route syntax */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

