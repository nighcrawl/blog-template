---
id: 945
title: Un menu Lava avec jQuery
date: 2010-07-28T22:25:32+00:00
author: Ange Chierchia
layout: post
guid: http://chierchia.fr/?p=945
permalink: /blog/menu-lava-lamp-jquery/
dsq_thread_id:
  - "917481317"
image: /contents/uploads/2010/07/lavalampmenu.png
categories:
  - Ajax/JavaScript
tags:
  - CSS
  - HTML
  - Javascript
  - jQuery
---
Aujourd&rsquo;hui je vais partager avec vous un petit effet sympa pour rendre un menu de navigation plus attractif. L&rsquo;effet que l&rsquo;on va réaliser ici s&rsquo;appelle &laquo;&nbsp;LavaLamp&nbsp;&raquo;, ou &laquo;&nbsp;lampe à lave&nbsp;&raquo; en français&#8230; Moins sexy du coup&#8230; :S<!--more-->

Dans le cadre de projets chez CBC Informatique j&rsquo;ai eu l&rsquo;occasion d&rsquo;implémenter cette technique plutôt sympa qui rend un menu de navigation tout de suite un peu plus attrayant.

## Pré requis

Pour réaliser cet effet, il nous faudra utiliser deux plugins en plus de la librairie jQuery. Le premier, <a title="jQuery LavaLamp" href="http://plugins.jquery.com/project/lavalamp2" target="_blank">jQuery LavaLamp</a>, nous servira à définir le comportement de notre menu Lava. <a title="jQuery Easing" href="http://plugins.jquery.com/project/Easing" target="_blank">JQuery Easing</a>, notre deuxième plugin est facultatif, mais on va le télécharger par soucis d&rsquo;esthétisme, il nous permettra de faire rebondir notre menu.

## Le marquage HTML

Ici notre marquage HTML est des plus simple, c&rsquo;est une bête liste d&rsquo;éléments non ordonnés. En clair (ou plutôt en code), voilà votre menu :

    <ul>
      <li><a href="#">Item 1</a></li>
      <li><a href="#">Item 2</a></li>
      <li><a href="#">Item 3</a></li>
      <li><a href="#">Item 4</a></li>
      <li><a href="#">Item 5</a></li>
    </ul>

Ok, jusque là pas de soucis, ajoutons maintenant une classe ou une id CSS à notre liste pour agir plus facilement sur le comportement de notre menu. Ici je vais utiliser une id &laquo;&nbsp;menu&nbsp;&raquo; (wouh, supra original tout ça).

Notre sélecteur (notre id &laquo;&nbsp;menu&nbsp;&raquo;) définit, on va pouvoir s&rsquo;attaquer à l&rsquo;instanciation de notre menu Lava dans jQuery.

## Le code Javascript

Comme tout script jQuery, il est préférable d&rsquo;attendre que la page soit chargée totalement avant d&rsquo;agir sur le DOM. Notre javascript débutera donc ainsi :

    $(document).ready(function(){
      //notre code jQuery
    });

On ajoute maintenant l&rsquo;appel au plugin jQuery LavaLamp dans notre script en lui passant les paramètres  souhaités pour l&rsquo;animation:

    $(function() {
      $("#menu").lavaLamp({
        fx: "backout",
        speed: 700,
        click: function(event, menuItem) {
          return false;
        }
      });
    });

Ici, rien de bien compliqué, on définit l&rsquo;effet comme étant élastique, et la vitesse d&rsquo;animation à 800 millisecondes.

La base de notre menu est terminée, maintenant tout est une question de CSS pour styliser votre menu Lava.

## La feuille de style

Pour un très bel effet Lava je vous propose de reprendre la feuille de style de l&rsquo;exemple présent sur le site du plugin LavaLamp, qui pour moi reflète bien cet esprit &laquo;&nbsp;lampe à lave&nbsp;&raquo; avec les petites bulles qui se baladent librement.

Aussi, plutôt que d&rsquo;utiliser des propriétés de CSS3 qui pourraient nous économiser l&rsquo;utilisation d&rsquo;images, je reste en CSS2 et vais réaliser les &laquo;&nbsp;bulles&nbsp;&raquo; avec des images.

Bon allez, envoi du style Marcel!

    #menu {
      position: relative;
      height: 29px;
      width: 421px;
      background: url("images/bg.gif") no-repeat top;
      padding: 15px;
      margin: 10px 0;
      overflow: hidden;
    }
    #menu li {
      float: left;
      list-style: none;
    }
    #menu li.back {
      background: url("images/lava.gif") no-repeat right -30px;
      width: 9px; height: 30px;
      z-index: 8;
      position: absolute;
    }
    #menu li.back .left {
      background: url("images/lava.gif") no-repeat top left;
      height: 30px;
      margin-right: 9px; /* 7px is the width of the rounded shape */
    }
    #menu li a {
      font: bold 14px arial;
      text-decoration: none;
      color: #fff;
      outline: none;
      text-align: center;
      top: 7px;
      text-transform: uppercase;
      letter-spacing: 0;
      z-index: 10;
      display: block;
      float: left;
      height: 30px;
      position: relative;
      overflow: hidden;
      margin: auto 10px;
    }
    #menu li a:hover, #menu li a:active, #menu li a:visited {
      border: none;
    }

Là aussi rien de trop compliqué. Le point important de cette CSS est l&rsquo;utilisation des propriétés position et z-index.

En définissant position à relative dans l&rsquo;id #menu ne change rien au menu lui même par rapport au contenu possible qui se trouverai autour, par contre lorsqu&rsquo;on définit à absolute la position de la classe .back pour les éléments li de la liste #menu permet de bien positionner notre bulle sur le texte.

La propriété z-index:8 utilisée dans la classe .back permet de positionner son contenu au dessus des autre éléments. Enfin, en indiquant un z-index à 10 pour les liens présents dans un élément de liste permet de positionner le texte deux plans au dessus de notre bulle.

Notre menu Lava est terminé.

[Voir la démo](http://demo.angechierchia.com/lavalampmenu/) [Télécharger les fichiers](https://github.com/nighcrawl/demo.chierchia.fr/tree/master/lavalampmenu)

## Conclusion

Ici on a pu voir comment animer un élément de navigation afin de rendre plus attrayante l&rsquo;expérience utilisateur lorsqu&rsquo;on navigue dans un site. On a vu aussi comment bien utiliser les propriétés CSS position et z-index pour positionner un élément à l&rsquo;écran.