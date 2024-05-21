import banner from '../img/banner.jpg'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Services.css';

const Services = () => {
    return (
        <Container fluid id="container">
            <section id='intro'>
                <h3 className='titleSection'>mon offre de services</h3>
                <p>Voici les presations sur lesquelles je peux intervenir.</p>
                <div id='hr'></div>             
            </section>
            <Row>
                <CardGroup id='cardGroup'>
                    <Col md={4}>
                        <Card className='card'>                                                       
                            <Card.Body id='uxDesign'>
                                <Card.Title className='title'>ux design</Card.Title>
                                <Card.Text className='text'>
                                    L'<strong>UX Design</strong> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='card'>                      
                            <Card.Body  id='devWeb'>
                                <Card.Title className='title' >développement web</Card.Title>
                                <Card.Text className='text'>
                                    Le <strong>développement de sites web</strong> repose sur l'utilisation des langages <u>HTML</u>, <u>CSS</u>, JavaScript et <u>PHP</u>.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='card'>                          
                            <Card.Body id='ref'>
                                <Card.Title className='title' >référencement</Card.Title>
                                <Card.Text className='text'>
                                    Le <strong>référencement naturel d'un site</strong>, aussi appelé <u>SEO</u>, consiste à mettre des techniques en oeuvre pour <i>améliorer sa position</i> dans les résultats des moteurs de recherche.
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