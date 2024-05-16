import github from '../github.png';
import linkedin from '../linkedin.png';
import twitter from '../twitter.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Footer.css';
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <Container fluid className='footer'>
            <Row className='rowFooter'>
                <Col className='colFooter' md={6} lg={3}>
                    <h3>John Doe</h3>
                    <p>40 rue Laure Diebold</p>
                    <p>69009 Lyon, France</p>
                    <p>Téléphone : 06 20 30 40 50</p>
                    <Row className='logos'>
                        <Col>
                            <a href='https://github.com' target='_blank'><img src={github} alt='icône de Github'></img></a>
                            <a href='https://twitter.com' target='_blank'><img src={twitter} alt='icône de Twitter'></img></a>
                            <a href='https://linkedin.com' target='_blank'><img src={linkedin} alt='icône de Linkedin'></img></a>     
                        </Col>
                    </Row>
                </Col>
                <Col className='colFooter' md={6} lg={3}>
                    <h3>Liens utiles</h3>
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><a href="/#about">A propos</a></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contacts">Me contacter</Link></li>
                        <li><a href="">Mentions légales</a></li>
                    </ul>
                </Col>
                <Col className='colFooter' md={6} lg={3}>
                    <h3>Mes dernières réalisations</h3>
                    <ul>
                        <li><a href="">Fresh food</a></li>
                        <li><a href="">Restaurant Akira</a></li>
                        <li><a href="">Espace bien-être</a></li>
                    </ul>
                </Col>
                <Col className='colFooter' md={6} lg={3}>
                    <h3>Mes derniers articles</h3>
                    <ul>
                        <li><a href="">Coder son site en HTML/CSS</a></li>
                        <li><a href="">Vendre ses produits sur le web</a></li>
                        <li><a href="">Se positionner sur Google</a></li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <small className='copyright'> &copy; Designed by John Doe</small>
            </Row>
        </Container>
    )
}

export default Footer;