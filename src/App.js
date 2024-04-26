import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>JOHN DOE</p>
        <nav>
          <ul>
            <li>ACCUEIL</li>
            <li>SERVICES</li>
            <li>REALISATIONS</li>
            <li>BLOG</li>
            <li>ME CONTACTER</li>
          </ul>
        </nav>
      </header>
      <main>
        <div>
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web full stack</h2>
          <button>En savoir plus</button>
        </div>
        <div>

        </div>
      </main>
      <footer className='App-footer'>
        <div>
          <div>
            <p>John Doe</p>
            <div>
              <p>40 rue Laure Diebold</p>
              <p>69009 Lyon, France</p>
              <p>Téléphone : 06 20 30 40 50</p>
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
      </footer> 
    </div>
  );
}

export default App;
