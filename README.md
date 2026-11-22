# The Best of Me

Appli web installable (PWA) pour créer des portraits de soi à partir de 1 à 4 selfies, en s'inspirant des prompts de photographes (ex. @photo_tvoritel).

## Fonctions
- **Photos** : 1 à 4 photos de référence, stockées uniquement sur le téléphone.
- **Thèmes** : ambiances (Cinéma, Portrait studio, Sport, Voyage, Vintage, Aventure…) avec plusieurs exemples de prompts ; ajout/modification/suppression de thèmes et de prompts, crédit du photographe, vignette tirée de ta propre création, export/import JSON.
- **Créer** : choix des photos utilisées, prompt modifiable, format (4:5, 9:16, 1:1, 16:9), génération, nouvelle version.
- **Galerie** : créations enregistrées, téléchargement, partage, réutilisation du prompt.

## IA utilisée
Ta propre clé API (⚙️ Réglages), au choix :
- Google Gemini « Nano Banana » — modèle par défaut `gemini-3.1-flash-image` (clé : https://aistudio.google.com/apikey)
- OpenAI GPT Image — modèle par défaut `gpt-image-1`

La génération est facturée par le service choisi, sur ton compte API.

## Hébergement
Fichiers statiques : activer GitHub Pages (Settings → Pages → branche `main`, dossier `/root`).
