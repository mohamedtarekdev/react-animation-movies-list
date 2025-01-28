import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

import { Container } from 'react-bootstrap';
import axios from 'axios';

import ProjectNavbar from './components/ProjectNavbar';
import MoviesList from './components/MoviesList';
import MovieDetails from './components/MovieDetails';

function App() {
    const [movies, setMovies] = useState([]);
    // const [totalPages, setTotalPages] = useState(0);

    const totalPages = 500;

    const getAllMovices = async () => {
        try {
            const res = await axios.get(
                'https://api.themoviedb.org/3/discover/movie',
                {
                    params: {
                        api_key: '413143d99171124f1a06f5429e870dd0',
                        language: 'ar',
                        with_genres: 16,
                    },
                }
            );

            setMovies(res.data.results);
        } catch (error) {
            console.log(error);
        }
    };

    const getMoviesByPage = async (pageNumber) => {
        try {
            const res = await axios.get(
                'https://api.themoviedb.org/3/discover/movie',
                {
                    params: {
                        api_key: '413143d99171124f1a06f5429e870dd0',
                        language: 'ar',
                        with_genres: 16,
                        page: pageNumber,
                    },
                }
            );
            setMovies(res.data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllMovices();
    }, []);

    return (
        <>
            <div className="font color-body">
                <ProjectNavbar />
                <Container>
                    <BrowserRouter>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <MoviesList
                                        movies={movies}
                                        totalPages={totalPages}
                                        getMoviesByPage={getMoviesByPage}
                                    />
                                }
                            />
                            <Route
                                path="/movie/:id"
                                element={<MovieDetails />}
                            />
                        </Routes>
                    </BrowserRouter>
                </Container>
            </div>
        </>
    );
}

export default App;
