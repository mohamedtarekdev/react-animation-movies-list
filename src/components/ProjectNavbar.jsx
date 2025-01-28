import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import logo from '../images/logo.png';
const ProjectNavbar = ({ onSearch }) => {
    return (
        <div className="nav-style w-100">
            <Container>
                <Row className="pt-2 justify-content-center">
                    <Col xs="12" lg="1">
                        <a href="/">
                            <img className="logo" src={logo} alt="dfs" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ProjectNavbar;
