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
                        <h3 className='titleSection'>me contacter</h3>
                        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                        <div className='hr'></div>
                    </section>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <h4 className='sectionTitle'>Formulaire de contact</h4>
                                <div className='hr'></div>
                                <Form>
                                    <Form.Group>
                                        <Form.Control className='label' type='lastname' placeholder='Votre nom' />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control className='label' type='email' placeholder='Votre adresse mail' />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control className='label' type='number_phonr' placeholder='Votre numéro de téléphone' />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control className='label' type='object' placeholder='Sujet' />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control className='label' as="textarea" placeholder='Votre message' />
                                    </Form.Group>
                                    <Button variant='primary' type='submit'>Envoyer</Button>
                                </Form>
                            </Col>
                            <Col md={6}>
                                <h4 className='sectionTitle'>Mes coordonnées</h4>
                                <div className='hr'></div>
                                <div className='coordonnées'>
                                    <figure className='iconeContain'>
                                        <img className='icone' src={position} alt='icone de position'></img>
                                    </figure>
                                    <p>40 rue Laure Diebold, 69009 Lyon, France</p>                                    
                                </div>
                                <div className='coordonnées'>                                    
                                    <figure className='iconeContain'>
                                        <img className='icone' src={telephone} alt='icone de téléphone'></img>
                                    </figure>
                                    <p>06 20 30 40 50</p>                                                                     
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