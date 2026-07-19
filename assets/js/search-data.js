// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "papers and works in progress, in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "What I&#39;m working on — and what I build for the joy of it.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching-amp-outreach",
          title: "teaching &amp; outreach",
          description: "I learned physics because strangers on the internet taught me. I try to return the favor in person.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Also available as a PDF via the download button below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "the open-source code behind my research — data, catalogs, and simulations.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-writing",
          title: "writing",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-the-emergence-paradox-why-we-build-artificial-minds-while-ignoring-human-ones",
        
          title: 'The Emergence Paradox: Why We Build Artificial Minds While Ignoring Human Ones <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "On the strange asymmetry between how carefully we cultivate machine intelligence and how carelessly we cultivate our own — and what that says about where ideas actually come from.",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@rohit.620159/the-emergence-paradox-why-we-build-artificial-minds-while-ignoring-human-ones-ab17c5bb041a", "_blank");
          
        },
      },{id: "post-beyond-beauty-symmetry-39-s-role-in-physics-and-conservation-laws",
        
          title: 'Beyond Beauty: Symmetry&#39;s Role in Physics and Conservation Laws <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Noether&#39;s theorem and why the deepest laws of physics are statements about what does not change — an essay grown out of a summer spent with the classical and Schrödinger wave equations.",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@rohit.620159/beyond-beauty-symmetrys-role-in-physics-and-conservation-laws-5ea990b0e91e", "_blank");
          
        },
      },{id: "post-from-bullock-carts-to-lunar-landers-india-39-s-skyward-dreams-with-chandrayaan-3",
        
          title: 'From Bullock Carts to Lunar Landers: India&#39;s Skyward Dreams with Chandrayaan-3 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "How a space program once ferried on bicycles and bullock carts reached the lunar south pole — a story about scientific ingenuity under constraint, which is the kind I know best.",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@rohit.620159/from-bullock-carts-to-lunar-landers-unfolding-indias-skyward-dreams-with-isro-s-chandrayaan-3-62efc418812a", "_blank");
          
        },
      },{id: "post-bridging-the-gap-the-crucial-interplay-between-science-and-politics",
        
          title: 'Bridging the Gap: The Crucial Interplay Between Science and Politics <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Science shapes policy and policy shapes science — on why researchers cannot afford to treat geopolitics as someone else&#39;s field.",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@rohit.620159/bridging-the-gap-the-crucial-interplay-between-science-and-politics-c02bd60515fa", "_blank");
          
        },
      },{id: "news-graduated-with-distinction-from-juniata-college-and-received-the-aip-outstanding-undergraduate-research-award-one-of-two-students-recognized-nationally-mortar-board",
          title: 'Graduated with Distinction from Juniata College and received the AIP Outstanding Undergraduate Research...',
          description: "",
          section: "News",},{id: "news-started-as-a-spark-postbac-fellow-at-the-center-for-astrophysics-harvard-amp-amp-smithsonian-working-with-dr-andrea-dupree-and-dr-paul-cristofari-on-stellar-atmospheres-radiative-transfer-and-machine-learning-spectral-emulation",
          title: 'Started as a SPARK Postbac Fellow at the Center for Astrophysics | Harvard...',
          description: "",
          section: "News",},{id: "news-received-the-chambliss-astronomy-achievement-student-award-at-the-247th-aas-meeting-in-phoenix-where-i-presented-our-modeling-of-betelgeuse-s-chromospheric-dynamics-during-the-great-dimming-sparkles",
          title: 'Received the Chambliss Astronomy Achievement Student Award at the 247th AAS meeting in...',
          description: "",
          section: "News",},{id: "news-presented-a-poster-on-a-source-grounded-ai-workflow-for-multilingual-astronomy-outreach-at-the-language-ai-in-the-space-sciences-workshop-at-stsci-baltimore",
          title: 'Presented a poster on a source-grounded AI workflow for multilingual astronomy outreach at...',
          description: "",
          section: "News",},{id: "news-our-keck-observatory-proposal-wolf-rayet-star-environments-in-m33-resolving-spectral-contamination-with-k-band-ao-ifu-spectroscopy-osiris-lgsao-program-u221-was-awarded-a-night-for-2026b-i-served-as-proposal-author-and-co-i-observations-scheduled-for-november-2026",
          title: 'Our Keck Observatory proposal “Wolf-Rayet Star Environments in M33: Resolving Spectral Contamination with...',
          description: "",
          section: "News",},{id: "news-my-first-first-author-paper-wolf-rayet-stars-in-m33-the-impact-of-stellar-crowding-on-spectral-classification-and-mass-loss-diagnostics-has-been-submitted-to-the-astrophysical-journal-code-and-catalogs-are-on-github-telescope",
          title: 'My first first-author paper, “Wolf-Rayet Stars in M33: The Impact of Stellar Crowding...',
          description: "",
          section: "News",},{id: "news-thrilled-to-share-that-i-will-be-joining-nasa-goddard-space-flight-center-as-a-cresst-research-assistant-in-september-2026-working-with-dr-edmund-hodges-kluck-on-galactic-winds-scaling-my-work-on-how-stars-lose-mass-up-to-how-galaxies-do-rocket",
          title: 'Thrilled to share that I will be joining NASA Goddard Space Flight Center...',
          description: "",
          section: "News",},{id: "projects-betelgeuse-39-s-great-dimming",
          title: 'Betelgeuse&amp;#39;s Great Dimming',
          description: "Non-LTE radiative transfer modeling of the mass ejection behind the 2019–2020 dimming",
          section: "Projects",handler: () => {
              window.location.href = "/projects/betelgeuse_great_dimming/";
            },},{id: "projects-computational-physics-playground",
          title: 'Computational physics playground',
          description: "Chaotic pendulums, collapsing star clusters, LIGO signals, and light in time-varying media",
          section: "Projects",handler: () => {
              window.location.href = "/projects/computational_playground/";
            },},{id: "projects-what-fiber-spectrographs-miss-in-crowded-fields",
          title: 'What fiber spectrographs miss in crowded fields',
          description: "DESI vs. Keck/DEIMOS — quantifying velocity biases from spectral blending in M31&#39;s disk",
          section: "Projects",handler: () => {
              window.location.href = "/projects/desi_deimos_kinematics/";
            },},{id: "projects-reproducing-a-1980-solar-atmosphere-classic",
          title: 'Reproducing a 1980 solar atmosphere classic',
          description: "Acoustic pulse propagation with NLTE Mg II synthesis — rebuilding Gouttebroze &amp; Leibacher (1980)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gouttebroze_pulse/";
            },},{id: "projects-neural-emulation-of-magnetic-stellar-spectra",
          title: 'Neural emulation of magnetic stellar spectra',
          description: "Forward-modeling how starspot distributions imprint on cool-star spectra with ML emulators",
          section: "Projects",handler: () => {
              window.location.href = "/projects/magnetic_spot_emulator/";
            },},{id: "projects-wolf-rayet-stars-in-m33",
          title: 'Wolf-Rayet stars in M33',
          description: "How stellar crowding biases spectral classification and mass-loss diagnostics — ApJ paper submitted",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wolf_rayet_m33/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%6F%68%69%74.%72%61%6A@%63%66%61.%68%61%72%76%61%72%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Rohit_Raj_CV.pdf", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/RohitRajAstro", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/rohit-raj-b94002194", "_blank");
        },
      },{
        id: 'social-medium',
        title: 'Medium',
        section: 'Socials',
        handler: () => {
          window.open("https://medium.com/@rohit.620159", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0000-0170-6302", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
