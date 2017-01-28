---
id: 562
title: Créer un panneau de Login coulissant avec jQuery
date: 2010-01-11T17:45:18+00:00
author: Ange Chierchia
layout: post
guid: http://chierchia.fr/?p=562
permalink: /blog/creer-un-panneau-de-login-coulissant-avec-jquery/
img_article:
  - /contents/uploads/loginpaneljquery.jpg
dsq_thread_id:
  - "921825862"
image: /contents/uploads/2010/04/loginpanel.jpg
categories:
  - Ajax/JavaScript
tags:
  - Javascript
  - jQuery
  - Webdesign
---
Comme premier article pour cette nouvelle année 2010 (bonne année à tous d&rsquo;ailleurs!), j&rsquo;ai décidé de vous proposer un tutoriel très simple pour créer une zone de login coulissante grâce à la librairie javascript jQuery.

<!--more-->L&rsquo;idée ici, c&rsquo;est de pouvoir faire apparaitre un panneau au clic sur un bouton. Ce panneau qui coulisserai vers le bas depuis le &laquo;&nbsp;header&nbsp;&raquo; du site afficherai un formulaire pour permettre aux utilisateurs du site de se connecter à leur espace personnel. On pourrait croire qu&rsquo;il serai difficile de réaliser un tel effet. Eh bien non! Grâce à notre feuille de style et un tout petit peu de javascript en utilisant jQuery, l&rsquo;effet est simple à réaliser, et tout n&rsquo;est ensuite qu&rsquo;une question de style 🙂 .

Avant de commencer, vous pouvez [jeter un oeil sur le rendu final](http://chierchia.fr/fichiers/slidepanellogin/ "Démo : Panneau de login coulissant avec jQuery") (pour un meilleur rendu, utilisez les navigateurs Chrome, Firefox 3.5 ou Safari 4).

## Le marquage HTML

Maintenant qu&rsquo;on a vu quel était notre but, passons au code HTML de notre panneau de login. Je ne vais pas expliquer le code, c&rsquo;est un formulaire basique encapsulé dans un bloc, suivi d&rsquo;un lien lui même encapsulé dans un bloc de paragraphe.

<pre class="brush:html">&lt;div id="login_panel"&gt;
	&lt;form name="login_form" id="login_form" method="post" action="" &gt;
		&lt;label for="username"&gt;Nom d'utilisateur:&lt;/label&gt;
		&lt;input type="text" name="username" id="username" /&gt;
		&lt;label for="password"&gt;Mot de passe:&lt;/label&gt;
		&lt;input type="password" name="password" id="password" /&gt;
		&lt;input type="submit" name="submit" id="submit" value="Connexion" /&gt;
	&lt;/form&gt;
&lt;/div&gt;&lt;!-- #login_panel --&gt;
&lt;p class="slide"&gt;&lt;a href="#" class="slide_btn"&gt;Se connecter&lt;/a&gt;&lt;/p&gt;</pre>

Voilà, on ne peut vraiment pas faire plus simple.

## Les styles CSS

Maintenant, passons à notre feuille de style. Je ne mettrai ici que les propriétés importantes à la réalisation de l&rsquo;effet, pour ne pas vous embêter avec le superflux, cependant le code complet sera disponible au téléchargement à la toute fin de l&rsquo;article.

<pre class="brush:css">#login_panel {
	width: 400px;
	margin: 0 auto;
	padding: 30px;
	background: #cccccc;
	display: none; //état initial du panneau : caché
}

.slide_btn {
	width: 140px;
	height: 15px;
	margin: 0 auto;
	padding: 10px;
	text-align: center;
	background: #ff0000;
	display: block;
}

.slide {
	margin: 0;
	padding: 0;
}</pre>

## Le script jQuery

Maintenant qu&rsquo;on a définit notre marquage HTML et les styles à lui appliquer, il ne reste plus qu&rsquo;à l&rsquo;animer grâce à jQuery.

<pre class="brush:js">$(document).ready(function(){
	$(".slide_btn").click(function(){
		$("#login_panel").slideToggle("slow");
		return false;
	});
});</pre>

Et voilà, votre panneau de login est terminé!

## Télécharger les sources

[Voir une démo](http://chierchia.fr/fichiers/slidepanellogin/){.demo_link} <a class="download_link" title="Télécharger les fichiers sur GitHub" href="https://github.com/nighcrawl/demo.chierchia.fr/tree/master/slidepanellogin" target="_blank">Télécharger les fichiers sources</a>