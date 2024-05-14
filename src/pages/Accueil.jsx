import about from '../img/john-doe-about.jpg'
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Accueil = () => {
    return (
        <Container fluid>
            <Col>
                <div>
                    <h1>Bonjour, je suis John Doe</h1>
                    <h2>Développeur web full stack</h2>
                    <Button variant='primary'>En savoir plus</Button>
                </div>        
                <Card>
                    <Card.Body>           
                        <Row>
                            <Col md={6}>
                                <h3>A propos</h3>
                                <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'intégrateur-développeur web au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du développement web.</p>
                                <p>Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de développeur web full stack.</p>
                                <p>J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
                            </Col>
                            <Col md={6}>
                                <figure>
                                    <img src={about} alt='photo de John Doe'></img>
                                </figure>
                                <h3>Mes compétences</h3>
                                <p>HTML5 90%</p>
                                <ProgressBar variant='danger' now={90} />
                                <p>CSS3 80%</p>
                                <ProgressBar variant='info' now={80} />
                                <p>JAVASCRIPT 70%</p>
                                <ProgressBar variant='warning' now={70} />
                                <p>PHP 60%</p>
                                <ProgressBar variant='success' now={60} />
                                <p>REACT 50%</p>
                                <ProgressBar now={50} />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Container>                   
    )
}

export default Accueil;