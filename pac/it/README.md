# 🌱 PAC-G · Jardin Numérique

## Solution clé sur porte pour la maintenance collaborative du site PAC-G

---

## 📋 Table des matières

1. [Introduction](#introduction)
2. [Pour Thomas (Administrateur)](#pour-thomas-administrateur)
3. [Pour l'équipe (Contributeurs)](#pour-léquipe-contributeurs)
4. [Installation](#installation)
5. [Structure des fichiers](#structure-des-fichiers)
6. [FAQ](#faq)

---

## Introduction

### Qu'est-ce que c'est ?

Le **Jardin Numérique** est une interface web ultra-simple pour :
- 📚 **Cataloguer** vos ressources (Cahiers, Analyses, Formations)
- 🔍 **Détecter** les liens morts
- 💬 **Recevoir** les signalements de votre équipe
- 🔄 **Gérer** les redirections
- 📊 **Visualiser** la santé de votre site

### Philosophie

> *"Les liens morts sont comme des branches mortes : pas une faute, mais une partie naturelle d'un écosystème vivant."*

### Caractéristiques techniques

| Critère | Choix |
|---------|-------|
| **Dépendances** | Zéro (HTML/CSS/JS pur) |
| **Base de données** | Fichiers JSON (flat-file) |
| **Serveur requis** | Aucun (fonctionne en local) |
| **Hébergement** | N'importe où (GitHub Pages, Netlify, serveur) |

---

## Pour Thomas (Administrateur)

### Ce que vous pouvez faire

✅ Tableau de bord avec vue d'ensemble  
✅ Gestion des ressources (ajouter, modifier, supprimer)  
✅ Traitement des signalements par lots  
✅ Configuration des redirections  
✅ Export des données en JSON  
✅ Gestion des membres de l'équipe  

### Workflow recommandé

```
📅 LUNDI MATIN (15 min)
├── Ouvrir le tableau de bord
├── Consulter les nouveaux signalements
├── Traiter par lots (résoudre / ignorer)
└── Vérifier le score de santé

📅 MENSUEL (30 min)
├── Lancer un scan complet
├── Exporter les données (backup)
└── Vérifier les redirections
```

---

## Pour l'équipe (Contributeurs)

### 👋 Bienvenue dans le jardinage numérique !

**Votre rôle** : quand vous naviguez sur le site et que vous voyez quelque chose qui ne va pas, signalez-le en **un clic**.

### Comment signaler ?

1. Cliquez sur le bouton **💬** (en bas à droite)
2. Choisissez le type de problème
3. Indiquez où vous l'avez vu
4. Décrivez brièvement
5. Envoyez !

### Pas besoin de...

❌ Copier l'URL exacte  
❌ Comprendre le problème technique  
❌ Savoir comment corriger  
❌ Vous sentir coupable de signaler  

---

## Installation

### Option 1 : Utilisation locale (la plus simple)

```bash
# Double-cliquez sur index.html
# C'est tout ! 🎉
```

### Option 2 : Netlify (gratuit, recommandé)

1. Allez sur [netlify.com](https://netlify.com)
2. Glissez-déposez le dossier
3. Votre site est en ligne !

### Option 3 : GitHub Pages (gratuit)

1. Créez un repo GitHub
2. Uploadez les fichiers
3. Settings → Pages → Deploy from main branch

---

## Structure des fichiers

```
pac-cms/
├── index.html          # Interface principale
├── data/
│   └── content.json    # Base de données
├── README.md           # Ce fichier
└── GUIDE-EQUIPE.md     # Guide pour l'équipe
```

### Le fichier content.json

```json
{
  "resources": [...],    // Cahiers, Analyses, etc.
  "signals": [...],      // Signalements de l'équipe
  "issues": [...],       // Problèmes détectés
  "redirects": [...],    // Règles de redirection
  "team": [...],         // Membres
  "settings": {...}      // Configuration
}
```

---

## FAQ

### Les données sont-elles sécurisées ?

**Oui.** Tout reste dans le fichier JSON local. Rien n'est envoyé à un serveur externe.

### Que se passe-t-il si je perds le fichier JSON ?

Utilisez le bouton **"Exporter les données"** régulièrement pour créer des backups.

### Peut-on avoir plusieurs administrateurs ?

Oui, modifiez la section `team` dans `content.json`.

### Comment intégrer à WordPress ?

L'interface fonctionne indépendamment de WordPress. Pour une intégration, utilisez les plugins recommandés (WPMU DEV Broken Link Checker, Redirection).

---

## Évolutions possibles

- [ ] Mode sombre
- [ ] Export Excel/CSV
- [ ] Scan automatique réel des liens
- [ ] Synchronisation WordPress
- [ ] Notifications email

---

*Créé pour le PAC-G · Janvier 2026*
