---
layout: page
title: "tinyCode"
p5js: true
highlight: true
---

El 16 de decembre del 2020 vaig participar en una exhibició  de sketchs anomenada [#tinyCode](https://twitter.com/search?q=tinyCode&src=typed_query) organitzats per [Creative Code Madrid](https://twitter.com/CCodeMadrid).
Els sketchs teníen una restricció i és que el seu codi no podía superar els 256 caràcters. Aquí incloc els sketchs que he programat jo amb el seu codi minimitzat i després mostro el "primer codi" sense minimitzar.

### Primer sketch: Noisy Mix Colors

{% include sketch.html sketch="/sketchs/noisymixcolors.js" id="noisyMixColors" %}

<pre><code class="javascript">
  let time = 0
  let colors = [];
  let width = 192;
  let height = 157;
  let lines = 7;
  function setup(){
    createCanvas(width,height);
    noStroke();
    for(j = 0;j < lines;j++)
      colors.push([random(255),random(255),random(255),100]);
  }
  function draw(){
    background(0);
    let i = 0;
    time += 0.4;
    for(d = time;d < time+100;d++){
      for(j = 0;j < lines;j++){
        y = noise(d*.015,j)*200;
        fill(colors[j]);
        circle(i*width/100,y,20);
      }
      i++;
    }
  }</code></pre>

  ### Segon sketch: Center

  {% include sketch.html sketch="/sketchs/center.js" id="CenterColors" %}
