export default {
    locale: 'en',
    htmlLang: 'en',
    languageName: 'English',
    title: 'MathJSLab - browser-based MATLAB/Octave-like interpreter',
    description:
        'MathJSLab is an interpreter with syntax like MATLAB/Octave, intended for educational purposes and available in the browser.',
    descriptionHtml:
        'MathJSLab is an interpreter with syntax like <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg;/<a class="software-link" href="https://octave.org/" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/octave-logo.svg" alt="" aria-hidden="true">Octave</a>, intended for educational purposes and available in the browser.',
    nav: {
        menu: 'Menu',
        mainNavLabel: 'Main navigation',
        languageLabel: 'Language',
        languageMenu: 'Language',
        overview: 'Overview',
        pipeline: 'Flow',
        features: 'Features',
        ecosystem: 'Ecosystem',
        publication: 'Publication',
        archive: 'Archive',
        resources: 'Resources',
        contact: 'Contact',
        license: 'License',
        launch: 'Open app',
        launchShort: 'App',
        launchCalc: 'Open Calculator',
    },
    hero: {
        kicker: 'TypeScript numerical computing for the browser',
        heading: 'MathJSLab brings a mathematical lab to the web.',
        leadHtml:
            '<strong>MathJSLab</strong> simulates a subset of the <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg;/<a class="software-link" href="https://octave.org/" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/octave-logo.svg" alt="" aria-hidden="true">Octave</a> language. Use one of the online applications to explore <strong>MathJSLab</strong> features. Use the <a class="software-link npm-wordmark-link" href="https://www.npmjs.com/package/mathjslab" target="_blank" rel="noopener noreferrer"><img class="software-icon npm-wordmark-icon" src="/img/Npm-logo.svg" alt="npm"> package</a> in your project to run expressions, functions and matrices, with <a href="https://developer.mozilla.org/en-US/docs/Web/MathML" target="_blank" rel="noopener noreferrer">MathML</a>-rendered results and full compatibility in the web browser.',
        primaryCtaHtml: 'Open <strong>MathJSLab</strong> app',
        calculatorCta: 'Open Calculator',
        secondaryCta: 'View source on GitHub',
        installLabel: 'Install package',
        terminalTitle: 'Interactive session',
        promptOne: 'A = [1 2; 3 4]',
        outputOneMathML:
            '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><mo>[</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>2</mn></mtd></mtr><mtr><mtd><mn>3</mn></mtd><mtd><mn>4</mn></mtd></mtr></mtable><mo>]</mo></mrow></math>',
        promptTwo: 'det(A)',
        outputTwoMathML:
            '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>det</mi><mo>(</mo><mi>A</mi><mo>)</mo><mo>=</mo><mo>-</mo><mn>2</mn></mrow></math>',
        promptThree: 'f = @(x) a*x^2+b*x+c',
        outputThreeMathML:
            '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>f</mi><mo>=</mo><mo>@</mo><mo>(</mo><mi>x</mi><mo>)</mo><mi>a</mi><mo>&#x2062;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>b</mi><mo>&#x2062;</mo><mi>x</mi><mo>+</mo><mi>c</mi></mrow></math>',
    },
    pipeline: {
        kicker: 'Execution flow',
        title: 'How MathJSLab processes an expression',
        leadHtml:
            '<strong>MathJSLab</strong> reads the input, parses it into an internal representation, evaluates expressions and commands, and renders mathematical results as <a href="https://developer.mozilla.org/en-US/docs/Web/MathML" target="_blank" rel="noopener noreferrer">MathML</a> for the browser.',
        image: '/img/mathjslab-pipeline-en.svg',
        imageAlt:
            'Diagram showing the MathJSLab pipeline from user input through parsing, evaluation, command processing and MathML rendering.',
        carouselOpenLabel: 'Open pipeline carousel',
        carouselThumb: '/img/mathjslab-pipeline-en.webp',
        carouselPanels: [
            '/img/mathjslab-pipeline-en-1-grammar-panel.svg',
            '/img/mathjslab-pipeline-en-2-code-panel.svg',
            '/img/mathjslab-pipeline-en-3-ast-panel.svg',
            '/img/mathjslab-pipeline-en-4-evaluator-panel.svg',
        ],
    },
    highlights: [
        {
            title: 'Interpreter engine',
            textHtml:
                'The core package is written in <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a> and simulates a subset of <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg;/<a class="software-link" href="https://octave.org/" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/octave-logo.svg" alt="" aria-hidden="true">Octave</a> syntax.',
        },
        {
            title: 'Browser-ready app',
            textHtml:
                'The web app is a package demonstration <a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" target="_blank" rel="noopener noreferrer">Progressive Web App (PWA)</a> with <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components" target="_blank" rel="noopener noreferrer">Web Components</a>, responsive layout, <a href="https://www.markdownguide.org/" target="_blank" rel="noopener noreferrer">Markdown</a> help, schemes and diagrams with <a href="https://mermaid.js.org/" target="_blank" rel="noopener noreferrer">Mermaid</a> and charts with <a href="https://plotly.com/" target="_blank" rel="noopener noreferrer">Plotly</a>.',
        },
        {
            title: 'Multilingual help',
            textHtml:
                'Command help is organized in <a href="https://github.com/MathJSLab/mathjslab-app/blob/main/help/README.md" target="_blank" rel="noopener noreferrer">English</a>, <a href="https://github.com/MathJSLab/mathjslab-app/blob/main/help/LEIAME.md" target="_blank" rel="noopener noreferrer">Portuguese</a> and <a href="https://github.com/MathJSLab/mathjslab-app/blob/main/help/LEAME.md" target="_blank" rel="noopener noreferrer">Spanish</a>.',
        },
        {
            title: 'Mathematical output',
            textHtml:
                'The interpreter works with arbitrary precision arithmetic through <a href="https://mikemcl.github.io/decimal.js/" target="_blank" rel="noopener noreferrer">decimal.js</a> and can generate expressions and results rendered in <a href="https://developer.mozilla.org/en-US/docs/Web/MathML" target="_blank" rel="noopener noreferrer">MathML</a>.',
        },
    ],
    ecosystemTitle: 'Project ecosystem',
    ecosystemLeadHtml:
        'The <strong>MathJSLab</strong> Organization on GitHub owns the project repositories: the <a class="software-link npm-wordmark-link" href="https://www.npmjs.com/package/mathjslab" target="_blank" rel="noopener noreferrer"><img class="software-icon npm-wordmark-icon" src="/img/Npm-logo.svg" alt="npm"> package</a>, the web applications, the project page and the organization profile itself.',
    repositories: [
        {
            name: 'mathjslab',
            role: 'Interpreter package',
            text:
                'TypeScript engine published to npm, with parser, evaluator and mathematical rendering components.',
            href: 'https://github.com/MathJSLab/mathjslab',
            icon: '/img/Octicons-mark-github.svg',
        },
        {
            name: 'mathjslab-app',
            role: 'Demo application',
            text:
                'Progressive web app that exposes the interpreter in a responsive browser interface.',
            href: 'https://github.com/MathJSLab/mathjslab-app',
            icon: '/img/Octicons-mark-github.svg',
        },
        {
            name: 'mathjslab-calc',
            role: 'Calculator application',
            textHtml:
                'Scientific calculator prompt application hosted at calc.mathjslab.com and powered by the <strong>MathJSLab</strong> package.',
            href: 'https://github.com/MathJSLab/mathjslab-calc',
            icon: '/img/Octicons-mark-github.svg',
        },
        {
            name: 'mathjslab-batch',
            role: 'Batch application',
            textHtml:
                'Batch-processing web application hosted at batch.mathjslab.com and powered by the <strong>MathJSLab</strong> package.',
            href: 'https://github.com/MathJSLab/mathjslab-batch',
            icon: '/img/Octicons-mark-github.svg',
        },
        {
            name: 'mathjslab-github',
            role: 'Organization support',
            textHtml:
                'Shared profile, repository templates and project-wide support material for <strong>MathJSLab</strong>.',
            href: 'https://github.com/MathJSLab',
            icon: '/img/Octicons-mark-github.svg',
        },
    ],
    publicationTitle: 'Publication and identifiers',
    publicationLeadHtml:
        '<strong>MathJSLab</strong> is published as free software, distributed as a reusable package and with persistent identifiers assigned to it.',
    publicationTextHtml:
        'The interpreter package is published in the npm registry as mathjslab. The source code is maintained under the <strong>MathJSLab</strong> organization on GitHub, and the package, the companion web application, the calculator and the batch application have DOI and ISBN identifiers so they can be cited in academic and institutional contexts.',
    publications: [
        {
            name: 'mathjslab',
            roleHtml:
                '<a class="software-link npm-wordmark-link" href="https://www.npmjs.com/package/mathjslab" target="_blank" rel="noopener noreferrer"><img class="software-icon npm-wordmark-icon" src="/img/Npm-logo.svg" alt="npm"> package</a>',
            text:
                'The TypeScript interpreter package is distributed through npm, mirrored through jsDelivr and licensed under MIT.',
            href: 'https://www.npmjs.com/package/mathjslab',
            icon: '/img/Npm-logo.svg',
            badges: [
                {
                    alt: 'NPM Version',
                    src: 'https://img.shields.io/npm/v/mathjslab',
                    href: 'https://www.npmjs.com/package/mathjslab',
                },
                {
                    alt: 'NPM Last Update',
                    src: 'https://img.shields.io/npm/last-update/mathjslab',
                    href: 'https://www.npmjs.com/package/mathjslab',
                },
                {
                    alt: 'Website',
                    src: 'https://img.shields.io/website?url=https%3A%2F%2Fmathjslab.com%2F',
                    href: 'https://mathjslab.com/',
                },
                {
                    alt: 'CircleCI',
                    src: 'https://dl.circleci.com/status-badge/img/gh/MathJSLab/mathjslab/tree/main.svg?style=svg',
                    href: 'https://dl.circleci.com/status-badge/redirect/gh/MathJSLab/mathjslab/tree/main',
                },
                {
                    alt: 'GitHub Created At',
                    src: 'https://img.shields.io/github/created-at/MathJSLab/mathjslab',
                    href: 'https://github.com/MathJSLab/mathjslab',
                },
                {
                    alt: 'MIT License',
                    src: 'https://img.shields.io/npm/l/mathjslab',
                    href: 'https://github.com/MathJSLab/mathjslab/blob/main/LICENSE',
                },
                {
                    alt: 'DOI 10.5281/zenodo.8396265',
                    src: 'https://img.shields.io/badge/DOI-10.5281%2Fzenodo.8396265-blue?style=flat&link=https://doi.org/10.5281/zenodo.8396265',
                    href: 'https://doi.org/10.5281/zenodo.8396265',
                },
                {
                    alt: 'ISBN 978-65-00-82338-7',
                    src: 'https://img.shields.io/badge/ISBN-978--65--00--82338--7-green?style=flat&link=https://grp.isbn-international.org/search/piid_solr?keys=978-65-00-82338-7',
                    href: 'https://grp.isbn-international.org/search/piid_solr?keys=978-65-00-82338-7',
                },
                {
                    alt: 'OpenAIRE',
                    src: 'https://img.shields.io/badge/OpenAIRE-blue?style=flat&link=https://explore.openaire.eu/search/advanced/research-outcomes?f0=q&fv0=MathJSLab',
                    href: 'https://explore.openaire.eu/search/advanced/research-outcomes?f0=q&fv0=MathJSLab',
                },
                {
                    alt: 'NPM Downloads',
                    src: 'https://img.shields.io/npm/d18m/mathjslab',
                    href: 'https://www.npmjs.com/package/mathjslab',
                },
                {
                    alt: 'NPM Downloads per week',
                    src: 'https://img.shields.io/npm/dw/mathjslab',
                    href: 'https://www.npmjs.com/package/mathjslab',
                },
                {
                    alt: 'jsDelivr hits npm',
                    src: 'https://img.shields.io/jsdelivr/npm/hy/mathjslab',
                    href: 'https://www.jsdelivr.com/package/npm/mathjslab',
                },
                {
                    alt: 'Libraries.io SourceRank',
                    src: 'https://img.shields.io/librariesio/sourcerank/npm/mathjslab',
                    href: 'https://libraries.io/npm/mathjslab/sourcerank',
                },
                {
                    alt: 'NPM Unpacked Size',
                    src: 'https://img.shields.io/npm/unpacked-size/mathjslab',
                    href: 'https://www.npmjs.com/package/mathjslab',
                },
                {
                    alt: 'NPM package minimized gzipped size',
                    src: 'https://img.shields.io/bundlejs/size/mathjslab',
                    href: 'https://www.npmjs.com/package/mathjslab',
                },
            ],
        },
        {
            name: 'mathjslab-app',
            role: 'web application',
            text:
                'The browser application demonstrates the interpreter, is maintained on GitHub and has its own DOI and ISBN records.',
            href: 'https://github.com/MathJSLab/mathjslab-app',
            icon: '/img/Octicons-mark-github.svg',
            badges: [
                {
                    alt: 'Netlify Status',
                    src: 'https://api.netlify.com/api/v1/badges/6cec5ea5-c2dd-4b90-a3c1-ff95c8d1f521/deploy-status',
                    href: 'https://app.netlify.com/sites/mathjslab-app/deploys',
                },
                {
                    alt: 'Website',
                    src: 'https://img.shields.io/website?url=https%3A%2F%2Fmathjslab.com%2F',
                    href: 'https://mathjslab.com/',
                },
                {
                    alt: 'CircleCI',
                    src: 'https://dl.circleci.com/status-badge/img/gh/MathJSLab/mathjslab-app/tree/main.svg?style=svg',
                    href: 'https://dl.circleci.com/status-badge/redirect/gh/MathJSLab/mathjslab-app/tree/main',
                },
                {
                    alt: 'GitHub Created At',
                    src: 'https://img.shields.io/github/created-at/MathJSLab/mathjslab-app',
                    href: 'https://github.com/MathJSLab/mathjslab-app',
                },
                {
                    alt: 'MIT License',
                    src: 'https://img.shields.io/badge/License-MIT-brightgreen.svg',
                    href: 'https://github.com/MathJSLab/mathjslab-app/blob/main/LICENSE',
                },
                {
                    alt: 'DOI 10.5281/zenodo.8396263',
                    src: 'https://img.shields.io/badge/DOI-10.5281%2Fzenodo.8396263-blue?style=flat&link=https://doi.org/10.5281/zenodo.8396263',
                    href: 'https://doi.org/10.5281/zenodo.8396263',
                },
                {
                    alt: 'ISBN 978-65-00-84828-1',
                    src: 'https://img.shields.io/badge/ISBN-978--65--00--84828--1-green?style=flat&link=https://grp.isbn-international.org/search/piid_solr?keys=978-65-00-84828-1',
                    href: 'https://grp.isbn-international.org/search/piid_solr?keys=978-65-00-84828-1',
                },
                {
                    alt: 'OpenAIRE',
                    src: 'https://img.shields.io/badge/OpenAIRE-blue?style=flat&link=https://explore.openaire.eu/search/advanced/research-outcomes?f0=q&fv0=MathJSLab',
                    href: 'https://explore.openaire.eu/search/advanced/research-outcomes?f0=q&fv0=MathJSLab',
                },
                {
                    alt: 'jsDelivr hits',
                    src: 'https://img.shields.io/jsdelivr/gh/hy/MathJSLab/mathjslab-app',
                    href: 'https://cdn.jsdelivr.net/gh/MathJSLab/mathjslab-app/',
                },
            ],
        },
        {
            name: 'mathjslab-calc',
            role: 'calculator application',
            text:
                'The calculator application offers a simplified prompt interface hosted at calc.mathjslab.com, with its own DOI and project publication badges.',
            href: 'https://github.com/MathJSLab/mathjslab-calc',
            icon: '/img/Octicons-mark-github.svg',
            badges: [
                {
                    alt: 'Netlify Status',
                    src: 'https://api.netlify.com/api/v1/badges/17019e19-5270-42e0-b119-8c8b230f953f/deploy-status',
                    href: 'https://app.netlify.com/projects/mathjslab-calc/deploys',
                },
                {
                    alt: 'Website',
                    src: 'https://img.shields.io/website?url=https%3A%2F%2Fcalc.mathjslab.com%2F',
                    href: 'https://calc.mathjslab.com/',
                },
                {
                    alt: 'GitHub Created At',
                    src: 'https://img.shields.io/github/created-at/MathJSLab/mathjslab-calc',
                    href: 'https://github.com/MathJSLab/mathjslab-calc',
                },
                {
                    alt: 'MIT License',
                    src: 'https://img.shields.io/badge/License-MIT-brightgreen.svg',
                    href: 'https://github.com/MathJSLab/mathjslab-calc/blob/main/LICENSE',
                },
                {
                    alt: 'DOI 10.5281/zenodo.21628416',
                    src: 'https://img.shields.io/badge/DOI-10.5281%2Fzenodo.21628416-blue?style=flat&link=https://doi.org/10.5281/zenodo.21628416',
                    href: 'https://doi.org/10.5281/zenodo.21628416',
                },
                {
                    alt: 'ISBN 978-65-00-84828-1',
                    src: 'https://img.shields.io/badge/ISBN-978--65--00--84828--1-green?style=flat&link=https://grp.isbn-international.org/search/piid_solr?keys=978-65-00-84828-1',
                    href: 'https://grp.isbn-international.org/search/piid_solr?keys=978-65-00-84828-1',
                },
                {
                    alt: 'jsDelivr hits',
                    src: 'https://img.shields.io/jsdelivr/gh/hy/MathJSLab/mathjslab-calc',
                    href: 'https://cdn.jsdelivr.net/gh/MathJSLab/mathjslab-calc/',
                },
            ],
        },
        {
            name: 'mathjslab-batch',
            role: 'batch application',
            textHtml:
                'The batch application provides a text-area interface with syntax highlighting for running <strong>MathJSLab</strong> commands in sequence.',
            href: 'https://github.com/MathJSLab/mathjslab-batch',
            icon: '/img/Octicons-mark-github.svg',
            badges: [
                {
                    alt: 'Netlify Status',
                    src: 'https://api.netlify.com/api/v1/badges/8de91465-3f1a-4348-bf3c-69d96d9a1616/deploy-status',
                    href: 'https://app.netlify.com/projects/mathjslab-batch/deploys',
                },
                {
                    alt: 'Website',
                    src: 'https://img.shields.io/website?url=https%3A%2F%2Fmathjslab.com%2F',
                    href: 'https://mathjslab.com/',
                },
                {
                    alt: 'GitHub Created At',
                    src: 'https://img.shields.io/github/created-at/MathJSLab/mathjslab-batch',
                    href: 'https://github.com/MathJSLab/mathjslab-batch',
                },
                {
                    alt: 'MIT License',
                    src: 'https://img.shields.io/badge/License-MIT-brightgreen.svg',
                    href: 'https://github.com/MathJSLab/mathjslab-batch/blob/main/LICENSE',
                },
                {
                    alt: 'DOI 10.5281/zenodo.21680709',
                    src: 'https://img.shields.io/badge/DOI-10.5281%2Fzenodo.21680709-blue?style=flat&link=https://doi.org/10.5281/zenodo.21680709',
                    href: 'https://doi.org/10.5281/zenodo.21680709',
                },
                {
                    alt: 'ISBN 978-65-00-84828-1',
                    src: 'https://img.shields.io/badge/ISBN-978--65--00--84828--1-green?style=flat&link=https://grp.isbn-international.org/search/piid_solr?keys=978-65-00-84828-1',
                    href: 'https://grp.isbn-international.org/search/piid_solr?keys=978-65-00-84828-1',
                },
                {
                    alt: 'jsDelivr hits',
                    src: 'https://img.shields.io/jsdelivr/gh/hy/MathJSLab/mathjslab-batch',
                    href: 'https://cdn.jsdelivr.net/gh/MathJSLab/mathjslab-batch/',
                },
            ],
        },
    ],
    archiveTitle: 'Archive',
    archiveLeadHtml:
        'Files and documents related to the <strong>MathJSLab</strong> project.',
    archiveItems: [
        {
            group: '01',
            title:
                'A methodological proposal that integrates symbolic problem-solving in physics with the MathJSLab software',
            date: 'July 10, 2026',
            descriptionHtml:
                'English version of the paper on symbolic problem-solving in Physics and Mathematics education with <strong>MathJSLab</strong>.',
            language: 'English',
            href: '/archive/01/main-en.pdf',
            file: 'archive/01/main-en.pdf',
        },
        {
            group: '01',
            title:
                'Uma proposta metodológica que articula a resolução literal de problemas de Física e o software MathJSLab',
            date: '13 de maio de 2026',
            descriptionHtml:
                'Portuguese version of the paper on literal problem-solving in Physics and Mathematics education with <strong>MathJSLab</strong>.',
            language: 'Portuguese',
            href: '/archive/01/main-pt.pdf',
            file: 'archive/01/main-pt.pdf',
        },
        {
            group: '02',
            title:
                'MathJSLab: Prova de conceito de computação científica no navegador e software como artefato acadêmico',
            date: '4 de junho de 2026',
            descriptionHtml:
                'Portuguese paper presenting <strong>MathJSLab</strong> as browser-based scientific computing and publishable academic software.',
            language: 'Portuguese',
            href: '/archive/02/main-pt.pdf',
            file: 'archive/02/main-pt.pdf',
        },
    ],
    resourcesTitle: 'Resources',
    resourcesLeadHtml:
        'Try the web applications from the app hub. Install the <a class="software-link npm-wordmark-link" href="https://www.npmjs.com/package/mathjslab" target="_blank" rel="noopener noreferrer"><img class="software-icon npm-wordmark-icon" src="/img/Npm-logo.svg" alt="npm"> package</a>, browse the organization profile on GitHub or consult the command help.',
    resources: [
        { label: 'Open app', href: '/en/app/', icon: '/img/mathjslab-logo.svg' },
        { labelHtml: '<span class="software-link npm-wordmark-link"><img class="software-icon npm-wordmark-icon" src="/img/Npm-logo.svg" alt="npm"> package</span>', href: 'https://www.npmjs.com/package/mathjslab' },
        { label: 'GitHub organization', href: 'https://github.com/MathJSLab', icon: '/img/Octicons-mark-github.svg' },
        { label: 'Command help', href: 'https://github.com/MathJSLab/mathjslab-app/blob/main/help/README.md', icon: '/img/Octicons-mark-github.svg' },
    ],
    appHub: {
        title: 'MathJSLab apps',
        description: 'Choose one of the MathJSLab web applications and use it inside this page.',
        backLabel: 'Project page',
        selectorLabel: 'Application selector',
        openExternalLabel: 'Open in new tab',
        frameTitle: 'Selected MathJSLab application',
        apps: [
            {
                id: 'lab',
                label: 'MathJSLab app',
                shortLabel: 'Lab',
                href: 'https://app.mathjslab.com/',
                description: 'Complete demonstration environment for the interpreter.',
            },
            {
                id: 'calc',
                label: 'MathJSLab Calculator',
                shortLabel: 'Calculator',
                href: 'https://calc.mathjslab.com/',
                description: 'Simplified scientific calculator interface.',
            },
            {
                id: 'batch',
                label: 'MathJSLab Batch',
                shortLabel: 'Batch',
                href: 'https://batch.mathjslab.com/',
                description: 'Batch command interface with syntax highlighting.',
            },
        ],
    },
    licenseTitle: 'MIT License',
    licenseLeadPrefixHtml: '<strong>MathJSLab</strong> is distributed as free software under the ',
    licenseLinkLabel: 'MIT License',
    licenseHref: 'https://opensource.org/license/MIT',
    licenseLeadSuffix:
        ', allowing use, modification and redistribution under the terms below.',
    licenseText:
        'MIT License\n\nCopyright (c) 2016-2026 Sergio Lindau, mathjslab.com, ISBN 978-65-00-82338-7\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.',
    contactTitle: 'Contact',
    contactLeadHtml:
        'To contact the <strong>MathJSLab</strong> project organization, write to the address',
    notices: {
        contactLabel: 'To contact the MathJSLab project organization, write to the address',
        contactEmail: 'mathjslab@gmail.com',
        educationHtml:
            '<strong>MathJSLab</strong> is intended for educational purposes, helping teachers and students use a computer-aided calculation tool that runs in the browser.',
        trademarkHtml:
            '<strong>MathJSLab</strong> is not affiliated, sponsored or endorsed by <a href="https://www.mathworks.com/" target="_blank" rel="noopener noreferrer">The MathWorks, Inc</a>. <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg; is a registered trademark of <a href="https://www.mathworks.com/" target="_blank" rel="noopener noreferrer">The MathWorks, Inc</a>.',
    },
    footer: {
        copyrightHtml: 'Copyright &copy; 2026 <strong>MathJSLab</strong>.',
    },
};
