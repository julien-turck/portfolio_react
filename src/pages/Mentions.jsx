import Accordion from 'react-bootstrap/Accordion';
import position from '../img/position.svg';
import telephone from '../img/telephone.svg';
import enveloppe from '../img/enveloppe.svg';
import globe from '../img/globe.svg';
import '../css/Mentions.css'
import Container from 'react-bootstrap/Container';

function BasicExample() {
  return (
    <Container fluid id='mentions'>
      <section id='intro'>
        <h3 id='titleSection'>mentions légales</h3>
        <div id='hr'></div>
      </section>        
      <section id='body'>
        <Accordion id='accordion'defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Editeur du site</Accordion.Header>
            <Accordion.Body className='body'>
              <h4 className='mentionsTitle'>John Doe</h4>
              <div className='coordonnéesMentions'>
                  <figure className='iconeContain'>
                      <img className='icone' src={position} alt='icone de position'></img>
                  </figure>
                  <p>40 rue Laure Diebold</p>                                    
              </div>
              <p>69009 Lyon, France</p>
              <div className='coordonnéesMentions'>                                    
                    <figure className='iconeContain'>
                        <img className='icone' src={telephone} alt='icone de téléphone'></img>
                    </figure>
                    <p><a className='linkMentions' href="tel:0620304050">06 20 30 40 50</a></p>                                                                    
                </div>
                <div className='coordonnéesMentions'>                                    
                    <figure className='iconeContain'>
                        <img className='icone' src={enveloppe} alt="icone d'une enveloppe"></img>
                    </figure>
                    <p><a className='linkMentions' href="mailto:john.doe@gmail.com">john.doe@gmail.com</a></p>                                                                                  
                </div>          
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Hébergeur</Accordion.Header>
            <Accordion.Body className='body'>
              <h4 className='mentionsTitle'>Always data</h4>
              <p>91 rue du Faubourg Saint Honoré</p>
              <p>75008 Paris</p>
              <div className='coordonnéesMentions'>
                <figure className='iconeContain'>
                  <img className='icone' src={globe} alt="icone d'un globe"></img>
                </figure>
                <p><a className='linkMentions' href="https://www.alwaysdata.com" target='_blank'>www.alwaysdata.com</a></p>
              </div>          
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Crédits</Accordion.Header>
            <Accordion.Body className='body'>
              <h4 className='mentionsTitle'>Crédits</h4>
              <p>Site développé par John Doe, étudiant du CEF</p>
              <p>Les images libres de droit sont issues du site <a className='linkMentions' href="https://pixabay.com" target='_blank'>Pixabay</a></p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
    </Container>
  );
}

export default BasicExample;