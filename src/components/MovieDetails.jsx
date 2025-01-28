import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    const getMovieById = async (id) => {
        try {
            const res = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}`,
                {
                    params: {
                        api_key: '413143d99171124f1a06f5429e870dd0',
                        language: 'ar',
                    },
                }
            );
            setMovie(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMovieById(id);
    }, []);

    return (
        <div>
            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-4 ">
                    <div className="card-detalis  d-flex align-items-center ">
                        <img
                            className="img-movie w-30"
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt=""
                        />
                        <div className="justify-content-center text-center  mx-auto">
                            <p className="card-text-details border-bottom">
                                اسم الفيلم: {movie.title}
                            </p>
                            <p className="card-text-details border-bottom">
                                تاريخ الفيلم : {movie.release_date}
                            </p>
                            <p className="card-text-details border-bottom">
                                عدد المقيمين : {movie.vote_count}
                            </p>
                            <p className="card-text-details border-bottom">
                                التقييم : {movie.vote_average}
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md="12" xs="12" sm="12" className="mt-1 ">
                    <div className="card-story  d-flex flex-column align-items-start">
                        <div className="text-end p-4 ">
                            <p className="card-text-title border-bottom">
                                القصة:
                            </p>
                        </div>
                        <div className="text-end px-2">
                            <p className="card-text-story">{movie.overview}</p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col
                    md="10"
                    xs="12"
                    sm="12"
                    className="mt-2 d-flex justify-content-center "
                >
                    <Link to="/">
                        <button
                            style={{
                                backgroundColor: '#b45b35',
                                border: 'none',
                            }}
                            className="btn btn-primary mx-2"
                        >
                            عوده للرئيسيه
                        </button>
                    </Link>
                    <a href={movie.homepage} target="_blank">
                        <button
                            style={{
                                backgroundColor: '#b45b35',
                                border: 'none',
                            }}
                            className="btn btn-primary"
                        >
                            مشاهده الفيلم
                        </button>
                    </a>
                </Col>
            </Row>
        </div>
    );
};

export default MovieDetails;
