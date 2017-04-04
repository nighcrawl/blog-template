---
title: Déployer Jekyll sur un VPS OVH avec GitHub
layout: post
permalink: /blog/deployer-jekyll-sur-ovh-avec-github/
tags: Jekyll, Migration, git
---

Il y a deux mois [j'ai totalement abandonné WordPress pour passer à Jekyll][1], une solution beaucoup moins lourde et plus en phase avec ma façon actuelle de publier sur mon blog. Dans mon précédent billet, j'avais évoqué la possibilité pour moi d'abandonner mon mutualisé OVH en faveur de GitHub Pages.
Je me suis donc amusé beaucoup plus qu'à l'accoutumée avec GitHub et GitHub Pages ces derniers mois, pour voir si la plateforme répondrait à mes attentes.<!--more-->

Pour la faire courte, la réponse est : non, pour l'instant.

## Pourquoi GitHub Pages ne me convient pas ?

La plateforme est géniale, la mise à jour du blog sous Jekyll est instantanée à chaque `git push origin master`, plus besoin de lancer un `jekyll build` pour générer le site mis à jour, GitHub Pages s'occupe de tout !

[1]: {{site.baseurl}}/blog/jekyll