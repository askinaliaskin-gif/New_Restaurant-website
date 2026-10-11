# New Restaurant : site statique
Fichiers : index.html, style.css, app.js, config.js, fonts.css, assets/ (aucune dépendance externe).
- **Aperçu local** : `python3 serve.py` (serveur avec support Range, nécessaire au défilement vidéo) dans ce dossier, puis http://localhost:8000
- **À modifier** : config.js (prix `null` = « [ajouter le prix] », adresse, horaires, téléphone, `directionsUrl`, `orderUrl`, `shopPhoto`, textes légaux). Les boutons Itinéraire/Commander restent désactivés tant que leur lien est vide.
- **Héros** : assets/hero.mp4 (ré-encodé, images clés rapprochées pour un défilement fluide). Les minutages des textes sont dans `app.js` (tableau `T`, en secondes).
- **Mise en ligne (IONOS)** : envoyer le contenu du ZIP à la racine de l'hébergement.

- **Avis clients** : modifiez `reviews.items` dans config.js (nom, étoiles, texte). Avec « réduire les animations », le carrousel devient une rangée à faire défiler à la main.
