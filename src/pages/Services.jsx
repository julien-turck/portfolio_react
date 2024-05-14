import ecran from '../img/icone_ecran.png'
import page_web from '../img/icone_page_web.png'
import loupe from '../img/icone_loupe.png'
import banner from '../img/banner.jpg'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Services = () => {
    return (
        <Container fluid>
            <figure>
                <img src={banner} alt='image électrisante'></img>
            </figure>
            <div>
                <h3>MON OFFRE DE SERVICES</h3>
                <p>Voici les presations sur lesquelles je peux intervenir.</p>
            </div>
            <Row>
                <CardGroup>
                    <Col md={4}>
                        <Card>
                            <Card.Img src={ecran} alt="icône écran d'ordinateur" />
                            <Card.Body>
                                <Card.Title>UX DESIGN</Card.Title>
                                <Card.Text>
                                    L'UX Design est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img src={page_web} alt="icône de page web" />
                            <Card.Body>
                                <Card.Title>DEVELOPPEMENT WEB</Card.Title>
                                <Card.Text>
                                    Le développement web repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Img src={loupe} alt="icône de loupe" />
                            <Card.Body>
                                <Card.Title>REFERENCEMENT</Card.Title>
                                <Card.Text>
                                    Le référencement naturel d'un site, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs de recherche.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>                                   
                </CardGroup>
            </Row>            
        </Container>
    )
}

export default Services;