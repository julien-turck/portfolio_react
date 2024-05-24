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
import '../css/Blog.css';

const Blog = () => {
    return (
        <Container fluid id="container">
            <section id='intro'>
                <h3 className='titleSection'>blog</h3>
                <p>Retrouvez ici quelques articles sur le développement web.</p>
                <div id='hr'></div>
            </section>
            <Row>
                <CardGroup id="cardGroup">                   
                    <Col md={6} lg={4}>
                        <Card id="coder">
                            <div>
                                <Card.Img src={coder} alt="image avec du code HTML" />
                                <Card.Body>
                                    <Card.Title id='titleCoder'>Coder son site en HTML/CSS</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                    <Button>Lire la suite</Button>
                                </Card.Body>                            
                                <Card.Footer id="footerCoder">
                                    <p>Publié le 22 août 2022</p>
                                </Card.Footer>
                            </div>                            
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card id="croissance">
                            <div>
                                <Card.Img src={croissance} alt="image de pièces de monnaie" />
                                <Card.Body>
                                    <Card.Title id='titleCroissance'>Vendre ses produits sur le web</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                    <Button>Lire la suite</Button>
                                </Card.Body>                            
                                <Card.Footer id="footerCroissance">
                                    <p>Publié le 20 août 2022</p>
                                </Card.Footer>
                            </div>                            
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card id="google">
                            <div>
                                <Card.Img src={google} alt="photo d'un ordinateur portable" />
                                <Card.Body>
                                    <Card.Title id='titleGoogle'>Se positionner sur Google</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                    <Button>Lire la suite</Button>
                                </Card.Body>                            
                                <Card.Footer id="footerGoogle">
                                    <p>Publié le 1 août 2022</p>
                                </Card.Footer>
                            </div>                            
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card id="screens">
                            <div>
                                <Card.Img src={screens} alt="photo d'une tablette" />
                                <Card.Body>
                                    <Card.Title id='titleScreens'>Coder en responsive design</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                    <Button>Lire la suite</Button>
                                </Card.Body>                            
                                <Card.Footer id="footerScreens">
                                    <p>Publié le 31 juillet 2022</p>
                                </Card.Footer>
                            </div>                            
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card id="seo">
                            <div>
                                <Card.Img src={seo} alt="image avec mots clé SEO" />
                                <Card.Body>
                                    <Card.Title id='titleSeo'>Techniques de référencement</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>
                                    <Button>Lire la suite</Button>
                                </Card.Body>                            
                                <Card.Footer id="footerSeo">
                                    <p>Publié le 30 juillet 2022</p>
                                </Card.Footer>
                            </div>                            
                        </Card>
                    </Col>
                    <Col md={6} lg={4}>
                        <Card id="technos">
                            <div>
                                <Card.Img src={technos} alt="image avec logos technologies du web" />
                                <Card.Body>
                                    <Card.Title id='titleTechnos'>Apprendre à coder</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </Card.Text>                                    
                                    <Button>Lire la suite</Button>
                                </Card.Body>
                                <Card.Footer id="footerTechnos">
                                    <p>Publié le 12 juillet 2022</p>
                                </Card.Footer>
                            </div>
                        </Card>
                    </Col>                    
                </CardGroup>
            </Row>
        </Container>
    )
}

export default Blog;