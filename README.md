# I.F.A. - INSA Finance Association

Site web officiel de l'INSA Finance Association.

## 🚀 Déploiement sur GitHub Pages (Gratuit)

### Étape 1 : Créer un compte GitHub
1. Allez sur [github.com](https://github.com)
2. Créez un compte gratuit si vous n'en avez pas

### Étape 2 : Créer un nouveau repository
1. Cliquez sur le bouton "+" en haut à droite → "New repository"
2. Nom du repository : `ifa-insa` (ou le nom que vous voulez)
3. Laissez le repository en **Public**
4. Cliquez sur "Create repository"

### Étape 3 : Uploader les fichiers
1. Sur la page du repository, cliquez sur "uploading an existing file"
2. Glissez-déposez TOUS les fichiers du dossier "Site Web" :
   - `index.html`
   - `styles.css`
   - `script.js`
   - Le dossier `assets/` avec votre logo
3. Cliquez sur "Commit changes"

### Étape 4 : Activer GitHub Pages
1. Allez dans les **Settings** du repository (onglet en haut)
2. Dans le menu de gauche, cliquez sur **Pages**
3. Sous "Source", sélectionnez :
   - Branch: `main`
   - Folder: `/ (root)`
4. Cliquez sur **Save**
5. Attendez quelques minutes...

### Étape 5 : Votre site est en ligne ! 🎉
Votre site sera accessible à l'adresse :
```
https://VOTRE-USERNAME.github.io/ifa-insa/
```

---

## 📧 Configuration de Formspree (Formulaires)

Les formulaires (newsletter, adhésion, contact) utilisent **Formspree** pour envoyer les réponses par email.

### Étape 1 : Créer un compte Formspree
1. Allez sur [formspree.io](https://formspree.io)
2. Créez un compte gratuit

### Étape 2 : Créer un formulaire
1. Cliquez sur "New Form"
2. Donnez un nom (ex: "IFA Newsletter")
3. Entrez votre email pour recevoir les réponses
4. Copiez l'endpoint (ex: `https://formspree.io/f/xyzabcde`)

### Étape 3 : Mettre à jour le site
Dans le fichier `index.html`, remplacez `YOUR_FORMSPREE_ID` par votre endpoint :

**Newsletter** (ligne ~320) :
```html
<form class="newsletter-form" action="https://formspree.io/f/VOTRE-ID" method="POST">
```

**Adhésion** (ligne ~370) :
```html
<form class="membership-form" action="https://formspree.io/f/VOTRE-ID" method="POST">
```

**Contact** (ligne ~475) :
```html
<form class="contact-form" action="https://formspree.io/f/VOTRE-ID" method="POST">
```

> 💡 **Conseil** : Vous pouvez créer 3 formulaires différents sur Formspree pour organiser les réponses (Newsletter, Adhésion, Contact).

---

## 🖼️ Ajouter votre logo

1. Placez votre logo dans le dossier `assets/`
2. Nommez-le `logo.png`
3. Taille recommandée : 200x200 pixels ou plus, fond transparent

---

## 📝 Modifier le contenu

### Ajouter un événement au programme
Dans `index.html`, trouvez la section `<div class="timeline">` et ajoutez :

```html
<div class="timeline-item">
    <div class="timeline-date">
        <span class="day">JJ</span>
        <span class="month">Mois</span>
    </div>
    <div class="timeline-content">
        <span class="event-type conference">Type</span>
        <h3>Titre de l'événement</h3>
        <p class="event-speaker"><i class="fas fa-user-tie"></i> Intervenant</p>
        <p class="event-time"><i class="fas fa-clock"></i> Heure</p>
        <p class="event-location"><i class="fas fa-map-marker-alt"></i> Lieu</p>
    </div>
</div>
```

Types d'événements disponibles (classes CSS) :
- `conference` (bleu)
- `afterwork` (orange)
- `table-ronde` (vert)
- `visite` (bleu clair)
- `interview` (violet)

### Ajouter un article
Dans la section `<div class="articles-grid">`, ajoutez :

```html
<article class="article-card">
    <div class="article-image">
        <img src="URL-IMAGE" alt="Description">
        <span class="article-category">Catégorie</span>
    </div>
    <div class="article-content">
        <span class="article-date"><i class="far fa-calendar"></i> Date</span>
        <h3>Titre de l'article</h3>
        <p>Résumé...</p>
        <a href="#" class="read-more">Lire la suite <i class="fas fa-arrow-right"></i></a>
    </div>
</article>
```

---

## 🎨 Personnaliser les couleurs

Les couleurs sont définies dans `styles.css` au début du fichier (variables CSS) :

```css
:root {
    --primary-color: #1a365d;      /* Bleu foncé principal */
    --primary-light: #2c5282;      /* Bleu moyen */
    --secondary-color: #3182ce;    /* Bleu vif */
    --accent-color: #63b3ed;       /* Bleu clair accent */
    /* ... */
}
```

Modifiez ces valeurs pour changer l'apparence du site.

---

## 📱 Le site est responsive

Le site s'adapte automatiquement à :
- 🖥️ Ordinateurs de bureau
- 💻 Laptops
- 📱 Tablettes
- 📱 Smartphones

---

## 🆘 Besoin d'aide ?

- **GitHub Pages** : [Documentation officielle](https://docs.github.com/en/pages)
- **Formspree** : [Documentation](https://formspree.io/docs/)

---

© 2026 INSA Finance Association
