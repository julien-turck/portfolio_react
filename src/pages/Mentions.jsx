import Accordion from 'react-bootstrap/Accordion';
import position from '../img/position.svg';
import telephone from '../img/telephone.svg';
import enveloppe from '../img/enveloppe.svg';
import globe from '../img/globe.svg';

function BasicExample() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Editeur du site</Accordion.Header>
        <Accordion.Body>
          <p>John Doe</p>
          <div className='coordonnées'>
                <figure className='iconeContain'>
                    <img className='icone' src={position} alt='icone de position'></img>
                </figure>
                <p>40 rue Laure Diebold, 69009 Lyon, France</p>                                    
            </div>
          <p>69009 Lyon, France</p>
          <div className='coordonnées'>                                    
                <figure className='iconeContain'>
                    <img className='icone' src={telephone} alt='icone de téléphone'></img>
                </figure>
                <p>06 20 30 40 50</p>                                                                     
            </div>
            <div className='coordonnées'>                                    
                <figure className='iconeContain'>
                    <img className='icone' src={enveloppe} alt="icone d'une enveloppe"></img>
                </figure>
                <p>john.doe@gmail.com</p>                                                                     
            </div>          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Hébergeur</Accordion.Header>
        <Accordion.Body>
          <p>Always data</p>
          <p>91 rue du Faubourg Saint Honoré</p>
          <p>75008 Paris</p>
          <div className='coordonnées'>                                    
                <figure className='iconeContain'>
                    <img className='icone' src={globe} alt="icone d'un globe"></img>
                </figure>
                <p><a href="https://www.alwaysdata.com" target='_blank'>www.alwaysdata.com</a></p>                                                                    
            </div>
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Crédits</Accordion.Header>
        <Accordion.Body>
          <p>Crédits</p>
          <p>Site développé par John Doe, étudiant du CEF</p>
          <p>Les images libres de droit sont issues du site <a href="https://pixabay.com" target='_blank'>Pixabay</a></p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default BasicExample;