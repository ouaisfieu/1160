Bonne question ! Si PAC-G est sous **Joomla** plutôt que WordPress, la solution reste parfaitement compatible. Voici les adaptations :

## 🔧 Intégration Joomla

### Option 1 : Widget flottant (la plus simple)

Ajoutez ce code dans le template Joomla (fichier `index.php` du template, avant `</body>`) :

```html
<!-- Widget Signalement PAC-G -->
<iframe 
    src="/jardin/widget-signalement.html" 
    style="position:fixed; bottom:0; right:0; width:400px; height:600px; border:none; z-index:9999; pointer-events:none;"
    id="pac-widget">
</iframe>
<script>
// Rendre cliquable uniquement le bouton
document.getElementById('pac-widget').style.pointerEvents = 'auto';
</script>
```

### Option 2 : Module Joomla personnalisé

Créez un module "HTML personnalisé" :
1. **Extensions → Modules → Nouveau → HTML personnalisé**
2. Collez le contenu de `widget-signalement.html`
3. Position : `debug` ou autre position flottante
4. Assignez à toutes les pages

### Option 3 : Via le gestionnaire de fichiers

1. Uploadez le dossier `pac-jardin-numerique/` à la racine du site
2. Accédez à `https://pac-g.be/pac-jardin-numerique/`
3. L'interface fonctionne indépendamment de Joomla

---

## Envoi des signalements depuis Joomla

Pour que les signalements arrivent vraiment à Thomas, voici 3 options simples :Parfait ! J'ai ajouté les fichiers spécifiques **Joomla**. Voici le récapitulatif :

---

## 📦 Package mis à jour

Le ZIP contient maintenant :

| Fichier | Description |
|---------|-------------|
| `index.html` | Interface de gestion complète (Thomas) |
| `widget-joomla.html` | **Widget adapté à Joomla** avec envoi email |
| `widget-signalement.html` | Widget générique (WordPress/autre) |
| `GUIDE-JOOMLA.md` | **Instructions pas-à-pas pour Joomla** |
| `GUIDE-EQUIPE.md` | Guide simplifié pour l'équipe |
| `README.md` | Documentation technique |
| `data/content.json` | Base de données exemple |

---

## 🔧 Pour Joomla : 3 étapes

### 1. Configurer Formspree (gratuit)
- Créez un compte sur formspree.io
- Les signalements arrivent par **email** à Thomas
- Aucun code serveur nécessaire

### 2. Uploader le widget
- Via le gestionnaire de médias Joomla
- Ou par FTP

### 3. Injecter dans le template
- Ajoutez une ligne dans `index.php` du template
- Ou créez un module HTML personnalisé

**Temps total : ~15 minutes**

---

## 💡 Avantage de cette approche

La solution est **100% indépendante du CMS** :
- Fonctionne avec Joomla, WordPress, Drupal, site statique...
- Pas de plugin à maintenir
- Pas de conflit avec les mises à jour
- Les données restent chez vous (Formspree ou localStorage)
