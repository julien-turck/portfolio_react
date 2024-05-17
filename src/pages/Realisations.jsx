import freshfood from '../img/portfolio/fresh-food.jpg'
import akira from '../img/portfolio/akira.jpg'
import bienetre from '../img/portfolio/espace-bien-etre.jpg'
import banner from '../img/banner.jpg'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Realisations.css';

const Realisations = () => {
    return (
        <Container fluid id="container">
            <section>
                <h3 className='titleSection'>portfolio</h3>                
                <p>Voici quelques-unes de mes réalisations.</p>
                <div id='hr'></div>                              
            </section>
            <Row>
                <CardGroup id="cardGroup">
                    <Col md={6} lg={4}>
                        <Card id='freshFood'>
                            <div>
                                <Card.Img src={freshfood} alt="photo d'un plateau repas" />
                                <Card.Body>
                                    <Card.Title>Fresh food</Card.Title>
                                    <Card.Text>
                                        Réalisation d'un site avec commande en ligne
                                    </Card.Text>
                                    <Button variant='outline-primary'>Voir</Button>
                                </Card.Body>                                
                                <Card.Footer id='footerFreshFood'>
                                    <p>Site réalisé avec PHP et MySQL</p>
                                </Card.Footer>
                            </div>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card id='akira'>
                            <div>
                                <Card.Img src={akira} alt="photo de sushis" />
                                <Card.Body>
                                    <Card.Title>Restaurant Akira</Card.Title>
                                    <Card.Text>
                                        Réalisation d'un site vitrine
                                    </Card.Text>
                                    <Button variant='outline-primary'>Voir</Button>
                                </Card.Body>
                                <Card.Footer id='footerAkira'>
                                    <p>Site réalisé avec WordPress</p>
                                </Card.Footer>
                            </div>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card id='bienEtre'>
                            <div>
                                <Card.Img src={bienetre} alt="photo japonisante" />
                                <Card.Body>
                                    <Card.Title>Espace bien-être</Card.Title>
                                    <Card.Text>
                                        Réalisation d'un site vitrine pour un patricien de bien-être
                                    </Card.Text>
                                    <Button variant='outline-primary'>Voir</Button>
                                </Card.Body>                                
                                <Card.Footer id='footerBienEtre'>
                                    <p>Site réalisé en HTML/CSS</p>
                                </Card.Footer>
                            </div>
                        </Card>
                    </Col>                                        
                </CardGroup>
            </Row>
        </Container>        
    )
}

export default Realisations;