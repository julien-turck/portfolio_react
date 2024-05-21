import { CardBody } from 'react-bootstrap';
import position from '../img/position.svg';
import telephone from '../img/telephone.svg';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Contacts.css';

const Contacts = () => {
    return (
        <Container fluid id='containerContact'>            
            <Card>
                <CardBody>
                    <section id='intro'>
                        <h3 id='titleSection'>me contacter</h3>
                        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                        <div id='hr'></div>
                    </section>
                    <Container id='containerForm'>
                        <Row>
                            <Col md={6}>
                                <div>
                                    <h4 className='sectionTitle'>Formulaire de contact</h4>
                                    <div className='hrForm'></div>
                                </div>
                                <Form>
                                    <Form.Group>
                                        <Form.Control className='label' type='lastname' placeholder='Votre nom' required/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control className='label' type='email' placeholder='Votre adresse mail' required />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control className='label' type='number_phone' placeholder='Votre numéro de téléphone' required />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control className='label' type='object' placeholder='Sujet' required />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control className='label' as="textarea" placeholder='Votre message' required />
                                    </Form.Group>
                                    <Button variant='primary' type='submit'>Envoyer</Button>
                                </Form>
                            </Col>
                            <Col md={6}>
                                <div>
                                    <h4 className='sectionTitle'>Mes coordonnées</h4>
                                    <div className='hrForm'></div>
                                </div>
                                <div className='coordonnéesContact'>
                                    <figure className='iconeContain'>
                                        <img className='icone' src={position} alt='icone de position'></img>
                                    </figure>
                                    <p>40 rue Laure Diebold, 69009 Lyon, France</p>                                    
                                </div>
                                <div className='coordonnéesContact'>                                    
                                    <figure className='iconeContain'>
                                        <img className='icone' src={telephone} alt='icone de téléphone'></img>
                                    </figure>
                                    <p>06 20 30 40 50</p>                                                                                              
                                </div>
                                <div>
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626965754016!2d4.796403975485163!3d45.77866571240328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1716297791843!5m2!1sfr!2sfr" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>                                             
                            </Col>
                        </Row>
                    </Container>
                </CardBody>
            </Card>            
        </Container>
    )
}

export default Contacts;