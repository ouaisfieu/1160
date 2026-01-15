# 🔧 Guide d'installation Joomla

## Pour Thomas - Installation du widget de signalement sur Joomla

---

## Étape 1 : Configurer la réception des signalements (5 min)

### Option A : Formspree (recommandé, gratuit)

1. Allez sur **https://formspree.io**
2. Créez un compte avec votre email PAC
3. Cliquez sur **"New Form"**
4. Donnez un nom : "Signalements PAC-G"
5. Copiez l'ID du formulaire (ex: `xyzabcde`)
6. Dans le fichier `widget-joomla.html`, remplacez :
   ```
   https://formspree.io/f/VOTRE_FORMSPREE_ID
   ```
   par :
   ```
   https://formspree.io/f/xyzabcde
   ```

**Résultat** : Chaque signalement arrive dans votre boîte mail !

### Option B : Google Forms (alternative)

1. Créez un Google Form avec les champs : Type, Où, Description, Nom
2. Récupérez l'URL de soumission
3. Adaptez le formulaire HTML en conséquence

---

## Étape 2 : Uploader le fichier (2 min)

### Via le gestionnaire de médias Joomla :

1. Connectez-vous à l'admin Joomla
2. **Contenu → Médias**
3. Créez un dossier `jardin` (optionnel)
4. Uploadez `widget-joomla.html`
5. Notez le chemin : `/images/jardin/widget-joomla.html`

### Via FTP :

1. Connectez-vous en FTP (FileZilla, etc.)
2. Uploadez dans `/templates/VOTRE_TEMPLATE/html/`
3. Ou directement à la racine du site

---

## Étape 3 : Intégrer dans le template (3 min)

### Méthode A : Modifier le template (recommandé)

1. **Extensions → Templates → Templates**
2. Cliquez sur votre template actif
3. Ouvrez `index.php`
4. Avant la balise `</body>`, ajoutez :

```php
<!-- Widget Signalement PAC-G -->
<?php 
$widgetPath = JURI::root() . 'images/jardin/widget-joomla.html';
?>
<script>
(function() {
    var iframe = document.createElement('iframe');
    iframe.src = '<?php echo $widgetPath; ?>';
    iframe.style.cssText = 'position:fixed;bottom:0;right:0;width:420px;height:600px;border:none;z-index:999999;background:transparent;';
    iframe.setAttribute('allowtransparency', 'true');
    document.body.appendChild(iframe);
})();
</script>
```

### Méthode B : Module HTML personnalisé

1. **Extensions → Modules → Nouveau**
2. Type : **HTML personnalisé**
3. Position : `debug` ou une position de votre template
4. Affectation : **Toutes les pages**
5. Dans le contenu, collez le code du widget

### Méthode C : Plugin "Custom Code"

Si vous avez un plugin pour injecter du code (comme "Flexi Custom Code") :
1. Ajoutez le script dans la section "Before </body>"
2. Activez sur toutes les pages

---

## Étape 4 : Tester (1 min)

1. Visitez votre site (déconnecté de l'admin)
2. Vérifiez que le bouton 💬 apparaît en bas à droite
3. Cliquez dessus
4. Envoyez un signalement test
5. Vérifiez que vous recevez l'email

---

## Dépannage

### Le bouton n'apparaît pas

- Vérifiez que le fichier est bien uploadé
- Vérifiez le chemin dans le code
- Videz le cache Joomla (**Système → Vider le cache**)
- Videz le cache de votre navigateur

### Les styles sont cassés

- Le CSS du widget utilise `!important` pour éviter les conflits
- Si problème, essayez d'isoler dans une iframe

### L'email n'arrive pas

- Vérifiez votre ID Formspree
- Regardez dans les spams
- Testez directement sur formspree.io

### Le widget apparaît sur l'admin aussi

Ajoutez une condition PHP :
```php
<?php if (!JFactory::getApplication()->isAdmin()) : ?>
    <!-- code du widget -->
<?php endif; ?>
```

---

## Bonus : Personnalisation

### Changer les couleurs

Dans le CSS du widget, modifiez :
```css
--pac-primary: #2D5A4A;  /* Vert PAC */
--pac-accent: #3D7A62;   /* Vert clair */
```

### Changer la position du bouton

```css
.pac-signal-btn {
    bottom: 24px;  /* distance du bas */
    right: 24px;   /* distance de droite */
    /* Ou pour mettre à gauche : */
    /* left: 24px; right: auto; */
}
```

### Masquer sur certaines pages

Dans Joomla, utilisez les assignations de module ou ajoutez une condition PHP basée sur l'URL.

---

## Architecture finale

```
Site Joomla
├── /administrator          (admin Joomla)
├── /images/jardin/         
│   └── widget-joomla.html  ← Widget de signalement
├── /templates/votre-template/
│   └── index.php           ← Injection du widget
└── /pac-jardin-numerique/  ← Interface admin (optionnel)
    ├── index.html
    └── data/content.json
```

---

## Support

**Temps d'installation total : ~15 minutes**

En cas de problème :
1. Relisez ce guide
2. Vérifiez les chemins de fichiers
3. Testez sur Formspree directement
4. Contactez votre hébergeur si problème serveur

---

*Guide créé pour PAC-G · Janvier 2026*
