---
title: Scraper un site Web en Python
layout: post
permalink: /blog/scraper-web-python
image: /contents/uploads/python.jpg
tags: web scraping, python
---
Aujourd'hui on va voir comment utiliser Python afin de scraper une page ou un site Web et ainsi se constituer une base de données avec les données qui nous intéresseront.

Le scraping de sites Web fait partie de mon quotidien chez Ibakus Europe ces derniers mois, dans le cadre du développement d'une fonctionnalité vraiment pratique pour les utilisateurs de notre application de lutte contre le blanchiment d'argent et le financement du terrorisme.
Le scraping de différentes sources nous a permit de constituer une base de données des sociétés européennes, permettant à nos utilisateurs de compléter leur fichier KYC avec les informations dont on dispose sur leurs clients, en plus des informations qu'ils ont en leur possession.

Assez parlé d'Ibakus, passons au vif du sujet : la création d'un scraper web.

## Création du scraper
Le but du scraper que l'on va écrire ici sera de récupérer les informations concernant les nouvelles sociétés luxembourgeoises créées. Nous allons donc faire un scraping du [site du RCSL](https://www.rcsl.lu/).

Pour cela nous allons utiliser la librairie Splinter, qui nous permettra à notre script de parcourir les pages comme si on le faisait nous même. Je vous invite à lire [la documentation de la librairie](http://splinter.readthedocs.io/en/latest/) pour ce qui concerne son installation et les différentes fonctions disponibles.


    # coding: utf8
    from splinter import Browser # importe l'objet Browser de la librairie

    with Browser() as browser:
        url = "https://www.rcsl.lu"
        browser.visit(url)
        # Effectue un clic sur le lien vers les publications du journal officiel
        browser.click_link_by_partial_href('mjrcs/jsp/DisplayOfficialJournalAction')
        # Vérifie que le tableau ayant la classe `commonTable` existe avant de passer à la suite
        if browser.is_element_present_by_css('table.commonTable'):
            # Récupère l'URL vers le fichier XML des publications du jour
            xmlfile = browser.find_by_css('table.commonTable')
                             .find_by_css('tbody')
                             .find_by_css('a')[3]
            browser.visit(xmlfile['href'])
            response = browser.html.encode('utf8', 'xmlcharrefreplace')
            # Enregistre le contenu du fichier XML dans un fichier en local
            with open('notices.xml', 'w') as fh:
                fh.write(response)