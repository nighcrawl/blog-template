---
id: 255
title: 'Créer un menu horizontal avec les &quot;Sprites CSS&quot;'
date: 2009-06-04T17:34:15+00:00
author: Ange Chierchia
layout: post
guid: http://chierchia.fr/?p=255
permalink: /blog/creer-un-menu-horizontal-avec-des-sprites-css/
syntaxhighlighter_encoded:
  - "1"
img_article:
  - /contents/uploads/thumb_sprites.jpg
dsq_thread_id:
  - "919561901"
categories:
  - XHTML/CSS
tags:
  - CSS
  - HTML
---
Dans ce nouvel article, on va voir comment grâce aux CSS et à la technique des Sprites, on va pouvoir créer un menu horizontal, ou tout autre élément, avec un effet de rollover sans utiliser un nombre incalculable d&rsquo;images. Ici, une seule image sera nécessaire!<!--more-->

## Qu&rsquo;est-ce que la technique des Sprites CSS?

Les sprites CSS, sont en fait une sorte d&rsquo;extension de la technique du Rollover CSS. En effet, à l&rsquo;instar du Rollover CSS, les Sprites permettent de n&rsquo;avoir qu&rsquo;une seule image pour les différents états (normal, survolé, etc&#8230;) d&rsquo;un bouton, d&rsquo;une image, ou tout autre élement graphique. Là où les sprites vont plus loins c&rsquo;est la possibilités de n&rsquo;avoir qu&rsquo;un seul gros fichier image contenant toutes les icones, et autre éléments d&rsquo;interface. Cette technique est notamment utilisée par des sites dits &laquo;&nbsp;user-friendly&nbsp;&raquo;.

## Les Sprites appliquées à un menu horizontal

Appliquer la technique des Sprites pour réaliser un menu horizontal (ou vertucal) est une chose vraiment aisée. En effet, grâce à cette technique on pourra mettre les differents états des différents élément du menu dans un seul fichier. L&rsquo;exemple même de cette technique est le menu horizontal du site d&rsquo;Apple :

[<img class="alignnone" alt="" src="http://i1.wp.com/images.apple.com/global/nav/images/globalnavbg.png?resize=471%2C73" data-recalc-dims="1" />](http://i1.wp.com/images.apple.com/global/nav/images/globalnavbg.png)

Ici on voit que chaque éléments du menu à quatre états : normal, survolé, cliqué, actif.

Dans notre exemple nous allons utiliser un menu avec seulement deux états : normal, survolé. notre troisième état (actif) utilisera la même image que notre état survolé.

Allez, c&rsquo;est parti.

## Le code HTML

<pre class="brush:html">&lt;ul id="nav"&gt;
&lt;li id="nav_home"&gt;&lt;a href="menu.html"&gt;Home&lt;/a&gt;&lt;/li&gt;
&lt;li id="nav_services"&gt;&lt;a href="menu_s.html"&gt;Services&lt;/a&gt;&lt;/li&gt;
&lt;li id="nav_references"&gt;&lt;a href="menu_r.html"&gt;Références&lt;/a&gt;&lt;/li&gt;
&lt;li id="nav_contact"&gt;&lt;a href="menu_c.html"&gt;Contact&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</pre>

Ici on engloble notre menu dans une structure de liste non-ordonnée (<ul></ul>) avec un identifiant #nav, on aurait aussi pu utiliser une classe .nav pour l&rsquo;élément ul. Chaque élément de liste (<li></li>) a ensuite son propre identifiant, ce qui va nous permettre de bien positionner notre image pour chaque élément.

## La feuille de style

<pre class="brush:css">#nav {
width: 726px;
height: 30px;
position: relative;
background:url(nav_main.png);
margin: 0;
padding: 0;
list-style-type:none;
margin-bottom:10px;
}

#nav li {
float: left;
}

#nav li a {
position: absolute;
top: 0;
margin: 0;
padding: 0;
display: block;
height: 30px;
background: url(nav_main.png) no-repeat;
text-indent: -9999px;
overflow: hidden;
}

/*normal state*/
li#nav_home a {
left: 0;
width: 97px;
background-position: 0 0;
}

li#nav_services a {
left: 97px;
width: 97px;
background-position: -97px 0;
}

li#nav_references a {
left: 194px;
width: 97px;
background-position: -194px 0;
}

li#nav_contact a {
left: 291px;
width: 97px;
background-position: -291px 0;
}

/*hover state*/
li#nav_home a:hover {
background-position: 0 -30px;
}

li#nav_services a:hover {
background-position: -97px -30px;
}

li#nav_references a:hover {
background-position: -194px -30px;
}

li#nav_contact a:hover {
background-position: -291px -30px;
}

/*current state*/
#body_home li#nav_home a{
background-position: 0 -30px;
}

#body_services li#nav_services a {
background-position: -97px -30px;
}

#body_references li#nav_references a {
background-position: -194px -30px;
}
#body_contact li#nav_contact a {
background-position: -291px -30px;
}</pre>

On voit ici que tout ce joue avec l&rsquo;attribut background-position qui permet de donner les coordonnées permettant d&rsquo;afficher la bonne partie de l&rsquo;image. Ainsi, comme chaque bouton a les dimensions 97&#215;30, si l&rsquo;on veu afficher l&rsquo;état survolé du troisième élément, nous devrons postionner l&rsquo;image à -30px pour l&rsquo;axe verticale de l&rsquo;image, et -194px pour l&rsquo;axe horizontal (97&#215;97) ainsi on affichera 97px à partir du 195ième pixel de notre image.

<img class="alignnone  wp-image-262" title="dimensions_menu" alt="dimensions_menu" src="/contents/uploads/2009/06/dimensions_menu.jpg?fit=448%2C93" data-recalc-dims="1" />

Pour que le bouton du menu soit activé lorsque l&rsquo;on se trouve sur la page active, il suffit, grâce à notre CSS, de définir un identifiant pour la balise de notre page, ainsi si l&rsquo;on se trouve sur la page Références, notre balise sera :

<pre class="brush:html">&lt;body id="body_references"&gt;</pre>

<div>
  <h2>
    Fichiers source
  </h2>
  
  <p>
    <a class="demo_link" href="http://chierchia.fr/fichiers/menusprites/menu.php">Voir la démo</a> <a class="download_link" title="Télécharger les fichiers sur GitHub" href="https://github.com/nighcrawl/demo.chierchia.fr/tree/master/menusprites" target="_blank">Télécharger les fichiers</a>
  </p>
</div>