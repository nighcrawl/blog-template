---
id: 788
title: Des boutons qui ont du style (CSS)!
date: 2010-05-27T17:56:06+00:00
author: Ange Chierchia
layout: post
guid: http://chierchia.fr/?p=788
permalink: /blog/boutons-glossy-css3/
dsq_thread_id:
  - "917365159"
image: /contents/uploads/2010/05/css3button.jpg
categories:
  - XHTML/CSS
tags:
  - bouton
  - CSS
---
Aujourd&rsquo;hui pour fêter l&rsquo;anniversaire du blog, voilà un tutoriel qui vous montrera comment créer des boutons super clean et sympa en full CSS (cf. ici sur le blog), grâce notamment aux nouvelles propriétés introduites dans CSS3.<!--more-->

## À prendre en compte

Le but ici n&rsquo;est pas de vous faire une présentation de CSS3, donc on va tout de suite passer à la pratique. Sachez seulement que même si on va réaliser des superbes boutons vraiment classes comme ce qui se fait en ce moment un peu partout sur le Web, et ce sans aucune image, cette technique ne marche que sur les navigateurs Safari 4+, Chrome et Firefox 3.5+, qui sont les seul actuellement a interpréter certaine règles CSS3.

## Le marquage CSS

Bon allez, on plonge dans le code! Je n&rsquo;expliquerai pas le code volontairement, je pense que la définition des styles est assez clair et simple à comprendre. Si vous voulez plus d&rsquo;explications sur les déclarations CSS, un petit mot dans les commentaires du billet!

<pre class="brush:css">.button {

	/* style du texte */
	font-size: 16px;
	font-weight: bold;
	line-height: 1;
	text-decoration: none;
	color: #ffffff;
	text-shadow: 0 -1px 0 rgba(0,0,0,0.5); /* ombre décalée de 0px à droite, 1px en haut, un flou de 0px, de couleur noir et d'opacité 50% */

	/* fond dégradé pour le bouton */
	background: -moz-linear-gradient(top, #b50000, #6d0000); /* Firefox */
	background: -webkit-gradient(linear, 0 0, 0 100%, from(#b50000), to(#6d0000)); /* Safari et Chrome*/

	/* style général du bouton */
	display: inline-block;
	padding: 8px 10px 8px;
	-moz-border-radius: 4px; /* coins arrondi pour Firefox */
	-webkit-border-radius: 4px; /* coins arrondi pour Safari et Chrome */
	border-radius: 4px;
	border-bottom: 1px solid rgba(0,0,0,0.5);
	-moz-box-shadow: 0 1px 3px rgba(0,0,0,0.5);
	-webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.5);
	box-shadow: 0 1px 3px rgba(0,0,0,0.5);
	margin: 2px;
}

.button.medium { font-size: 12px; }

.button.small { font-size: 10px; }

.button.blue {
	background: -moz-linear-gradient(top, #6d93c0, #3d5b78); /* Firefox */
	background: -webkit-gradient(linear, 0 0, 0 100%, from(#6d93c0), to(#3d5b78)); /* Safari et Chrome*/
}

.button:hover {
	background: -moz-linear-gradient(top, #333333, #000000); /* Firefox */
	background: -webkit-gradient(linear, 0 0, 0 100%, from(#333333), to(#000000)); /* Safari et Chrome*/

}

.button.arrondi {
	-moz-border-radius: 20px; /* coins arrondi pour Firefox */
	-webkit-border-radius: 20px; /* coins arrondi pour Safari et Chrome */
	border-radius: 20px;
}</pre>

Vous n&rsquo;avez plus qu&rsquo;à appliquer la classe `.button` à votre lien, et y ajouter les class `.small` `.medium`, `.blue` ou `.arrondi` pour plus de personnalisation

## Fichiers de démonstration

À vous de jouer maintenant! Vous pouvez télécharger l&rsquo;archive contenant les fichier, ou regarder la démo en ligne en cliquant sur les boutons ci-dessous

<a class="demo_link" title="Démo sur jsFiddle" href="http://jsfiddle.net/nighcrawl/ZvJKK/embedded/result/" target="_blank">Voir la démo</a> <a class="download_link" title="Télécharger les fichiers sur GitHub" href="https://github.com/nighcrawl/demo.chierchia.fr/tree/master/css3buttons" target="_blank">Télécharger les fichiers</a>