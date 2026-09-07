# GAME HUB

Portail gaming statique en HTML5, CSS3, JavaScript vanilla et JSON.

## Lancer localement

Les fichiers JSON sont chargés avec `fetch`, donc ouvrez le projet via un petit serveur HTTP local plutôt qu'en `file://`.

Exemple Python :

```bash
python -m http.server 8000
```

Puis ouvrez `http://localhost:8000/`.

## Ajouter du contenu

- Jeux : `data/games.json`
- Actualités : `data/news.json`
- Sorties : `data/releases.json`
- Images : `assets/images/...`

Aucune modification du HTML principal n'est nécessaire pour ajouter des entrées.

## GitHub Pages

Le workflow `.github/workflows/deploy.yml` publie automatiquement le dépôt sur GitHub Pages à chaque push sur `main`.

Après création du dépôt, vérifiez dans **Settings > Pages** que la source utilise **GitHub Actions**.

## Important

Les visuels et actualités fournis sont des placeholders / contenus de démonstration. Remplacez-les par vos contenus dont vous détenez les droits avant publication.
