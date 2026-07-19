---
layout: page
title: What fiber spectrographs miss in crowded fields
description: DESI vs. Keck/DEIMOS — quantifying velocity biases from spectral blending in M31's disk
img: assets/img/projects/nasa_m31_phat.jpg
importance: 5
category: research
---

Stellar velocity dispersions trace a galaxy's merger history — but only if the velocities are right. When the Dark Energy Spectroscopic Instrument (DESI) began observing M31, it promised radial velocities for thousands of stars at once, an enormous leap over the ~130-star slit masks of Keck/DEIMOS. With Prof. Raja GuhaThakurta, I asked whether that leap came with a hidden cost: DESI's 1.5″ fibers are wide enough to swallow more than one star in M31's crowded disk.

<div class="astro-figure">
  <img src="/assets/img/projects/nasa_m31_phat.jpg" alt="Hubble PHAT panorama of the Andromeda Galaxy's crowded stellar disk" loading="lazy">
  <p class="astro-caption">Andromeda's disk resolved into individual stars by Hubble's PHAT survey — beautiful, and crowded enough to sneak two stars into one fiber.
  <span class="astro-credit">Image: NASA / ESA / J. Dalcanton, B.F. Williams, L.C. Johnson (UW), the PHAT team, R. Gendler</span></p>
</div>

I performed a one-to-one radial-velocity comparison between DESI and DEIMOS for matched stars and, after correcting for HI rotation, found **systematic velocity discrepancies in the disk** — the signature of spectra blended inside the fiber, artificially suppressing measured kinematics. I also built an HST-based crowding-contamination metric to rank targets by blending severity, which later became the seed of my Wolf-Rayet crowding pipeline.

I presented this work at the 243rd AAS meeting (January 2024). The broader point has stayed with me: every instrument answers the sky through its own aperture, and knowing the difference between the star and the aperture is where trustworthy astrophysics starts.
