---
layout: page
title: Neural emulation of magnetic stellar spectra
description: Forward-modeling how starspot distributions imprint on cool-star spectra with ML emulators
img: assets/img/projects/spotted_star.png
importance: 2
category: research
---

Magnetic fields shape nearly everything interesting about cool stars — their activity, their winds, and the "noise" that hides small exoplanets in radial-velocity surveys. But measuring stellar magnetism from a spectrum is an inverse problem: spots of different sizes, temperatures, and locations can conspire to produce similar signatures, and computing physically accurate spectra for every configuration is prohibitively expensive.

My second project at the CfA attacks the expense head-on. I am building a **neural spectral emulator** — trained on grids of radiative-transfer syntheses — that forward-models the effect of arbitrary magnetic spot distributions on high-resolution cool-star spectra in milliseconds instead of hours. A fast, differentiable emulator makes it feasible to do full Bayesian inference on spot geometries and magnetic filling factors directly from data.

<div class="astro-figure">
  <img src="/assets/img/projects/spotted_star.png" alt="A spotted stellar surface and the resulting distorted absorption line profile" loading="lazy">
  <p class="astro-caption">The inverse problem in one picture: spots reshape an absorption line — shallower, broader, subtly shifted — and the emulator learns this mapping fast enough to run inference on it.</p>
</div>

The target application is the next generation of precision spectrographs — instruments like **G-CLEF on the Giant Magellan Telescope** — where disentangling a star's intrinsic magnetic variability from planetary signals will be the difference between detecting an Earth-analog and being fooled by a spot.
