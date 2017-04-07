---
title: Déployer Jekyll sur un VPS avec GitHub
layout: post
permalink: /blog/deployer-jekyll-sur-un-vps-avec-github/
tags: Jekyll, Migration, git
---

Il y a deux mois [j'ai totalement abandonné WordPress][1] pour passer à Jekyll, une solution beaucoup moins lourde et plus en phase avec ma façon actuelle de publier sur mon blog. Dans mon précédent billet, j'avais évoqué la possibilité pour moi d'abandonner mon mutualisé OVH en faveur de GitHub Pages.
Je me suis donc amusé beaucoup plus qu'à l'accoutumée avec GitHub et GitHub Pages ces derniers mois, pour voir si la plateforme répondrait à mes attentes.<!--more-->

Pour la faire courte, la réponse est : non, pour l'instant.

## Pourquoi GitHub Pages ne me convient pas ?

La plateforme est géniale, la mise à jour du blog sous Jekyll est instantanée à chaque `git push origin master`, plus besoin de lancer un `jekyll build` pour générer le site mis à jour, GitHub Pages s'occupe de tout !

Malheureusement, même si il est possible de forcer le HTTPS sur les pages du site, celui-ci doit obligatoirement avoir une URL du style `https://username.github.io/repository`. Impossible de forcer HTTPS si on veut utiliser son propre nom de domaine. Et comme j'avais déjà passé mon site en HTTPS il était hors de question de revenir en arrière, par principe.

Et puis, comme ça l'air de rien une petite newsletter OVH tombe dans ma boîte mail, proposant un nom de domaine en `.me` à -70%, du coup je me laisse tenter et puis une chose en entrainant une autre, je décide de prendre un petit VPS à pas cher...

## Configuration du VPS

[1]: {{site.baseurl}}/blog/jekyll