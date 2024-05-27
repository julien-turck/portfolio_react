# Portfolio de John Doe avec React JS

Ce fichier est là pour vous aider à visualiser le portfolio de John Doe, réalisé avec React JS.
Vous pourrez également le modifier afin de l'améliorer et de vous l'approprier.
Attention : Toutes mes explications sont optimisées pour l'OS Windows 10 et 11

## Configuration machine préalable

Installation des logiciels suivants :
[VSCode](https://code.visualstudio.com/) + [Node.js](https://nodejs.org/download)

## installation du projet sur votre machine

Après téléchargement du projet à cette adresse : [portfolio_react](https://github.com/julien-turck/portfolio_react)
Dézippez le fichier afin que vue-project devienne le dossier racine du projet (si le nom du dossier contient d'autres éléments que vue-project, supprimez les en renommant le dossier)
Placez le à la racine du même lecteur que le logiciel Node.js pour plus de confort.
Attention : la première fois, ne modifiez pas l'arborescence des dossiers et fichiers du projets, sous peine que celui-ci comportent d'importantes erreurs ou qu'il soit inutilisable

### Afficher le projet

Démarrez 'Node.js command prompt' installé avec Node.js puis tapez les commandes suivantes, dans l'ordre, pour:

vous placez sur le bon dossier :

```sh
cd portfolio_react
```

Attention : vue-project est le nom de base du projet. Si vous avez modifié le nom du dossier contenant le projet, il faudra adapter la commande en conséquence.

démarrez la compilation du projet :

```sh
npm start
```

Dans la barre d'URL d'un navigateur Internet, copiez et collez l'adresse local de type http://localhost:XXXX apparue dans la nouvelle fenêtre (XXXX étant à remplacer par le nombre correspondant au port qui lui sera reservé sur votre machine)

### Modifier le projet

Démarrez le logiciel Visual Studio Code, puis dans le menu file, cliquez sur Open Folder. Depuis la nouvelle fenêtre, recherchez le dossier projet dans l'explorateur de fichiers de votre machine. Double-cliquez dessus pour le selectionner.

### Créer un build exploitable pour les serveurs d'hébergement

Pour sa mise en ligne, il est important de "builder" le projet afin qu'il soit expoitable par les serveurs des hébergeurs.
Pour se faire, toujours dans Node.js, une fois placé dans le dossier du projet, tapez la commande suivante :

```sh
npm run build
```

Un dossier Build s'inserera dans le dossier complet du projet. C'est le contenu de ce dossier qu'il faudra transférer sur votre serveur dédié par votre hebergeur.
Le transfert se fait en utilisant le protocole FTP, à l'aide d'un outil de transfert tiers comme Filezilla en téléchargeant la version "client" à cette adresse : [Filezilla](https://filezilla-project.org).

### Mise en ligne et lien vers l'API Github intégrée

Le projet est actuellement mis en ligne à partir de la plateforme [alwaysdata](https://alwaysdata.net), dont voici le lien : [Portfolio John Doe](https://julienturck.alwaysdata.net).

Est inclus dans le projet une fonction séparée permettant l'affichage des informations du compte Github de Jonh Doe.
Pour des raisons de compatibilités avec le serveur, le lien pointe vers une App hébergée sur [codesansbox](https://codesandbox.io) dont voici le lien de visualisation : [Github John Doe](https://zz6c9j.csb.app)
Toutefois, une version intégrée en local est également présente dans le projet. Il s'agit des fichiers ApiGithub.jsx pour la partie contenu ainsi que ApiGithub.css pour la partie style. Pour l'inclure dans le build, ouvrez le projet dans visual studio est copiez-collez les deux lignes suivantes :

```sh
import { Link } from "react-router-dom";
```

(à intégrer au début de la page qui contiendra le lien)

```sh
<Link id="linkApi" to="/apigithub">Cliquez ici</Link>
```

(à intégrer à l'intérieur du code jsx)

Attention ! la ligne ci-dessous, présente dans Realisations.jsx sera également à supprimer afin de ne pas faire doublon :

```sh
<p><a href="https://zz6c9j.csb.app" target="_blank" id="linkApi">Cliquez ici</a> pour accéder aux Repositories Github des projets présentés.</p>
```
