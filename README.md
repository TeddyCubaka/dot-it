# Bonjour !

Bienvenu, 
L'application [Dot it] est une application de streaming basée sur l'api de spotify. Cette version actuelle est une version bêta, donc, est en perpetuelle changement. La version en ligne est sur la branche `main`, est la version developpement est sur la branche `develop`. La branche `main-local` n'est pas à prendre en compte car très bientôt elle sera supprimée.

## Technologie

Cette application est faite de `React js` et installée avec `create-react-app`. 

## Installation

Avant de télécharger l'application, rassurez-vous que vous avez la version `node` qui supporte `React`.

Une fois le projet en local, ouvrez votre terminale et tapez `npm install` pour installer toute les dépendances.

Après si vous souhaitez voir le rendu, démarrez le serveur en faisant `npm start`.

## Extensions 

Pour les test statique, l'application a comme extension, `eslint` et `prettier` avec la confuguration par défaut. `react-icons` pour les icones, `react-router-dom` pour le routage.

## Structure des composants

L'application suit la structure officielle de `create-react-app`, dans le dossier `src`, vous trouverez toutes les composants. Dans `./src/components` vous trouverez les composants principales de l'application et dans `./src/components/basics` vous trouverez les composants de base ou les composants primaire, s'il faut le dire.

## Stylisations des composants

Les composants sont stylisé par `classe` et cela se fait dans le fichier `App.css`. Pour ce qui est de la nomination des `class`, suivez les fonctions de chaques composants, s'il est parent ou commun à plusieurs composants, comme example, le composant `<Link />` aura comme className `link` car il est commun à presque tout les composants. Pour les composants, ils suivent la règle, `nom du composant parent + "-" + nom de la balise`, comme example, la balise image du composant `collection-card` aura comme className `collection-card-img`.

Je ne l'ai pas mentionné, mais les noms des classes à noms composants sont séparé par des `-`.

### Merci pour tous et bonne enventure.