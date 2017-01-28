---
id: 1260
title: Notifications à la Growl avec jQuery
date: 2011-08-26T21:04:51+00:00
author: Ange Chierchia
layout: post
guid: http://chierchia.fr/?p=1260
permalink: /blog/notifications-growl-jquery/
dsq_thread_id:
  - "919611787"
Hide SexyBookmarks:
  - "0"
Hide OgTags:
  - "0"
image: /contents/uploads/2012/01/thumb-growl-notification.jpg
categories:
  - Ajax/JavaScript
tags:
  - growl
  - jQuery
  - notification
  - snippet
---
Aujourd&rsquo;hui, on va voir comment mettre en place facilement des notifications utilisateur un peu à la façon de Growl, très connu des Mac users.<!--more-->

Du côté du markup HTML, notre notification se résumera à pas grand chose : un simple bloc fera l&rsquo;affaire pour contenir notre message. On peu aussi rajouter une icône/image afin de donner une information supplémentaire sur la nature de la notification. Ça n&rsquo;a vraiment aucune importance, pourvu que l&rsquo;information affichée soit courte. Voici mon marquage :

    <div class="notify">
      <span class="icon"></span>
      <p>Je suis une notification. Je vais dispara&icirc;tre! Phasellus elit nunc, tristique sed sodales sit amet, tincidunt sed.</p>
    </div>

Pour animer notre notification on aurait pu choisir CSS3 comme l&rsquo;a fait <a title="Pop From Top Notification" href="http://css-tricks.com/13815-pop-from-top-notification/" target="_blank">Chris Coyer</a>, mais je préfère utiliser jQuery pour ne pas pénaliser les navigateurs qui ne prendraient pas en compte les animations CSS, et pour m&rsquo;éviter une belle tartine de définition de style :D. Voilà le Javascript :

    $(document).ready(function(){
      $(".notify").css('display','none').delay(500).fadeIn(400).delay(5500).fadeOut(400);
      $(".notify").hover(function(){
        $(this).stop(true,true).fadeIn();
      },function(){
        $(this).stop(true,true).delay(500).fadeIn(400).delay(5500).fadeOut(400);
      });
    });

Le script ci-dessus permet de cacher notre notification au chargement de la page, puis après une demi seconde d&rsquo;attente d&rsquo;afficher notre notification en fondue pendant cinq secondes et demi pour enfin la faire disparaitre en fondue.

Dans le cas où notre notification est survolé par la souris (fonction `hover()`) on stoppe l&rsquo;animation jusqu&rsquo;à ce que la souris sorte de la notification. Une fois la souris hors de la notification, on reprend l&rsquo;animation après avoir attendu une demi seconde.

Passons maintenant à notre feuille de style. Ce qu&rsquo;il est important de noter, c&rsquo;est que notre bloc contenant le message informatif doit être en `position : absolute` afin de le positionner, non pas par rapport à son conteneur mais plutôt par rapport au document HTML lui même.

    .notify {
      position: absolute;
      top: 8; right: 8px;
      max-width: 246px;
      background: rgba(0,0,0,0.7); padding: 25px;
      font-size: 0.8em; color: #fff;
      border: 2px solid #222;
      border-radius: 8px;
      box-shadow: 0 3px 5px rgba(0,0,0,0.4);
    }
    .notify:hover {
      border: 2px solid #eee;
    }
    .notify p {
      margin: 0;
      cursor: default;
    }

    .notify span.icon {
      display: block;
      width: 40px; height: 40px;
      background: url(notify_icon.png) no-repeat;
      position: absolute;
      top: 10px; left: -30px;
    }

<p data-height="265" data-theme-id="0" data-slug-hash="zNBEpq" data-default-tab="css,result" data-user="nighcrawl" data-embed-version="2" data-pen-title="zNBEpq" data-preview="true" class="codepen">See the Pen <a href="http://codepen.io/nighcrawl/pen/zNBEpq/">zNBEpq</a> by Ange Chierchia (<a href="http://codepen.io/nighcrawl">@nighcrawl</a>) on <a href="http://codepen.io">CodePen</a>.</p>