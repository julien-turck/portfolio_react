import position from '../img/position.png'
import telephone from '../img/telephone.png'

const Contacts = () => {
    return (
        <div>
            <div>
                <h3>ME CONTACTER</h3>
                <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
            </div>
            <div>
                <div>
                    <h4>Formulaire de contact</h4>
                    <form>
                        <label for="lastname">
                            <input type="text" name="lastname" placeholder="Votre nom"></input>
                        </label>
                        <label for="email">
                            <input type="text" name="email" placeholder="Votre adresse mail"></input>
                        </label>
                        <label for="number_phone">
                            <input type="text" name="number_phone" placeholder="Votre numéro de téléphone"></input>
                        </label>
                        <label for="object">
                            <input type="text" name="object" placeholder="Sujet"></input>
                        </label>
                        <label for="message">
                            <textarea name="message" placeholder="Votre message"></textarea>
                        </label>
                        <input type="submit" value="Envoyer"/>
                    </form>
                </div>
                <div>
                    <h4>Mes coordonnées</h4>
                    <div>
                        <figure>
                            <img src={position} alt='icone de position'></img>
                        </figure>
                        <p>40 rue Laure Diebold, 69009 Lyon, France</p>
                    </div>
                    <div>
                        <figure>
                            <img src={telephone} alt='icone de téléphone'></img>
                        </figure>
                        <p>06 20 30 40 50</p>
                    </div>               
                </div>
            </div>
        </div>
    )
}

export default Contacts;