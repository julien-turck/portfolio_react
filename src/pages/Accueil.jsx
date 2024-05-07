import about from '../img/john-doe-about.jpg'

const Accueil = () => {
    return (
        <div>
            <div>
                <h1>Bonjour, je suis John Doe</h1>
                <h2>Développeur web full stack</h2>
                <button>En savoir plus</button>
            </div>
            <div>
                <div>
                    <h3>A propos</h3>
                    <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'intégrateur-développeur web au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du développement web.</p>
                    <p>Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de développeur web full stack.</p>
                    <p>J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
                </div>
                <div>
                    <figure>
                        <img src={about} alt='photo de John Doe'></img>
                    </figure>
                    <h3>Mes compétences</h3>
                    <p>HTML5 90%</p>
                    <p>CSS3 80%</p>
                    <p>JAVASCRIPT 70%</p>
                    <p>PHP 60%</p>
                    <p>REACT 50%</p>
                </div>
            </div>
        </div>        
    )
}

export default Accueil;