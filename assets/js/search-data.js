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
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@rohit.620159/the-emergence-paradox-why-we-build-artificial-minds-while-ignoring-human-ones-ab17c5bb041a?source=rss-82dc17bb82------2", "_blank");
          
        },
      },{id: "post-beyond-beauty-symmetry-s-role-in-physics-and-conservation-laws",
        
          title: 'Beyond Beauty: Symmetry’s Role in Physics and Conservation Laws <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@rohit.620159/beyond-beauty-symmetrys-role-in-physics-and-conservation-laws-5ea990b0e91e?source=rss-82dc17bb82------2", "_blank");
          
        },
      },{id: "post-from-manhattan-to-meta-learning-navigating-the-oppenheimer-ai-paradox",
        
          title: 'From Manhattan to Meta-learning: Navigating the Oppenheimer-AI Paradox <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@rohit.620159/from-manhattan-to-meta-learning-navigating-the-oppenheimer-ai-paradox-6519876e7e7e?source=rss-82dc17bb82------2", "_blank");
          
        },
      },{id: "post-बैलगाड़ी-से-चंद्र-लैंडर-तक-चंद्रयान-3-भारत-की-अंतरिक्ष-अन्वेषण-यात्रा-में-एक-और-मील-का-पत्थर",
        
          title: 'बैलगाड़ी से चंद्र लैंडर तक: चंद्रयान 3 भारत की अंतरिक्ष अन्वेषण यात्रा में... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@rohit.620159/%E0%A4%AC%E0%A5%88%E0%A4%B2%E0%A4%97%E0%A4%BE%E0%A4%A1%E0%A4%BC%E0%A5%80-%E0%A4%B8%E0%A5%87-%E0%A4%9A%E0%A4%82%E0%A4%A6%E0%A5%8D%E0%A4%B0-%E0%A4%B2%E0%A5%88%E0%A4%82%E0%A4%A1%E0%A4%B0-%E0%A4%A4%E0%A4%95-%E0%A4%9A%E0%A4%82%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A4%AF%E0%A4%BE%E0%A4%A8-3-%E0%A4%AD%E0%A4%BE%E0%A4%B0%E0%A4%A4-%E0%A4%95%E0%A5%80-%E0%A4%85%E0%A4%82%E0%A4%A4%E0%A4%B0%E0%A4%BF%E0%A4%95%E0%A5%8D%E0%A4%B7-%E0%A4%85%E0%A4%A8%E0%A5%8D%E0%A4%B5%E0%A5%87%E0%A4%B7%E0%A4%A3-%E0%A4%AF%E0%A4%BE%E0%A4%A4%E0%A5%8D%E0%A4%B0%E0%A4%BE-%E0%A4%AE%E0%A5%87%E0%A4%82-%E0%A4%8F%E0%A4%95-%E0%A4%94%E0%A4%B0-%E0%A4%AE%E0%A5%80%E0%A4%B2-%E0%A4%95%E0%A4%BE-%E0%A4%AA%E0%A4%A4%E0%A5%8D%E0%A4%A5%E0%A4%B0-d4f0bf0e8045?source=rss-82dc17bb82------2", "_blank");
          
        },
      },{id: "post-from-bullock-carts-to-lunar-landers-unfolding-india-s-skyward-dreams-with-isro-s-chandrayaan-3",
        
          title: 'From Bullock Carts to Lunar Landers: Unfolding India’s Skyward Dreams with ISRO’s Chandrayaan... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@rohit.620159/from-bullock-carts-to-lunar-landers-unfolding-indias-skyward-dreams-with-isro-s-chandrayaan-3-62efc418812a?source=rss-82dc17bb82------2", "_blank");
          
        },
      },{id: "post-the-james-webb-space-telescope-a-personal-journey-through-time-and-space",
        
          title: 'The James Webb Space Telescope: A Personal Journey through Time and Space <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@rohit.620159/the-james-webb-space-telescope-a-personal-journey-through-time-and-space-cee5a90074ed?source=rss-82dc17bb82------2", "_blank");
          
        },
      },{id: "post-bridging-the-gap-the-crucial-interplay-between-science-and-politics",
        
          title: 'Bridging the Gap: The Crucial Interplay Between Science and Politics <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@rohit.620159/bridging-the-gap-the-crucial-interplay-between-science-and-politics-c02bd60515fa?source=rss-82dc17bb82------2", "_blank");
          
        },
      },{id: "news-graduated-with-distinction-from-juniata-college-and-received-the-aip-outstanding-undergraduate-research-award-one-of-two-students-recognized-nationally-mortar-board",
          title: 'Graduated with Distinction from Juniata College and received the AIP Outstanding Undergraduate Research...',
          description: "",
          section: "News",},{id: "news-started-as-a-spark-postbac-fellow-at-the-center-for-astrophysics-harvard-amp-amp-smithsonian-working-with-dr-andrea-dupree-and-dr-paul-cristofari-on-stellar-atmospheres-radiative-transfer-and-machine-learning-spectral-emulation",
          title: 'Started as a SPARK Postbac Fellow at the Center for Astrophysics Harvard &amp;amp;amp;...',
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
