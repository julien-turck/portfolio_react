import coder from '../img/blog/coder.jpg'
import croissance from '../img/blog/croissance.jpg'
import google from '../img/blog/google.jpg'
import screens from '../img/blog/screens.jpg'
import seo from '../img/blog/seo.jpg'
import technos from '../img/blog/technos.png'
import banner from '../img/banner.jpg'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Blog = () => {
    return (
        <Container fluid>
            <figure>
                <img src={banner} alt='image électrisante'></img>
            </figure>
            <div>
                <h3>BLOG</h3>
                <p>Retrouvez ici quelques articles sur le développement web.</p>
            </div>
            <Row>
                <CardGroup>                   
                    <Col md={6} lg={4}>
                        <Card>
                            <Card.Img src={coder} alt="image avec du code HTML" />
                            <Card.Body>
                                <Card.Title>Coder son site en HTML/CSS</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Button variant='outline-primary'>Voir</Button>
                            <Card.Footer>
                                <p>Publié le 22 août 2022</p>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card>
                            <Card.Img src={croissance} alt="image de pièces de monnaie" />
                            <Card.Body>
                                <Card.Title>Vendre ses produits sur le web</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Button variant='outline-primary'>Voir</Button>
                            <Card.Footer>
                                <p>Publié le 20 août 2022</p>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card>
                            <Card.Img src={google} alt="photo d'un ordinateur portable" />
                            <Card.Body>
                                <Card.Title>Se positionner sur Google</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Button variant='outline-primary'>Voir</Button>
                            <Card.Footer>
                                <p>Publié le 1 août 2022</p>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card>
                            <Card.Img src={screens} alt="photo d'une tablette" />
                            <Card.Body>
                                <Card.Title>Coder en responsive design</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Button variant='outline-primary'>Voir</Button>
                            <Card.Footer>
                                <p>Publié le 31 juillet 2022</p>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card>
                            <Card.Img src={seo} alt="image avec mots clé SEO" />
                            <Card.Body>
                                <Card.Title>Techniques de référencement</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Button variant='outline-primary'>Voir</Button>
                            <Card.Footer>
                                <p>Publié le 30 juillet 2022</p>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card>
                            <Card.Img src={technos} alt="image avec logos technologies du web" />
                            <Card.Body>
                                <Card.Title>Apprendre à coder</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Button variant='outline-primary'>Voir</Button>
                            <Card.Footer>
                                <p>Publié le 12 juillet 2022</p>
                            </Card.Footer>
                        </Card>
                    </Col>                    
                </CardGroup>
            </Row>
        </Container>
    )
}

export default Blog;