import github from '../github.png';
import linkedin from '../linkedin.png';
import twitter from '../twitter.png';

const Footer = () => {
    return (
        <div>
            <div>
                <div>
                <p>John Doe</p>
                <div>
                <p>40 rue Laure Diebold</p>
                <p>69009 Lyon, France</p>
                <p>Téléphone : 06 20 30 40 50</p>
                <div>
                    <figure>
                    <a href='https://github.com' target='_blank'><img src={github} alt='icône de Github'></img></a>
                    </figure>
                    <figure>
                    <a href='https://linkedin.com' target='_blank'><img src={linkedin} alt='icône de Linkedin'></img></a>
                    </figure>
                    <figure>
                    <a href='https://twitter.com' target='_blank'><img src={twitter} alt='icône de Twitter'></img></a>
                    </figure>
                </div>              
                </div>
            </div>
            <div>
                <p>Liens utiles</p>
                <ul>
                <li><a href="" >Accueil</a></li>
                <li><a href="">A propos</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Me contacter</a></li>
                <li><a href="">Mentions légales</a></li>
                </ul>
            </div>
            <div>
                <p>Mes dernières réalisations</p>
                <ul>
                <li><a href="">Fresh food</a></li>
                <li><a href="">Restaurant Akira</a></li>
                <li><a href="">Espace bien-être</a></li>
                </ul>
            </div>
            <div>
                <p>Mes derniers articles</p>
                <ul>
                <li><a href="">Coder son site en HTML/CSS</a></li>
                <li><a href="">Vendre ses produits sur le web</a></li>
                <li><a href="">Se positionner sur Google</a></li>
                </ul>
            </div>
            </div>
            <div>
            <p className='copyright'>Designed by John Doe</p>
            </div>
        </div>
    )
}

export default Footer;