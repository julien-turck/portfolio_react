import { CardBody } from 'react-bootstrap';
import position from '../img/position.png'
import telephone from '../img/telephone.png'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Contacts.css';

const Contacts = () => {
    return (
        <Card>
            <CardBody>
                <div>
                    <div>
                        <h3>ME CONTACTER</h3>
                        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                    </div>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <h4>Formulaire de contact</h4>
                                <Form>
                                    <Form.Group>
                                        <Form.Control type='lastname' placeholder='Votre nom' />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type='email' placeholder='Votre adresse mail' />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type='number_phonr' placeholder='Votre numéro de téléphone' />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type='object' placeholder='Sujet' />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control as="textarea" placeholder='Votre message' />
                                    </Form.Group>
                                    <Button variant='primary' type='submit'>Envoyer</Button>
                                </Form>
                            </Col>
                            <Col md={6}>
                                <h4>Mes coordonnées</h4>
                                <Row>
                                    <Col sm={2}>
                                        <figure>
                                            <img src={position} alt='icone de position'></img>
                                        </figure>
                                    </Col>
                                    <Col sm={10}>
                                        <p>40 rue Laure Diebold, 69009 Lyon, France</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={2}>
                                        <figure>
                                            <img src={telephone} alt='icone de téléphone'></img>
                                        </figure>
                                    </Col>
                                    <Col sm={10}>
                                        <p>06 20 30 40 50</p>
                                    </Col>                                    
                                </Row>               
                            </Col>
                        </Row>
                    </Container>
                </div>
            </CardBody>
        </Card>
    )
}

export default Contacts;