import ecran from '../img/icone_ecran.png'
import page_web from '../img/icone_page_web.png'
import loupe from '../img/icone_loupe.png'
import banner from '../img/banner.jpg'

const Services = () => {
    return (
        <div>
            <figure>
                <img src={banner} alt='image électrisante'></img>
            </figure>
            <div>
                <h3>MON OFFRE DE SERVICES</h3>
                <p>Voici les presations sur lesquelles je peux intervenir.</p>
            </div>
            <div>
                <figure>
                    <img src={ecran} alt="icône écran d'ordinateur"></img>
                </figure>
                <h4>UX DESIGN</h4>
                <p>L'UX Design est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
            </div>
            <div>
                <figure>
                    <img src={page_web} alt="icône de page web"></img>
                </figure>
                <h4>DEVELOPPEMENT WEB</h4>
                <p>Le développement web repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.</p>
            </div>
            <div>
                <figure>
                    <img src={loupe} alt="icône de loupe"></img>
                </figure>
                <h4>REFERENCEMENT</h4>
                <p>Le référencement naturel d'un site, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs de recherche.</p>
            </div>
        </div>
    )
}

export default Services;