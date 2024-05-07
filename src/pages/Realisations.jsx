import freshfood from '../img/portfolio/fresh-food.jpg'
import akira from '../img/portfolio/akira.jpg'
import bienetre from '../img/portfolio/espace-bien-etre.jpg'
import banner from '../img/banner.jpg'

const Realisations = () => {
    return (
        <div>
            <figure>
                <img src={banner} alt='image électrisante'></img>
            </figure>
            <div>
                <h3>PORTFOLIO</h3>
                <p>Voici quelques-unes de mes réalisations.</p>
            </div>
            <div>
                <figure>
                    <img src={freshfood} alt="photo d'un plateau repas"></img>
                </figure>
                <h4>Fresh food</h4>
                <p>Réalisation d'un site avec commande en ligne</p>
                <button>Voir</button>
                <p>Site réalisé avec PHP et MySQL</p>
            </div>
            <div>
                <figure>
                    <img src={akira} alt="photo de sushis"></img>
                </figure>
                <h4>Restaurant Akira</h4>
                <p>Réalisation d'un site vitrine</p>
                <button>Voir</button>
                <p>Site réalisé avec WordPress</p>
            </div>
            <div>
                <figure>
                    <img src={bienetre} alt="photo japonisante"></img>
                </figure>
                <h4>Espace bien-être</h4>
                <p>Réalisation d'un site vitrine pour un patricien de bien-être</p>
                <button>Voir</button>
                <p>Site réalisé en HTML/CSS</p>
            </div>
        </div>
    )
}

export default Realisations;