import about from '../img/john-doe-about.jpg'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Accueil.css';

const Accueil = () => {
    return (
        <Container fluid id="accueil">
            <Col>
                <section className='present'>
                    <h1>Bonjour, je suis John Doe</h1>
                    <h2>Développeur web full stack</h2>
                    <Button variant='primary' href="#about">En savoir plus</Button>
                </section>        
                <section id="card">
                    <div id="cardBody">           
                        <Row >
                            <Col id="about" md={6}>
                                <h3 className='titleAbout'>à propos</h3>
                                <div id='hrAbout'></div>
                                <div id='textAbout'>
                                    <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong className='strong'>intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong className='strong'>développement web</strong>.</p>
                                    <p>Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong className='strong'>développeur web full stack</strong>.</p>
                                    <p>J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
                                </div>                                
                            </Col>
                            <Col md={6} id="progress">
                                <figure>
                                    <img src={about} alt='photo de John Doe'></img>
                                </figure>
                                <h3 className='titleAbout'>mes compétences</h3>
                                <div className='progressBar'>
                                    <p className='intitule'>html5 90%</p>
                                    <ProgressBar variant='danger' now={90} />
                                </div>
                                <div className='progressBar'>
                                    <p className='intitule'>css3 80%</p>
                                    <ProgressBar variant='info' now={80} />
                                </div>
                                <div className='progressBar'>
                                    <p className='intitule'>javascript 70%</p>
                                    <ProgressBar variant='warning' now={70} />
                                </div>
                                <div className='progressBar'>
                                    <p className='intitule'>php 60%</p>
                                    <ProgressBar variant='success' now={60} />
                                </div>
                                <div className='progressBar'>
                                    <p className='intitule'>react 50%</p>
                                    <ProgressBar now={50} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
            </Col>
        </Container>                   
    )
}

export default Accueil;