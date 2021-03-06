---
layout: post
title: "Música i fraccions"
table: true
date: 2018-08-09
comments: true
category: fraccions
tags: [matematiques, fraccions, musica, grafics, compas]
---

Estic preparant un petit projecte a mates 1r de la ESO per a què l'alumnat treballi les fraccions i els enters amb música. Les fraccions amb el ritme i els enters amb els intervals. No tinc gaire clar quin serà el producte final. Estic pensant en què hagin de programar (amb [Sonic Pi](https://sonic-pi.net/)) el ritme i la melodia d'una canço que a ells els hi agradi i tinguin la partitura, i per això necessiten conèixer el ritme en fraccions i els enters per la melodia.

Els objectius seran varis: Identificar les fraccions a les figures musicals. Comprovar que la suma de les figures musicals dona el total del compas. Reconeixer si un compas està ben format rítmicament utilitzant les fraccions.

La primera part del projecte és la relacionada amb les fraccions. L'alumnat haurà d'identificar les fraccions que representen les figures musicals.

Les figures musicals més conegudes són aquestes:

![Notes Musicals](/assets/img/notesmusicals.png)

La rodona, la blanca, la negra, la corxera i la semicorxera.

Aquestes figures estan relacionades entre elles tal com es veu a l'anterior imatge. Una rodona és el doble d'una blanca, o una blanca és la meitat d'una rodona.

Vull explotar aquesta relació entre les notes en forma de fraccions. Com relacionar les fraccions amb les notes crea un dilema.

La rodona en anglès rep el nom de "whole note", la blanca rep el nom de "half note", la negra rep el nom de "quarter note" i així successivament. Tenin en compte això, la unitat hauria de ser la rodona (1), la blanca hauria de ser la meitat (1/2) i la negre, un quart (1/4).

Aquesta relació té un problema, i és que només funciona si suposes que el compas és quaternari. No funciona per compassos binaris ni ternaris.

En canvi, podriem assignar la unitat a la pulsació. És a dir, la negra. I per tant, la rodona seria un 4, la blanca un 2, la negra un 1, la corxera una meitat (1/2), etc. D'aquesta forma podrien treballar diferents compassos.

Aquí podeu veure el que podria ser una pregunta dels exercicis: Com podem representar amb una suma de fraccions la suma de les notes següents: Una blanca més una negra més una corxera. Tenim dues possibilitats.

Primera:

Al sumar-les, 1/2 + 1/4 + 1/8 no ens dona 1 (ens dona 7/8), per tant, no és un compas complert.

Segona:

Al sumar-les, 2 + 1 + 1/2 tampoc ens dona 4 (ens dona 7/2), per tant tampoc és un compas complert.

![Notes Musicals](/assets/img/sumafraccions.png)

La suma de fraccions, també les podem representar amb gràfics de sectors. El primer gràfic és sobre 1, per tant, la unitat és la rodona. El gràfic representa fàcilment el que es vol. És un gràfic de sectors que no està complert. Li falta 1/8 per està complert.

El segon gràfic té com a unitat la pulsació, és a dir, la negra. Per tant, hem de dibuixar quatre gràfics de sectors. L'últim està incomplert, perquè li falta la última corxera (1/2).

![Notes Musicals](/assets/img/grafics.png)

Resum:

|   | ASSIGNACIÓ | PROS | CONTRAS  |
|---|------------|-------------|--|
|   | La rodona = 1 | Gràficament es veu molt bé, perquè la unitat és el compas. I per tant, els gràfics de barres queden bé.  Es treballen amb divisions de la unitat. | Només es pot treballar amb el compas quaternari. |
|   | La negra = 1 | És la forma en què l'alumnat ha après a comptar.  És la forma més intuitiva de comptar. A partir de la pulsació. Es poden treballar també amb compassos ternaris i binaris. | Els gràfics superaran la unitat.  |

Espero haver-me explicat millor que al twitter.Que en penseu? Crec que utilitzaré la pulsació com a unitat. Ens dona més possibilitats, i és més intuitiu.
