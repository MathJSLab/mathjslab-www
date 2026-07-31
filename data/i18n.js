import { IntlMessageFormat } from 'intl-messageformat';

const source = {
    en: {
        locale: 'en',
        htmlLang: 'en',
        languageName: 'English',
        title: 'MathJSLab - browser-based MATLAB/Octave-like interpreter',
        description:
            'MathJSLab is an interpreter with syntax like MATLAB/Octave, intended for educational purposes and available in the navigator.',
        descriptionHtml:
            'MathJSLab is an interpreter with syntax like <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg;/<a class="software-link" href="https://octave.org/" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/octave-logo.svg" alt="" aria-hidden="true">Octave</a>, intended for educational purposes and available in the navigator.',
        nav: {
            overview: 'Overview',
            features: 'Features',
            ecosystem: 'Ecosystem',
            publication: 'Publication',
            archive: 'Archive',
            resources: 'Resources',
            contact: 'Contact',
            license: 'License',
            launch: 'Open app',
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
            'MIT License\n\nCopyright (c) 2016-2026 Sergio Lindau, mathjslab.com, ISBN 978-65-00-82338-7\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.',
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
    },
    pt: {
        locale: 'pt',
        htmlLang: 'pt-BR',
        languageName: 'Português',
        title: 'MathJSLab - interpretador estilo MATLAB/Octave no navegador',
        description:
            'MathJSLab é um interpretador com sintaxe semelhante ao MATLAB/Octave, criado para finalidades educativas e disponível no navegador.',
        descriptionHtml:
            'MathJSLab é um interpretador com sintaxe semelhante ao <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg;/<a class="software-link" href="https://octave.org/" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/octave-logo.svg" alt="" aria-hidden="true">Octave</a>, criado para finalidades educativas e disponível no navegador.',
        nav: {
            overview: 'Visão geral',
            features: 'Recursos',
            ecosystem: 'Ecossistema',
            publication: 'Publicação',
            archive: 'Arquivo',
            resources: 'Links',
            contact: 'Contato',
            license: 'Licença',
            launch: 'Abrir app',
            launchCalc: 'Abrir Calculadora',
        },
        hero: {
            kicker: 'Computação numérica em TypeScript para o navegador',
            heading: 'MathJSLab leva um laboratório matemático para a web.',
            leadHtml:
                '<strong>MathJSLab</strong> simula um subconjunto da linguagem <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg;/<a class="software-link" href="https://octave.org/" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/octave-logo.svg" alt="" aria-hidden="true">Octave</a>. Use um dos aplicativos online para conhecer os recursos do <strong>MathJSLab</strong>. Use o <a class="software-link npm-wordmark-link" href="https://www.npmjs.com/package/mathjslab" target="_blank" rel="noopener noreferrer">pacote <img class="software-icon npm-wordmark-icon" src="/img/Npm-logo.svg" alt="npm"></a> em seu projeto para executar expressões, funções, matrizes, com resultados renderizados em <a href="https://developer.mozilla.org/pt-BR/docs/Web/MathML" target="_blank" rel="noopener noreferrer">MathML</a> e compatibilidade completa no navegador web.',
            primaryCtaHtml: 'Abrir app <strong>MathJSLab</strong>',
            calculatorCta: 'Abrir Calculadora',
            secondaryCta: 'Ver código no GitHub',
            installLabel: 'Instalar pacote',
            terminalTitle: 'Sessão interativa',
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
        highlights: [
            {
                title: 'Motor interpretador',
                textHtml:
                    'O pacote principal é escrito em <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a> e simula um subconjunto da sintaxe <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg;/<a class="software-link" href="https://octave.org/" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/octave-logo.svg" alt="" aria-hidden="true">Octave</a>.',
            },
            {
                title: 'Aplicativo web',
                textHtml:
                    'O aplicativo web é uma <a href="https://developer.mozilla.org/pt-BR/docs/Web/Progressive_web_apps" target="_blank" rel="noopener noreferrer">Aplicação Web Progressiva (PWA)</a> de demonstração do pacote com <a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Web_components" target="_blank" rel="noopener noreferrer">Web Components</a>, layout responsivo, ajuda em <a href="https://www.markdownguide.org/" target="_blank" rel="noopener noreferrer">Markdown</a>, esquemas e diagramas com <a href="https://mermaid.js.org/" target="_blank" rel="noopener noreferrer">Mermaid</a> e gráficos com <a href="https://plotly.com/" target="_blank" rel="noopener noreferrer">Plotly</a>.',
            },
            {
                title: 'Ajuda multilíngue',
                textHtml:
                    'A ajuda dos comandos está organizada em <a href="https://github.com/MathJSLab/mathjslab-app/blob/main/help/README.md" target="_blank" rel="noopener noreferrer">inglês</a>, <a href="https://github.com/MathJSLab/mathjslab-app/blob/main/help/LEIAME.md" target="_blank" rel="noopener noreferrer">português</a> e <a href="https://github.com/MathJSLab/mathjslab-app/blob/main/help/LEAME.md" target="_blank" rel="noopener noreferrer">espanhol</a>.',
            },
            {
                title: 'Saída matemática',
                textHtml:
                    'O interpretador trabalha com aritmética de precisão arbitrária via <a href="https://mikemcl.github.io/decimal.js/" target="_blank" rel="noopener noreferrer">decimal.js</a> e pode gerar expressões e resultados renderizados em <a href="https://developer.mozilla.org/pt-BR/docs/Web/MathML" target="_blank" rel="noopener noreferrer">MathML</a>.',
            },
        ],
        ecosystemTitle: 'Ecossistema do projeto',
        ecosystemLeadHtml:
            'A Organização <strong>MathJSLab</strong> no GitHub detém os repositórios do projeto: o <a class="software-link npm-wordmark-link" href="https://www.npmjs.com/package/mathjslab" target="_blank" rel="noopener noreferrer">pacote <img class="software-icon npm-wordmark-icon" src="/img/Npm-logo.svg" alt="npm"></a>, os aplicativos web, a página do projeto e o perfil da própria organização.',
        repositories: [
            {
                name: 'mathjslab',
                role: 'Pacote interpretador',
                text:
                    'Motor TypeScript publicado no npm, com componentes de parser, avaliador e renderização matemática.',
                href: 'https://github.com/MathJSLab/mathjslab',
                icon: '/img/Octicons-mark-github.svg',
            },
            {
                name: 'mathjslab-app',
                role: 'Aplicativo demo',
                text:
                    'Progressive web app que apresenta o interpretador em uma interface responsiva no navegador.',
                href: 'https://github.com/MathJSLab/mathjslab-app',
                icon: '/img/Octicons-mark-github.svg',
            },
            {
                name: 'mathjslab-calc',
                role: 'Aplicativo calculadora',
                textHtml:
                    'Calculadora científica com interface de prompt, hospedada em calc.mathjslab.com e baseada no pacote <strong>MathJSLab</strong>.',
                href: 'https://github.com/MathJSLab/mathjslab-calc',
                icon: '/img/Octicons-mark-github.svg',
            },
            {
                name: 'mathjslab-batch',
                role: 'Aplicativo em lote',
                textHtml:
                    'Aplicação web para processamento em lote, hospedada em batch.mathjslab.com e baseada no pacote <strong>MathJSLab</strong>.',
                href: 'https://github.com/MathJSLab/mathjslab-batch',
                icon: '/img/Octicons-mark-github.svg',
            },
            {
                name: 'mathjslab-github',
                role: 'Suporte da organização',
                textHtml:
                    'Perfil, modelos de repositório e materiais de suporte compartilhados para o <strong>MathJSLab</strong>.',
                href: 'https://github.com/MathJSLab',
                icon: '/img/Octicons-mark-github.svg',
            },
        ],
        publicationTitle: 'Publicação e identificadores',
        publicationLeadHtml:
            'O <strong>MathJSLab</strong> é publicado como software livre, distribuído como um pacote reutilizável e com identificadores persistentes atribuídos a ele.',
        publicationTextHtml:
            'O pacote interpretador é publicado no registro npm como mathjslab. O código-fonte é mantido na organização <strong>MathJSLab</strong> no GitHub, e o pacote, a aplicação Web complementar, a calculadora e a aplicação em lote possuem DOI e ISBN para citação em contextos acadêmicos e institucionais.',
        publications: [
            {
                name: 'mathjslab',
                roleHtml:
                    '<a class="software-link npm-wordmark-link" href="https://www.npmjs.com/package/mathjslab" target="_blank" rel="noopener noreferrer">Pacote <img class="software-icon npm-wordmark-icon" src="/img/Npm-logo.svg" alt="npm"></a>',
                text:
                    'O pacote interpretador em TypeScript é distribuído pelo npm, espelhado pelo jsDelivr e licenciado sob MIT.',
                href: 'https://www.npmjs.com/package/mathjslab',
                icon: '/img/Npm-logo.svg',
                badges: [
                    {
                        alt: 'Versão npm',
                        src: 'https://img.shields.io/npm/v/mathjslab',
                        href: 'https://www.npmjs.com/package/mathjslab',
                    },
                    {
                        alt: 'Última atualização npm',
                        src: 'https://img.shields.io/npm/last-update/mathjslab',
                        href: 'https://www.npmjs.com/package/mathjslab',
                    },
                    {
                        alt: 'Site',
                        src: 'https://img.shields.io/website?url=https%3A%2F%2Fmathjslab.com%2F',
                        href: 'https://mathjslab.com/',
                    },
                    {
                        alt: 'CircleCI',
                        src: 'https://dl.circleci.com/status-badge/img/gh/MathJSLab/mathjslab/tree/main.svg?style=svg',
                        href: 'https://dl.circleci.com/status-badge/redirect/gh/MathJSLab/mathjslab/tree/main',
                    },
                    {
                        alt: 'Criado no GitHub em',
                        src: 'https://img.shields.io/github/created-at/MathJSLab/mathjslab',
                        href: 'https://github.com/MathJSLab/mathjslab',
                    },
                    {
                        alt: 'Licença MIT',
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
                        alt: 'Downloads npm',
                        src: 'https://img.shields.io/npm/d18m/mathjslab',
                        href: 'https://www.npmjs.com/package/mathjslab',
                    },
                    {
                        alt: 'jsDelivr hits npm',
                        src: 'https://img.shields.io/jsdelivr/npm/hy/mathjslab',
                        href: 'https://www.jsdelivr.com/package/npm/mathjslab',
                    },
                    {
                        alt: 'SourceRank Libraries.io',
                        src: 'https://img.shields.io/librariesio/sourcerank/npm/mathjslab',
                        href: 'https://libraries.io/npm/mathjslab/sourcerank',
                    },
                    {
                        alt: 'Tamanho descompactado npm',
                        src: 'https://img.shields.io/npm/unpacked-size/mathjslab',
                        href: 'https://www.npmjs.com/package/mathjslab',
                    },
                    {
                        alt: 'Tamanho minimizado e compactado do pacote npm',
                        src: 'https://img.shields.io/bundlejs/size/mathjslab',
                        href: 'https://www.npmjs.com/package/mathjslab',
                    },
                ],
            },
            {
                name: 'mathjslab-app',
                role: 'Aplicação Web',
                text:
                    'A aplicação de navegador demonstra o interpretador, é mantida no GitHub e possui registros próprios de DOI e ISBN.',
                href: 'https://github.com/MathJSLab/mathjslab-app',
                icon: '/img/Octicons-mark-github.svg',
                badges: [
                    {
                        alt: 'Status Netlify',
                        src: 'https://api.netlify.com/api/v1/badges/6cec5ea5-c2dd-4b90-a3c1-ff95c8d1f521/deploy-status',
                        href: 'https://app.netlify.com/sites/mathjslab-app/deploys',
                    },
                    {
                        alt: 'Site',
                        src: 'https://img.shields.io/website?url=https%3A%2F%2Fmathjslab.com%2F',
                        href: 'https://mathjslab.com/',
                    },
                    {
                        alt: 'CircleCI',
                        src: 'https://dl.circleci.com/status-badge/img/gh/MathJSLab/mathjslab-app/tree/main.svg?style=svg',
                        href: 'https://dl.circleci.com/status-badge/redirect/gh/MathJSLab/mathjslab-app/tree/main',
                    },
                    {
                        alt: 'Criado no GitHub em',
                        src: 'https://img.shields.io/github/created-at/MathJSLab/mathjslab-app',
                        href: 'https://github.com/MathJSLab/mathjslab-app',
                    },
                    {
                        alt: 'Licença MIT',
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
                role: 'Aplicação calculadora',
                text:
                    'A aplicação calculadora oferece uma interface de prompt simplificada hospedada em calc.mathjslab.com, com DOI próprio e badges de publicação do projeto.',
                href: 'https://github.com/MathJSLab/mathjslab-calc',
                icon: '/img/Octicons-mark-github.svg',
                badges: [
                    {
                        alt: 'Status Netlify',
                        src: 'https://api.netlify.com/api/v1/badges/17019e19-5270-42e0-b119-8c8b230f953f/deploy-status',
                        href: 'https://app.netlify.com/projects/mathjslab-calc/deploys',
                    },
                    {
                        alt: 'Site',
                        src: 'https://img.shields.io/website?url=https%3A%2F%2Fcalc.mathjslab.com%2F',
                        href: 'https://calc.mathjslab.com/',
                    },
                    {
                        alt: 'Criado no GitHub em',
                        src: 'https://img.shields.io/github/created-at/MathJSLab/mathjslab-calc',
                        href: 'https://github.com/MathJSLab/mathjslab-calc',
                    },
                    {
                        alt: 'Licença MIT',
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
                        alt: 'Acessos jsDelivr',
                        src: 'https://img.shields.io/jsdelivr/gh/hy/MathJSLab/mathjslab-calc',
                        href: 'https://cdn.jsdelivr.net/gh/MathJSLab/mathjslab-calc/',
                    },
                ],
            },
            {
                name: 'mathjslab-batch',
                role: 'Aplicação em lote',
                textHtml:
                    'A aplicação em lote oferece uma interface em área de texto com realce de sintaxe para executar comandos <strong>MathJSLab</strong> em sequência.',
                href: 'https://github.com/MathJSLab/mathjslab-batch',
                icon: '/img/Octicons-mark-github.svg',
                badges: [
                    {
                        alt: 'Status Netlify',
                        src: 'https://api.netlify.com/api/v1/badges/8de91465-3f1a-4348-bf3c-69d96d9a1616/deploy-status',
                        href: 'https://app.netlify.com/projects/mathjslab-batch/deploys',
                    },
                    {
                        alt: 'Site',
                        src: 'https://img.shields.io/website?url=https%3A%2F%2Fmathjslab.com%2F',
                        href: 'https://mathjslab.com/',
                    },
                    {
                        alt: 'Criado no GitHub em',
                        src: 'https://img.shields.io/github/created-at/MathJSLab/mathjslab-batch',
                        href: 'https://github.com/MathJSLab/mathjslab-batch',
                    },
                    {
                        alt: 'Licença MIT',
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
                        alt: 'Acessos jsDelivr',
                        src: 'https://img.shields.io/jsdelivr/gh/hy/MathJSLab/mathjslab-batch',
                        href: 'https://cdn.jsdelivr.net/gh/MathJSLab/mathjslab-batch/',
                    },
                ],
            },
        ],
        archiveTitle: 'Arquivo',
        archiveLeadHtml:
            'Arquivos e documentos relacionados ao projeto <strong>MathJSLab</strong>.',
        archiveItems: [
            {
                group: '01',
                title:
                    'Uma proposta metodológica que articula a resolução literal de problemas de Física e o software MathJSLab',
                date: '13 de maio de 2026',
                descriptionHtml:
                    'Versão em português do artigo sobre resolução literal de problemas no ensino de Física e Matemática com o <strong>MathJSLab</strong>.',
                language: 'Português',
                href: '/archive/01/main-pt.pdf',
                file: 'archive/01/main-pt.pdf',
            },
            {
                group: '01',
                title:
                    'A methodological proposal that integrates symbolic problem-solving in physics with the MathJSLab software',
                date: 'July 10, 2026',
                descriptionHtml:
                    'Versão em inglês do artigo sobre resolução simbólica de problemas no ensino de Física e Matemática com o <strong>MathJSLab</strong>.',
                language: 'Inglês',
                href: '/archive/01/main-en.pdf',
                file: 'archive/01/main-en.pdf',
            },
            {
                group: '02',
                title:
                    'MathJSLab: Prova de conceito de computação científica no navegador e software como artefato acadêmico',
                date: '4 de junho de 2026',
                descriptionHtml:
                    'Artigo em português que apresenta o <strong>MathJSLab</strong> como computação científica no navegador e software publicável como artefato acadêmico.',
                language: 'Português',
                href: '/archive/02/main-pt.pdf',
                file: 'archive/02/main-pt.pdf',
            },
        ],
        resourcesTitle: 'Links úteis',
        resourcesLeadHtml:
            'Experimente os aplicativos web pelo hub de aplicativos. Instale o <a class="software-link npm-wordmark-link" href="https://www.npmjs.com/package/mathjslab" target="_blank" rel="noopener noreferrer">pacote <img class="software-icon npm-wordmark-icon" src="/img/Npm-logo.svg" alt="npm"></a>, navegue pelo perfil da organização no GitHub ou consulte a ajuda de comandos.',
        resources: [
            { label: 'Abrir app', href: '/pt/app/', icon: '/img/mathjslab-logo.svg' },
            { labelHtml: '<span class="software-link npm-wordmark-link">Pacote <img class="software-icon npm-wordmark-icon" src="/img/Npm-logo.svg" alt="npm"></span>', href: 'https://www.npmjs.com/package/mathjslab' },
            { label: 'Organização no GitHub', href: 'https://github.com/MathJSLab', icon: '/img/Octicons-mark-github.svg' },
            { label: 'Ajuda de comandos', href: 'https://github.com/MathJSLab/mathjslab-app/blob/main/help/LEIAME.md', icon: '/img/Octicons-mark-github.svg' },
        ],
        appHub: {
            title: 'Aplicativos MathJSLab',
            description: 'Escolha um dos aplicativos web do MathJSLab e use-o dentro desta página.',
            backLabel: 'Página do projeto',
            selectorLabel: 'Seletor de aplicativo',
            openExternalLabel: 'Abrir em nova aba',
            frameTitle: 'Aplicativo MathJSLab selecionado',
            apps: [
                {
                    id: 'lab',
                    label: 'Aplicativo MathJSLab',
                    shortLabel: 'Laboratório',
                    href: 'https://app.mathjslab.com/',
                    description: 'Ambiente completo de demonstração do interpretador.',
                },
                {
                    id: 'calc',
                    label: 'Calculadora MathJSLab',
                    shortLabel: 'Calculadora',
                    href: 'https://calc.mathjslab.com/',
                    description: 'Interface simplificada de calculadora científica.',
                },
                {
                    id: 'batch',
                    label: 'MathJSLab Batch',
                    shortLabel: 'Batch',
                    href: 'https://batch.mathjslab.com/',
                    description: 'Interface de comandos em lote com realce de sintaxe.',
                },
            ],
        },
        licenseTitle: 'Licença MIT',
        licenseLeadPrefixHtml: 'O <strong>MathJSLab</strong> é distribuído como software livre sob a ',
        licenseLinkLabel: 'Licença MIT',
        licenseHref: 'https://opensource.org/license/MIT',
        licenseLeadSuffix:
            ', permitindo uso, modificação e redistribuição nos termos abaixo.',
        licenseText:
            'MIT License\n\nCopyright (c) 2016-2026 Sergio Lindau, mathjslab.com, ISBN 978-65-00-82338-7\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.',
        contactTitle: 'Contato',
        contactLeadHtml:
            'Para entrar em contato com a organização do projeto <strong>MathJSLab</strong>, escreva para o endereço',
        notices: {
            contactLabel: 'Para entrar em contato com a organização do projeto MathJSLab, escreva para o endereço',
            contactEmail: 'mathjslab@gmail.com',
            educationHtml:
                'O <strong>MathJSLab</strong> é voltado a fins educacionais, ajudando professores e estudantes a usar uma ferramenta de cálculo assistido que roda no navegador.',
            trademarkHtml:
                '<strong>MathJSLab</strong> não é afiliado, patrocinado nem endossado pela <a href="https://www.mathworks.com/" target="_blank" rel="noopener noreferrer">The MathWorks, Inc</a>. <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg; é marca registrada da <a href="https://www.mathworks.com/" target="_blank" rel="noopener noreferrer">The MathWorks, Inc</a>.',
        },
        footer: {
            copyrightHtml: 'Copyright &copy; 2026 <strong>MathJSLab</strong>.',
        },
    },
    es: {
        locale: 'es',
        htmlLang: 'es',
        languageName: 'Español',
        title: 'MathJSLab - intérprete tipo MATLAB/Octave en el navegador',
        description:
            'MathJSLab es un intérprete con sintaxis similar a MATLAB/Octave, creado con fines educativos y disponible en el navegador.',
        descriptionHtml:
            'MathJSLab es un intérprete con sintaxis similar a <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg;/<a class="software-link" href="https://octave.org/" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/octave-logo.svg" alt="" aria-hidden="true">Octave</a>, creado con fines educativos y disponible en el navegador.',
        nav: {
            overview: 'Resumen',
            features: 'Funciones',
            ecosystem: 'Ecosistema',
            publication: 'Publicación',
            archive: 'Archivo',
            resources: 'Recursos',
            contact: 'Contacto',
            license: 'Licencia',
            launch: 'Abrir app',
            launchCalc: 'Abrir Calculadora',
        },
        hero: {
            kicker: 'Computación numérica en TypeScript para el navegador',
            heading: 'MathJSLab lleva un laboratorio matemático a la web.',
            leadHtml:
                '<strong>MathJSLab</strong> simula un subconjunto del lenguaje <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg;/<a class="software-link" href="https://octave.org/" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/octave-logo.svg" alt="" aria-hidden="true">Octave</a>. Usa una de las aplicaciones online para conocer los recursos de <strong>MathJSLab</strong>. Usa el <a class="software-link npm-wordmark-link" href="https://www.npmjs.com/package/mathjslab" target="_blank" rel="noopener noreferrer">paquete <img class="software-icon npm-wordmark-icon" src="/img/Npm-logo.svg" alt="npm"></a> en tu proyecto para ejecutar expresiones, funciones y matrices, con resultados renderizados en <a href="https://developer.mozilla.org/es/docs/Web/MathML" target="_blank" rel="noopener noreferrer">MathML</a> y compatibilidad completa en el navegador web.',
            primaryCtaHtml: 'Abrir app <strong>MathJSLab</strong>',
            calculatorCta: 'Abrir Calculadora',
            secondaryCta: 'Ver código en GitHub',
            installLabel: 'Instalar paquete',
            terminalTitle: 'Sesión interactiva',
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
        highlights: [
            {
                title: 'Motor intérprete',
                textHtml:
                    'El paquete principal está escrito en <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a> y simula un subconjunto de la sintaxis <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg;/<a class="software-link" href="https://octave.org/" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/octave-logo.svg" alt="" aria-hidden="true">Octave</a>.',
            },
            {
                title: 'Aplicación web',
                textHtml:
                    'La aplicación web es una <a href="https://developer.mozilla.org/es/docs/Web/Progressive_web_apps" target="_blank" rel="noopener noreferrer">Aplicación Web Progresiva (PWA)</a> de demostración del paquete con <a href="https://developer.mozilla.org/es/docs/Web/API/Web_components" target="_blank" rel="noopener noreferrer">Web Components</a>, diseño adaptable, ayuda en <a href="https://www.markdownguide.org/" target="_blank" rel="noopener noreferrer">Markdown</a>, esquemas y diagramas con <a href="https://mermaid.js.org/" target="_blank" rel="noopener noreferrer">Mermaid</a> y gráficos con <a href="https://plotly.com/" target="_blank" rel="noopener noreferrer">Plotly</a>.',
            },
            {
                title: 'Ayuda multilingüe',
                textHtml:
                    'La ayuda de comandos está organizada en <a href="https://github.com/MathJSLab/mathjslab-app/blob/main/help/README.md" target="_blank" rel="noopener noreferrer">inglés</a>, <a href="https://github.com/MathJSLab/mathjslab-app/blob/main/help/LEIAME.md" target="_blank" rel="noopener noreferrer">portugués</a> y <a href="https://github.com/MathJSLab/mathjslab-app/blob/main/help/LEAME.md" target="_blank" rel="noopener noreferrer">español</a>.',
            },
            {
                title: 'Salida matemática',
                textHtml:
                    'El intérprete trabaja con aritmética de precisión arbitraria mediante <a href="https://mikemcl.github.io/decimal.js/" target="_blank" rel="noopener noreferrer">decimal.js</a> y puede generar expresiones y resultados renderizados en <a href="https://developer.mozilla.org/es/docs/Web/MathML" target="_blank" rel="noopener noreferrer">MathML</a>.',
            },
        ],
        ecosystemTitle: 'Ecosistema del proyecto',
        ecosystemLeadHtml:
            'La Organización <strong>MathJSLab</strong> en GitHub posee los repositorios del proyecto: el <a class="software-link npm-wordmark-link" href="https://www.npmjs.com/package/mathjslab" target="_blank" rel="noopener noreferrer">paquete <img class="software-icon npm-wordmark-icon" src="/img/Npm-logo.svg" alt="npm"></a>, las aplicaciones web, la página del proyecto y el perfil de la propia organización.',
        repositories: [
            {
                name: 'mathjslab',
                role: 'Paquete intérprete',
                text:
                    'Motor TypeScript publicado en npm, con componentes de parser, evaluador y renderizado matemático.',
                href: 'https://github.com/MathJSLab/mathjslab',
                icon: '/img/Octicons-mark-github.svg',
            },
            {
                name: 'mathjslab-app',
                role: 'Aplicación demo',
                text:
                    'Progressive web app que presenta el intérprete en una interfaz adaptable para el navegador.',
                href: 'https://github.com/MathJSLab/mathjslab-app',
                icon: '/img/Octicons-mark-github.svg',
            },
            {
                name: 'mathjslab-calc',
                role: 'Aplicación calculadora',
                textHtml:
                    'Calculadora científica con interfaz de prompt, alojada en calc.mathjslab.com y basada en el paquete <strong>MathJSLab</strong>.',
                href: 'https://github.com/MathJSLab/mathjslab-calc',
                icon: '/img/Octicons-mark-github.svg',
            },
            {
                name: 'mathjslab-batch',
                role: 'Aplicación por lotes',
                textHtml:
                    'Aplicación web de procesamiento por lotes, alojada en batch.mathjslab.com y basada en el paquete <strong>MathJSLab</strong>.',
                href: 'https://github.com/MathJSLab/mathjslab-batch',
                icon: '/img/Octicons-mark-github.svg',
            },
            {
                name: 'mathjslab-github',
                role: 'Soporte de la organización',
                textHtml:
                    'Perfil, plantillas de repositorio y materiales de soporte compartidos para <strong>MathJSLab</strong>.',
                href: 'https://github.com/MathJSLab',
                icon: '/img/Octicons-mark-github.svg',
            },
        ],
        publicationTitle: 'Publicación e identificadores',
        publicationLeadHtml:
            '<strong>MathJSLab</strong> se publica como software libre, distribuido como un paquete reutilizable y con identificadores persistentes asignados.',
        publicationTextHtml:
            'El paquete intérprete se publica en el registro npm como mathjslab. El código fuente se mantiene en la organización <strong>MathJSLab</strong> en GitHub, y el paquete, la aplicación Web complementaria, la calculadora y la aplicación por lotes tienen DOI e ISBN para citación en contextos académicos e institucionales.',
        publications: [
            {
                name: 'mathjslab',
                roleHtml:
                    '<a class="software-link npm-wordmark-link" href="https://www.npmjs.com/package/mathjslab" target="_blank" rel="noopener noreferrer">Paquete <img class="software-icon npm-wordmark-icon" src="/img/Npm-logo.svg" alt="npm"></a>',
                text:
                    'El paquete intérprete en TypeScript se distribuye mediante npm, está disponible en jsDelivr y tiene licencia MIT.',
                href: 'https://www.npmjs.com/package/mathjslab',
                icon: '/img/Npm-logo.svg',
                badges: [
                    {
                        alt: 'Versión npm',
                        src: 'https://img.shields.io/npm/v/mathjslab',
                        href: 'https://www.npmjs.com/package/mathjslab',
                    },
                    {
                        alt: 'Última actualización npm',
                        src: 'https://img.shields.io/npm/last-update/mathjslab',
                        href: 'https://www.npmjs.com/package/mathjslab',
                    },
                    {
                        alt: 'Sitio web',
                        src: 'https://img.shields.io/website?url=https%3A%2F%2Fmathjslab.com%2F',
                        href: 'https://mathjslab.com/',
                    },
                    {
                        alt: 'CircleCI',
                        src: 'https://dl.circleci.com/status-badge/img/gh/MathJSLab/mathjslab/tree/main.svg?style=svg',
                        href: 'https://dl.circleci.com/status-badge/redirect/gh/MathJSLab/mathjslab/tree/main',
                    },
                    {
                        alt: 'Creado en GitHub el',
                        src: 'https://img.shields.io/github/created-at/MathJSLab/mathjslab',
                        href: 'https://github.com/MathJSLab/mathjslab',
                    },
                    {
                        alt: 'Licencia MIT',
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
                        alt: 'Descargas npm',
                        src: 'https://img.shields.io/npm/d18m/mathjslab',
                        href: 'https://www.npmjs.com/package/mathjslab',
                    },
                    {
                        alt: 'jsDelivr hits npm',
                        src: 'https://img.shields.io/jsdelivr/npm/hy/mathjslab',
                        href: 'https://www.jsdelivr.com/package/npm/mathjslab',
                    },
                    {
                        alt: 'SourceRank Libraries.io',
                        src: 'https://img.shields.io/librariesio/sourcerank/npm/mathjslab',
                        href: 'https://libraries.io/npm/mathjslab/sourcerank',
                    },
                    {
                        alt: 'Tamaño descomprimido npm',
                        src: 'https://img.shields.io/npm/unpacked-size/mathjslab',
                        href: 'https://www.npmjs.com/package/mathjslab',
                    },
                    {
                        alt: 'Tamaño minimizado y comprimido del paquete npm',
                        src: 'https://img.shields.io/bundlejs/size/mathjslab',
                        href: 'https://www.npmjs.com/package/mathjslab',
                    },
                ],
            },
            {
                name: 'mathjslab-app',
                role: 'Aplicación Web',
                text:
                    'La aplicación de navegador demuestra el intérprete, se mantiene en GitHub y tiene sus propios registros DOI e ISBN.',
                href: 'https://github.com/MathJSLab/mathjslab-app',
                icon: '/img/Octicons-mark-github.svg',
                badges: [
                    {
                        alt: 'Estado Netlify',
                        src: 'https://api.netlify.com/api/v1/badges/6cec5ea5-c2dd-4b90-a3c1-ff95c8d1f521/deploy-status',
                        href: 'https://app.netlify.com/sites/mathjslab-app/deploys',
                    },
                    {
                        alt: 'Sitio web',
                        src: 'https://img.shields.io/website?url=https%3A%2F%2Fmathjslab.com%2F',
                        href: 'https://mathjslab.com/',
                    },
                    {
                        alt: 'CircleCI',
                        src: 'https://dl.circleci.com/status-badge/img/gh/MathJSLab/mathjslab-app/tree/main.svg?style=svg',
                        href: 'https://dl.circleci.com/status-badge/redirect/gh/MathJSLab/mathjslab-app/tree/main',
                    },
                    {
                        alt: 'Creado en GitHub el',
                        src: 'https://img.shields.io/github/created-at/MathJSLab/mathjslab-app',
                        href: 'https://github.com/MathJSLab/mathjslab-app',
                    },
                    {
                        alt: 'Licencia MIT',
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
                role: 'Aplicación calculadora',
                text:
                    'La aplicación calculadora ofrece una interfaz de prompt simplificada alojada en calc.mathjslab.com, con DOI propio y badges de publicación del proyecto.',
                href: 'https://github.com/MathJSLab/mathjslab-calc',
                icon: '/img/Octicons-mark-github.svg',
                badges: [
                    {
                        alt: 'Estado Netlify',
                        src: 'https://api.netlify.com/api/v1/badges/17019e19-5270-42e0-b119-8c8b230f953f/deploy-status',
                        href: 'https://app.netlify.com/projects/mathjslab-calc/deploys',
                    },
                    {
                        alt: 'Sitio web',
                        src: 'https://img.shields.io/website?url=https%3A%2F%2Fcalc.mathjslab.com%2F',
                        href: 'https://calc.mathjslab.com/',
                    },
                    {
                        alt: 'Creado en GitHub el',
                        src: 'https://img.shields.io/github/created-at/MathJSLab/mathjslab-calc',
                        href: 'https://github.com/MathJSLab/mathjslab-calc',
                    },
                    {
                        alt: 'Licencia MIT',
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
                        alt: 'Accesos jsDelivr',
                        src: 'https://img.shields.io/jsdelivr/gh/hy/MathJSLab/mathjslab-calc',
                        href: 'https://cdn.jsdelivr.net/gh/MathJSLab/mathjslab-calc/',
                    },
                ],
            },
            {
                name: 'mathjslab-batch',
                role: 'Aplicación por lotes',
                textHtml:
                    'La aplicación por lotes ofrece una interfaz de área de texto con resaltado de sintaxis para ejecutar comandos <strong>MathJSLab</strong> en secuencia.',
                href: 'https://github.com/MathJSLab/mathjslab-batch',
                icon: '/img/Octicons-mark-github.svg',
                badges: [
                    {
                        alt: 'Estado Netlify',
                        src: 'https://api.netlify.com/api/v1/badges/8de91465-3f1a-4348-bf3c-69d96d9a1616/deploy-status',
                        href: 'https://app.netlify.com/projects/mathjslab-batch/deploys',
                    },
                    {
                        alt: 'Sitio web',
                        src: 'https://img.shields.io/website?url=https%3A%2F%2Fmathjslab.com%2F',
                        href: 'https://mathjslab.com/',
                    },
                    {
                        alt: 'Creado en GitHub el',
                        src: 'https://img.shields.io/github/created-at/MathJSLab/mathjslab-batch',
                        href: 'https://github.com/MathJSLab/mathjslab-batch',
                    },
                    {
                        alt: 'Licencia MIT',
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
                        alt: 'Accesos jsDelivr',
                        src: 'https://img.shields.io/jsdelivr/gh/hy/MathJSLab/mathjslab-batch',
                        href: 'https://cdn.jsdelivr.net/gh/MathJSLab/mathjslab-batch/',
                    },
                ],
            },
        ],
        archiveTitle: 'Archivo',
        archiveLeadHtml:
            'Archivos y documentos relacionados con el proyecto <strong>MathJSLab</strong>.',
        archiveItems: [
            {
                group: '01',
                title:
                    'Uma proposta metodológica que articula a resolução literal de problemas de Física e o software MathJSLab',
                date: '13 de maio de 2026',
                descriptionHtml:
                    'Versión en portugués del artículo sobre resolución literal de problemas en la enseñanza de Física y Matemática con <strong>MathJSLab</strong>.',
                language: 'Portugués',
                href: '/archive/01/main-pt.pdf',
                file: 'archive/01/main-pt.pdf',
            },
            {
                group: '01',
                title:
                    'A methodological proposal that integrates symbolic problem-solving in physics with the MathJSLab software',
                date: 'July 10, 2026',
                descriptionHtml:
                    'Versión en inglés del artículo sobre resolución simbólica de problemas en la enseñanza de Física y Matemática con <strong>MathJSLab</strong>.',
                language: 'Inglés',
                href: '/archive/01/main-en.pdf',
                file: 'archive/01/main-en.pdf',
            },
            {
                group: '02',
                title:
                    'MathJSLab: Prova de conceito de computação científica no navegador e software como artefato acadêmico',
                date: '4 de junho de 2026',
                descriptionHtml:
                    'Artículo en portugués que presenta <strong>MathJSLab</strong> como computación científica en el navegador y software publicable como artefacto académico.',
                language: 'Portugués',
                href: '/archive/02/main-pt.pdf',
                file: 'archive/02/main-pt.pdf',
            },
        ],
        resourcesTitle: 'Recursos',
        resourcesLeadHtml:
            'Prueba las aplicaciones web desde el hub de aplicaciones. Instala el <a class="software-link npm-wordmark-link" href="https://www.npmjs.com/package/mathjslab" target="_blank" rel="noopener noreferrer">paquete <img class="software-icon npm-wordmark-icon" src="/img/Npm-logo.svg" alt="npm"></a>, navega por el perfil de la organización en GitHub o consulta la ayuda de comandos.',
        resources: [
            { label: 'Abrir app', href: '/es/app/', icon: '/img/mathjslab-logo.svg' },
            { labelHtml: '<span class="software-link npm-wordmark-link">Paquete <img class="software-icon npm-wordmark-icon" src="/img/Npm-logo.svg" alt="npm"></span>', href: 'https://www.npmjs.com/package/mathjslab' },
            { label: 'Organización en GitHub', href: 'https://github.com/MathJSLab', icon: '/img/Octicons-mark-github.svg' },
            { label: 'Ayuda de comandos', href: 'https://github.com/MathJSLab/mathjslab-app/blob/main/help/LEAME.md', icon: '/img/Octicons-mark-github.svg' },
        ],
        appHub: {
            title: 'Aplicaciones MathJSLab',
            description: 'Elige una de las aplicaciones web de MathJSLab y úsala dentro de esta página.',
            backLabel: 'Página del proyecto',
            selectorLabel: 'Selector de aplicación',
            openExternalLabel: 'Abrir en nueva pestaña',
            frameTitle: 'Aplicación MathJSLab seleccionada',
            apps: [
                {
                    id: 'lab',
                    label: 'Aplicación MathJSLab',
                    shortLabel: 'Laboratorio',
                    href: 'https://app.mathjslab.com/',
                    description: 'Entorno completo de demostración del intérprete.',
                },
                {
                    id: 'calc',
                    label: 'Calculadora MathJSLab',
                    shortLabel: 'Calculadora',
                    href: 'https://calc.mathjslab.com/',
                    description: 'Interfaz simplificada de calculadora científica.',
                },
                {
                    id: 'batch',
                    label: 'MathJSLab Batch',
                    shortLabel: 'Batch',
                    href: 'https://batch.mathjslab.com/',
                    description: 'Interfaz de comandos por lotes con resaltado de sintaxis.',
                },
            ],
        },
        licenseTitle: 'Licencia MIT',
        licenseLeadPrefixHtml: '<strong>MathJSLab</strong> se distribuye como software libre bajo la ',
        licenseLinkLabel: 'Licencia MIT',
        licenseHref: 'https://opensource.org/license/MIT',
        licenseLeadSuffix:
            ', permitiendo uso, modificación y redistribución según los términos siguientes.',
        licenseText:
            'MIT License\n\nCopyright (c) 2016-2026 Sergio Lindau, mathjslab.com, ISBN 978-65-00-82338-7\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.',
        contactTitle: 'Contacto',
        contactLeadHtml:
            'Para contactar con la organización del proyecto <strong>MathJSLab</strong>, escribe a la dirección',
        notices: {
            contactLabel: 'Para contactar con la organización del proyecto MathJSLab, escribe a la dirección',
            contactEmail: 'mathjslab@gmail.com',
            educationHtml:
                '<strong>MathJSLab</strong> está orientado a fines educativos, ayudando a docentes y estudiantes a usar una herramienta de cálculo asistido que funciona en el navegador.',
            trademarkHtml:
                '<strong>MathJSLab</strong> no está afiliado, patrocinado ni respaldado por <a href="https://www.mathworks.com/" target="_blank" rel="noopener noreferrer">The MathWorks, Inc</a>. <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg; es una marca registrada de <a href="https://www.mathworks.com/" target="_blank" rel="noopener noreferrer">The MathWorks, Inc</a>.',
        },
        footer: {
            copyrightHtml: 'Copyright &copy; 2026 <strong>MathJSLab</strong>.',
        },
    },
};

const formatValue = (value, locale, key = '') => {
    if (typeof value === 'string') {
        if (key.endsWith('Html') || key.endsWith('MathML')) {
            return value;
        }

        return new IntlMessageFormat(value, locale).format();
    }

    if (Array.isArray(value)) {
        return value.map((entry) => formatValue(entry, locale));
    }

    if (value && typeof value === 'object') {
        return Object.fromEntries(Object.entries(value).map(([entryKey, entry]) => [entryKey, formatValue(entry, locale, entryKey)]));
    }

    return value;
};

const pages = Object.fromEntries(Object.entries(source).map(([locale, values]) => [locale, formatValue(values, locale)]));

export default {
    defaultLocale: 'en',
    locales: Object.keys(source),
    languageNames: Object.fromEntries(Object.entries(source).map(([locale, values]) => [locale, values.languageName])),
    pages,
};
