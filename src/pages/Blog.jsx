import coder from '../img/blog/coder.jpg'
import croissance from '../img/blog/croissance.jpg'
import google from '../img/blog/google.jpg'
import screens from '../img/blog/screens.jpg'
import seo from '../img/blog/seo.jpg'
import technos from '../img/blog/technos.png'
import banner from '../img/banner.jpg'

const Blog = () => {
    return (
        <div>
            <figure>
                <img src={banner} alt='image électrisante'></img>
            </figure>
            <div>
                <h3>BLOG</h3>
                <p>Retrouvez ici quelques articles sur le développement web.</p>
            </div>
            <div>
                <figure>
                    <img src={coder} alt="image avec du code HTML"></img>
                </figure>
                <h4>Coder son site en HTML/CSS</h4>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button>Voir</button>
                <p>Publié le 22 août 2022</p>
            </div>
            <div>
                <figure>
                    <img src={croissance} alt="image de pièces de monnaie"></img>
                </figure>
                <h4>Vendre ses produits sur le web</h4>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button>Voir</button>
                <p>Publié le 20 août 2022</p>
            </div>
            <div>
                <figure>
                    <img src={google} alt="photo d'un ordinateur portable"></img>
                </figure>
                <h4>Se positionner sur Google</h4>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button>Voir</button>
                <p>Publié le 1 août 2022</p>
            </div>
            <div>
                <figure>
                    <img src={screens} alt="photo d'une tablette"></img>
                </figure>
                <h4>Coder en responsive design</h4>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button>Voir</button>
                <p>Publié le 31 juillet 2022</p>
            </div>
            <div>
                <figure>
                    <img src={seo} alt="image avec mots clé SEO"></img>
                </figure>
                <h4>Techniques de référencement</h4>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button>Voir</button>
                <p>Publié le 30 juillet 2022</p>
            </div>
            <div>
                <figure>
                    <img src={technos} alt="image avec logos technologies du web"></img>
                </figure>
                <h4>Apprendre à coder</h4>
                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button>Voir</button>
                <p>Publié le 12 juillet 2022</p>
            </div>
        </div>
    )
}

export default Blog;