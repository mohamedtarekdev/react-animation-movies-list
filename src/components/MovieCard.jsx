import React from 'react';
import { Link } from 'react-router';

import { Col } from 'react-bootstrap';
import Cover from '../images/cover.jpg';
const CardMovie = ({ movie }) => {
    return (
        <Col xs="6" sm="6" md="4" lg="3" className="my-1">
            <Link to={`movie/${movie.id}`}>
                <div className="card h-100">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        className="card__image"
                        alt="hu"
                    />
                    <div className="card__overlay">
                        <div className="overlay__text text-center w-100 p-2">
                            <p>اسم الفيلم: {movie.title}</p>
                            <p>تاريخ الاصدار: {movie.release_date}</p>
                            <p>التقييم: {movie.vote_average}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </Col>
    );
};

export default CardMovie;
