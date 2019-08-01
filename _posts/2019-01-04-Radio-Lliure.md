---
layout: post
title: "Proposta de programes per fer una radio a l'institut"
date: 2019-01-04
comments: true
categories: [software]
tags: [radio, open source, software]
---

Aquests dies he estat mirant com poder realitzar una radio a l'institut. L'equipament és bastant lògic: micros, peus de micro, ordinador, targeta de so, i molts cables.

La part de software és amb la que m'he trobat més problemes. Primer avisar que no buscava qualsevol solució, sino una que fos **software lliure**. Són necessaris bastants programes. Aquesta és la meva llista de propostes:

|   | TIPUS | FUNCIÓ | OPCIÓ ESCOLLIDA  | ALTERNATIVES |
|---|------------|-------------|--|--|
|   | Gravació/Edició de so | Poden servir tant per gravar audio amb els micros, com per editar-lo amb cançons | [Audacity](https://www.audacityteam.org/) ![Audacity](/assets/img/radio/audacity.png)| [Ardour](https://ardour.org/) ![Ardour](/assets/img/radio/ardour.png)||
|   | Reproducció d'audio/llistes de reproducció | Són molt coneguts i existeixen varies solucions, i serveixen per reproduir música | [Audacious](https://audacious-media-player.org/) ![Audacious](/assets/img/radio/audacious.png) | Mplayer, VLC, Mixxx |
|   | Emissió en streaming | Serveixen per enviar el que estàs reproduint a un servidor que serà el que ho penjarà a la web  | [BUTT (Broadcasting Using This Tool)](https://danielnoethen.de/) ![butt](/assets/img/radio/butt.png)| Mixxx |
|   | Servidor de broadcasting | Utilitzarem un servidor que ofereix aquest servei. Haurem de crear-nos un compte a la  pàgina web i utilitzar les dades que ens dona i escriure-les al BUTT | [Listen2myradio.com](http://www.listen2myradio.com/) ![listen2myradio](/assets/img/radio/listen2myradio.png)| GISS.tv |
|   | Repositori d'audio | És on pujarem els audios amb els programes gravats, en format mp3 | [iVoox](https://www.ivoox.com/) ![ivoox](/assets/img/radio/ivoox.jpg)| SoundCloud |


Un altre programa que podriem utilitzar és l'**automatitzador de radio**. Són programes per automatitzar programes on no hi haurà ningú controlant, per exemple per gestionar una llista de reproducció per a què enmig apareguin anuncis. Hi han bàsicament dues solucions de software lliure,  GRadio i Rivendell. Les dues opcions massa complicades per el propòsit del projecte. Per tant, he descartat aquesta opció.

El **servidor de broadcasting** també el podem gestionar nosaltres si disposem d'un servidor que estigui obert a internet. És a dir, que l'enroutador de la xarxa redirigeixi els ports al servidor. El servidor que he escollit i que funciona amb BUTT és IceCast.

Us adjunto una llista de plataformes per descarregar música i sons:
* [Free Music Archive](http://freemusicarchive.org/)
* [Jamendo](http://jamendo.es/)
* [CcMixter](http://ccmixter.org/)
* [MusOpen](https://musopen.org/es/)
* [IMLSP](http://www.imslp.org/)
* [NoCopyrightSounds](http://www.youtube.com/user/NoCopyrightSounds)
* [Free Play Music](http://freeplaymusic.com/)
* [Recursos Radio Xtec](http://xtec.gencat.cat/ca/recursos/media/radio/)
* [Banc imatges, videos i sons INTEF](http://recursostic.educacion.es/bancoimagenes/web/)
