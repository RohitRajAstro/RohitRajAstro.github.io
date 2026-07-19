---
layout: page
title: Wolf-Rayet stars in M33
description: How stellar crowding biases spectral classification and mass-loss diagnostics — ApJ paper submitted
img: assets/img/projects/jwst_wr124.jpg
importance: 3
category: research
---

Wolf-Rayet stars are massive stars in their final act: stripped of hydrogen, driving ferocious winds, and destined for core collapse. Their mass-loss rates set how much material they return to their galaxies — but WR stars live in exactly the kind of dense, star-forming neighborhoods where ground-based spectroscopy struggles to isolate a single star.

<div class="astro-figure">
  <img src="/assets/img/projects/jwst_wr124.jpg" alt="JWST infrared image of Wolf-Rayet star WR 124 and its nebula M1-67" loading="lazy">
  <p class="astro-caption">WR 124 through JWST's eyes — ten thousand years of wind and dust, flung across six light-years.
  <span class="astro-credit">Image: NASA / ESA / CSA / STScI / Webb ERO Production Team (CC BY 4.0)</span></p>
</div>

During my second summer in UC Santa Cruz's Science Internship Program (with Prof. Raja GuhaThakurta and Dr. Robert Williams), I led a study of WR and unusual emission-line stars in M31, M32, and M33 using Keck/DEIMOS spectroscopy and HST PHATTER/PHAST photometry. The key result came from asking an uncomfortable question about our own data: *how many of these spectra are actually blends?* I built a **2D Gaussian crowding-analysis pipeline** on the HST photometry, recovered sub-arcsecond (&lt;0.1″) coordinates for over 90% of the M33 WR sample, and showed that blending in fiber-scale surveys systematically biases WR subtype classifications and the mass-loss rates inferred from equivalent widths.

<div class="astro-figure">
  <img src="/assets/img/projects/wr_star.gif" alt="Simulation of a Wolf-Rayet star's dense stellar wind" loading="lazy">
  <p class="astro-caption">A toy N-particle visualization I built of a Wolf-Rayet wind — the ferocious outflow whose strength we can only measure correctly if we know whose light is in the fiber.</p>
</div>

The paper is **submitted to *The Astrophysical Journal***, with data, catalogs, and code openly available in the [M33-WR-Crowding repository](https://github.com/RohitRajAstro/M33-WR-Crowding). To resolve the worst-blended sources directly, I co-wrote a Keck proposal that was **awarded OSIRIS laser-guide-star AO time for 2026B** (Program U221) — K-band IFU spectroscopy that will separate the WR stars from their contaminating neighbors on the sky.

Along the way I mentored three high-school interns through their first research projects — some of the most rewarding work of the summer.
