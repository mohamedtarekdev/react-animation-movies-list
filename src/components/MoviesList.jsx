import React from 'react';
import { Row } from 'react-bootstrap';

import MovieCard from './MovieCard';
import ProjectPagination from './ProjectPagination';
const MoviesList = ({ movies, totalPages, getMoviesByPage }) => {
    return (
        <Row className="mt-3">
            {movies.length > 0 ? (
                <>
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                    <div
                        className="d-flex justify-content-center"
                        style={{ direction: 'rtl' }}
                    >
                        <ProjectPagination
                            totalPages={totalPages}
                            getMoviesByPage={getMoviesByPage}
                        />
                    </div>
                </>
            ) : (
                <h3 className="text-center my-5">
                    لا يوجد افلام للعرض في الوقت الحالي
                </h3>
            )}
        </Row>
    );
};

export default MoviesList;
