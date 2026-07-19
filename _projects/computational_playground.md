---
layout: page
title: Computational physics playground
description: Star formation, LIGO signals, light in time-varying media, and golden-ratio galaxies
img: assets/img/projects/fibonacci_poster.jpg
importance: 6
category: for fun
---

A running collection of simulations I've built to teach myself numerical physics — most of them live in [computational-fun](https://github.com/RohitRajAstro/computational-fun_physics-astrophysics-sims). None of these were assigned; they exist because translating physical law into working code is my favorite way to understand it.

**Finding GW150914.** At Case Western, I implemented matched filtering and Fourier analysis to re-detect the first gravitational wave in real LIGO data, then turned the pipeline into teaching materials.

<div class="astro-figure">
  <img src="/assets/img/projects/gw_fft.gif" alt="Animated Fourier analysis of the GW150914 gravitational wave signal" loading="lazy">
  <p class="astro-caption">Pulling GW150914's chirp out of the noise, one Fourier window at a time.</p>
</div>

**A molecular cloud collapses.** An N-body toy model of dense-core collapse and the initial mass function — where I first learned code profiling and parallelization, because the naive version was unusably slow.

<div class="astro-figure">
  <img src="/assets/img/projects/star_formation.gif" alt="N-body simulation of molecular cloud core collapse" loading="lazy">
  <p class="astro-caption">A dense core collapsing over ~0.3 Myr, particles colored by infall velocity.</p>
</div>

**Light in time-varying media.** With Dr. T. V. Raziman (Imperial College London), I wrote FDTD simulations of electromagnetic waves in media whose permittivity changes in time — including optical cloaking in quasi-crystals — reproducing results from the seminal literature.

<div class="astro-figure">
  <img src="/assets/img/projects/em_wave.gif" alt="FDTD simulation of an electromagnetic wave in a medium with time-varying permittivity" loading="lazy">
  <p class="astro-caption">An EM wave meeting a medium whose optical properties change in time.</p>
</div>

**Golden-ratio galaxies.** Phyllotaxis spirals, Fibonacci networks, and a chaotic double pendulum or two — sometimes the point is just that mathematics is beautiful.

<div class="astro-figure">
  <img src="/assets/img/projects/fibonacci_galaxy.gif" alt="Animated phyllotaxis spiral built from the golden angle" loading="lazy">
  <p class="astro-caption">A galaxy grown from nothing but the golden angle, 137.5° at a time — the same ratio that quietly organizes this website's typography.</p>
</div>
