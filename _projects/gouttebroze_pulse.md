---
layout: page
title: Reproducing a 1980 solar atmosphere classic
description: Acoustic pulse propagation with NLTE Mg II synthesis — rebuilding Gouttebroze & Leibacher (1980)
img: assets/img/projects/nasa_sun_flare.jpg
importance: 5
category: for fun
---

Some of my favorite learning happens by rebuilding old results from scratch. In [gouttebroze-pulse](https://github.com/RohitRajAstro/gouttebroze-pulse), I reproduce Experiment (a) from Gouttebroze & Leibacher (1980, ApJ 238, 1134): an **acoustic pulse propagating through a 1D solar atmosphere**, with the resulting Mg II line response synthesized in non-LTE using the RH code.

<div class="astro-figure">
  <img src="/assets/img/projects/nasa_sun_flare.jpg" alt="SDO ultraviolet image of a solar flare erupting from the Sun's limb" loading="lazy">
  <p class="astro-caption">The Sun's atmosphere in motion, seen by SDO — the same restless chromosphere the 1980 paper modeled with pencil, patience, and a fraction of my laptop's compute.
  <span class="astro-credit">Image: NASA / SDO / GSFC</span></p>
</div>

Beyond the nostalgia, this was deliberate training for my Betelgeuse work — the same physics (waves and flows perturbing a chromosphere, read out through Mg II lines) at solar scale, where the answer is known and my pipeline could be checked against a 45-year-old benchmark. Reproducing seminal papers is, I think, one of the most honest ways to learn a field: you discover exactly which "obvious" steps the authors never wrote down.
