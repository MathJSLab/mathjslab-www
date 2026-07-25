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
                'MathJSLab simulates a subset of the <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg;/<a class="software-link" href="https://octave.org/" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/octave-logo.svg" alt="" aria-hidden="true">Octave</a> language. Use one of the online applications to explore MathJSLab features. Use the <a class="software-link" href="https://www.npmjs.com/package/mathjslab" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/Npm-logo.svg" alt="" aria-hidden="true">npm package</a> in your project to run expressions, functions and matrices, with <a href="https://developer.mozilla.org/en-US/docs/Web/MathML" target="_blank" rel="noopener noreferrer">MathML</a>-rendered results and full compatibility in the web browser.',
            primaryCta: 'Open MathJSLab app',
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
        ecosystemLead:
            'The MathJSLab Organization on GitHub owns the project repositories: the npm package, the web applications, the project page and the organization profile itself.',
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
                text:
                    'Scientific calculator prompt application hosted at calc.mathjslab.com and powered by the MathJSLab package.',
                href: 'https://github.com/MathJSLab/mathjslab-calc',
                icon: '/img/Octicons-mark-github.svg',
            },
            {
                name: 'mathjslab-github',
                role: 'Organization support',
                text:
                    'Shared profile, repository templates and project-wide support material for MathJSLab.',
                href: 'https://github.com/MathJSLab',
                icon: '/img/Octicons-mark-github.svg',
            },
        ],
        publicationTitle: 'Publication and identifiers',
        publicationLead:
            'MathJSLab is published as free software, distributed as a reusable package and with persistent identifiers assigned to it.',
        publicationText:
            'The interpreter package is published in the npm registry as mathjslab. The source code is maintained under the MathJSLab organization on GitHub, and both the package and the companion web application have DOI and ISBN identifiers so they can be cited in academic and institutional contexts.',
        publications: [
            {
                name: 'mathjslab',
                role: 'npm package',
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
                        alt: 'jsDelivr hits npm',
                        src: 'https://img.shields.io/jsdelivr/npm/hy/mathjslab',
                        href: 'https://www.jsdelivr.com/package/npm/mathjslab',
                    },
                    {
                        alt: 'NPM Downloads',
                        src: 'https://img.shields.io/npm/d18m/mathjslab',
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
        ],
        archiveTitle: 'Archive',
        archiveLead:
            'Files and documents related to the MathJSLab project.',
        archiveItems: [
            {
                group: '01',
                title:
                    'A methodological proposal that integrates symbolic problem-solving in physics with the MathJSLab software',
                date: 'July 10, 2026',
                description:
                    'English version of the paper on symbolic problem-solving in Physics and Mathematics education with MathJSLab.',
                language: 'English',
                href: '/archive/01/main-en.pdf',
                file: 'archive/01/main-en.pdf',
            },
            {
                group: '01',
                title:
                    'Uma proposta metodológica que articula a resolução literal de problemas de Física e o software MathJSLab',
                date: '13 de maio de 2026',
                description:
                    'Portuguese version of the paper on literal problem-solving in Physics and Mathematics education with MathJSLab.',
                language: 'Portuguese',
                href: '/archive/01/main-pt.pdf',
                file: 'archive/01/main-pt.pdf',
            },
            {
                group: '02',
                title:
                    'MathJSLab: Prova de conceito de computação científica no navegador e software como artefato acadêmico',
                date: '4 de junho de 2026',
                description:
                    'Portuguese paper presenting MathJSLab as browser-based scientific computing and publishable academic software.',
                language: 'Portuguese',
                href: '/archive/02/main-pt.pdf',
                file: 'archive/02/main-pt.pdf',
            },
        ],
        resourcesTitle: 'Resources',
        resourcesLead:
            'Try the demo application or the simplified calculator. Install the npm package, browse the organization profile on GitHub or consult the command help.',
        resources: [
            { label: 'Launch the app', href: 'https://app.mathjslab.com/', icon: '/img/mathjslab-logo.svg' },
            { label: 'Open Calculator', href: 'https://calc.mathjslab.com/', icon: '/img/mathjslab-logo.svg' },
            { label: 'npm package', href: 'https://www.npmjs.com/package/mathjslab', icon: '/img/Npm-logo.svg' },
            { label: 'GitHub organization', href: 'https://github.com/MathJSLab', icon: '/img/Octicons-mark-github.svg' },
            { label: 'Command help', href: 'https://github.com/MathJSLab/mathjslab-app/blob/main/help/README.md', icon: '/img/Octicons-mark-github.svg' },
        ],
        licenseTitle: 'MIT License',
        licenseLeadPrefix: 'MathJSLab is distributed as free software under the ',
        licenseLinkLabel: 'MIT License',
        licenseHref: 'https://opensource.org/license/MIT',
        licenseLeadSuffix:
            ', allowing use, modification and redistribution under the terms below.',
        licenseText:
            'MIT License\n\nCopyright (c) 2016-2026 Sergio Lindau, mathjslab.com, ISBN 978-65-00-82338-7\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.',
        contactTitle: 'Contact',
        contactLead:
            'To contact the MathJSLab project organization, write to the address',
        notices: {
            contactLabel: 'To contact the MathJSLab project organization, write to the address',
            contactEmail: 'mathjslab@gmail.com',
            education:
                'MathJSLab is intended for educational purposes, helping teachers and students use a computer-aided calculation tool that runs in the browser.',
            trademarkHtml:
                'MathJSLab is not affiliated, sponsored or endorsed by <a href="https://www.mathworks.com/" target="_blank" rel="noopener noreferrer">The MathWorks, Inc</a>. <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg; is a registered trademark of <a href="https://www.mathworks.com/" target="_blank" rel="noopener noreferrer">The MathWorks, Inc</a>.',
        },
        footer: {
            copyrightHtml: 'Copyright &copy; 2026 MathJSLab.',
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
                'MathJSLab simula um subconjunto da linguagem <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg;/<a class="software-link" href="https://octave.org/" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/octave-logo.svg" alt="" aria-hidden="true">Octave</a>. Use um dos aplicativos online para conhecer os recursos do MathJSLab. Use o <a class="software-link" href="https://www.npmjs.com/package/mathjslab" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/Npm-logo.svg" alt="" aria-hidden="true">pacote npm</a> em seu projeto para executar expressões, funções, matrizes, com resultados renderizados em <a href="https://developer.mozilla.org/pt-BR/docs/Web/MathML" target="_blank" rel="noopener noreferrer">MathML</a> e compatibilidade completa no navegador web.',
            primaryCta: 'Abrir app MathJSLab',
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
        ecosystemLead:
            'A Organização MathJSLab no GitHub detém os repositórios do projeto: o pacote npm, os aplicativos web, a página do projeto e o perfil da própria organização.',
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
                text:
                    'Calculadora científica com interface de prompt, hospedada em calc.mathjslab.com e baseada no pacote MathJSLab.',
                href: 'https://github.com/MathJSLab/mathjslab-calc',
                icon: '/img/Octicons-mark-github.svg',
            },
            {
                name: 'mathjslab-github',
                role: 'Suporte da organização',
                text:
                    'Perfil, modelos de repositório e materiais de suporte compartilhados para o MathJSLab.',
                href: 'https://github.com/MathJSLab',
                icon: '/img/Octicons-mark-github.svg',
            },
        ],
        publicationTitle: 'Publicação e identificadores',
        publicationLead:
            'O MathJSLab é publicado como software livre, distribuído como um pacote reutilizável e com identificadores persistentes atribuídos a ele.',
        publicationText:
            'O pacote interpretador é publicado no registro npm como mathjslab. O código-fonte é mantido na organização MathJSLab no GitHub, e tanto o pacote quanto a aplicação Web complementar possuem DOI e ISBN para citação em contextos acadêmicos e institucionais.',
        publications: [
            {
                name: 'mathjslab',
                role: 'Pacote npm',
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
                        alt: 'jsDelivr hits npm',
                        src: 'https://img.shields.io/jsdelivr/npm/hy/mathjslab',
                        href: 'https://www.jsdelivr.com/package/npm/mathjslab',
                    },
                    {
                        alt: 'Downloads npm',
                        src: 'https://img.shields.io/npm/d18m/mathjslab',
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
        ],
        archiveTitle: 'Arquivo',
        archiveLead:
            'Arquivos e documentos relacionados ao projeto MathJSLab.',
        archiveItems: [
            {
                group: '01',
                title:
                    'Uma proposta metodológica que articula a resolução literal de problemas de Física e o software MathJSLab',
                date: '13 de maio de 2026',
                description:
                    'Versão em português do artigo sobre resolução literal de problemas no ensino de Física e Matemática com o MathJSLab.',
                language: 'Português',
                href: '/archive/01/main-pt.pdf',
                file: 'archive/01/main-pt.pdf',
            },
            {
                group: '01',
                title:
                    'A methodological proposal that integrates symbolic problem-solving in physics with the MathJSLab software',
                date: 'July 10, 2026',
                description:
                    'Versão em inglês do artigo sobre resolução simbólica de problemas no ensino de Física e Matemática com o MathJSLab.',
                language: 'Inglês',
                href: '/archive/01/main-en.pdf',
                file: 'archive/01/main-en.pdf',
            },
            {
                group: '02',
                title:
                    'MathJSLab: Prova de conceito de computação científica no navegador e software como artefato acadêmico',
                date: '4 de junho de 2026',
                description:
                    'Artigo em português que apresenta o MathJSLab como computação científica no navegador e software publicável como artefato acadêmico.',
                language: 'Português',
                href: '/archive/02/main-pt.pdf',
                file: 'archive/02/main-pt.pdf',
            },
        ],
        resourcesTitle: 'Links úteis',
        resourcesLead:
            'Experimente o aplicativo de demonstração ou a calculadora simplificada. Instale o pacote npm, navegue pelo perfil da organização no GitHub ou consulte a ajuda de comandos.',
        resources: [
            { label: 'Abrir o app', href: 'https://app.mathjslab.com/', icon: '/img/mathjslab-logo.svg' },
            { label: 'Abrir Calculadora', href: 'https://calc.mathjslab.com/', icon: '/img/mathjslab-logo.svg' },
            { label: 'Pacote npm', href: 'https://www.npmjs.com/package/mathjslab', icon: '/img/Npm-logo.svg' },
            { label: 'Organização no GitHub', href: 'https://github.com/MathJSLab', icon: '/img/Octicons-mark-github.svg' },
            { label: 'Ajuda de comandos', href: 'https://github.com/MathJSLab/mathjslab-app/blob/main/help/LEIAME.md', icon: '/img/Octicons-mark-github.svg' },
        ],
        licenseTitle: 'Licença MIT',
        licenseLeadPrefix: 'O MathJSLab é distribuído como software livre sob a ',
        licenseLinkLabel: 'Licença MIT',
        licenseHref: 'https://opensource.org/license/MIT',
        licenseLeadSuffix:
            ', permitindo uso, modificação e redistribuição nos termos abaixo.',
        licenseText:
            'MIT License\n\nCopyright (c) 2016-2026 Sergio Lindau, mathjslab.com, ISBN 978-65-00-82338-7\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.',
        contactTitle: 'Contato',
        contactLead:
            'Para entrar em contato com a organização do projeto MathJSLab, escreva para o endereço',
        notices: {
            contactLabel: 'Para entrar em contato com a organização do projeto MathJSLab, escreva para o endereço',
            contactEmail: 'mathjslab@gmail.com',
            education:
                'O MathJSLab é voltado a fins educacionais, ajudando professores e estudantes a usar uma ferramenta de cálculo assistido que roda no navegador.',
            trademarkHtml:
                'MathJSLab não é afiliado, patrocinado nem endossado pela <a href="https://www.mathworks.com/" target="_blank" rel="noopener noreferrer">The MathWorks, Inc</a>. <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg; é marca registrada da <a href="https://www.mathworks.com/" target="_blank" rel="noopener noreferrer">The MathWorks, Inc</a>.',
        },
        footer: {
            copyrightHtml: 'Copyright &copy; 2026 MathJSLab.',
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
                'MathJSLab simula un subconjunto del lenguaje <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg;/<a class="software-link" href="https://octave.org/" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/octave-logo.svg" alt="" aria-hidden="true">Octave</a>. Usa una de las aplicaciones online para conocer los recursos de MathJSLab. Usa el <a class="software-link" href="https://www.npmjs.com/package/mathjslab" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/Npm-logo.svg" alt="" aria-hidden="true">paquete npm</a> en tu proyecto para ejecutar expresiones, funciones y matrices, con resultados renderizados en <a href="https://developer.mozilla.org/es/docs/Web/MathML" target="_blank" rel="noopener noreferrer">MathML</a> y compatibilidad completa en el navegador web.',
            primaryCta: 'Abrir app MathJSLab',
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
        ecosystemLead:
            'La Organización MathJSLab en GitHub posee los repositorios del proyecto: el paquete npm, las aplicaciones web, la página del proyecto y el perfil de la propia organización.',
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
                text:
                    'Calculadora científica con interfaz de prompt, alojada en calc.mathjslab.com y basada en el paquete MathJSLab.',
                href: 'https://github.com/MathJSLab/mathjslab-calc',
                icon: '/img/Octicons-mark-github.svg',
            },
            {
                name: 'mathjslab-github',
                role: 'Soporte de la organización',
                text:
                    'Perfil, plantillas de repositorio y materiales de soporte compartidos para MathJSLab.',
                href: 'https://github.com/MathJSLab',
                icon: '/img/Octicons-mark-github.svg',
            },
        ],
        publicationTitle: 'Publicación e identificadores',
        publicationLead:
            'MathJSLab se publica como software libre, distribuido como un paquete reutilizable y con identificadores persistentes asignados.',
        publicationText:
            'El paquete intérprete se publica en el registro npm como mathjslab. El código fuente se mantiene en la organización MathJSLab en GitHub, y tanto el paquete como la aplicación Web complementaria tienen DOI e ISBN para citación en contextos académicos e institucionales.',
        publications: [
            {
                name: 'mathjslab',
                role: 'Paquete npm',
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
                        alt: 'jsDelivr hits npm',
                        src: 'https://img.shields.io/jsdelivr/npm/hy/mathjslab',
                        href: 'https://www.jsdelivr.com/package/npm/mathjslab',
                    },
                    {
                        alt: 'Descargas npm',
                        src: 'https://img.shields.io/npm/d18m/mathjslab',
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
        ],
        archiveTitle: 'Archivo',
        archiveLead:
            'Archivos y documentos relacionados con el proyecto MathJSLab.',
        archiveItems: [
            {
                group: '01',
                title:
                    'Uma proposta metodológica que articula a resolução literal de problemas de Física e o software MathJSLab',
                date: '13 de maio de 2026',
                description:
                    'Versión en portugués del artículo sobre resolución literal de problemas en la enseñanza de Física y Matemática con MathJSLab.',
                language: 'Portugués',
                href: '/archive/01/main-pt.pdf',
                file: 'archive/01/main-pt.pdf',
            },
            {
                group: '01',
                title:
                    'A methodological proposal that integrates symbolic problem-solving in physics with the MathJSLab software',
                date: 'July 10, 2026',
                description:
                    'Versión en inglés del artículo sobre resolución simbólica de problemas en la enseñanza de Física y Matemática con MathJSLab.',
                language: 'Inglés',
                href: '/archive/01/main-en.pdf',
                file: 'archive/01/main-en.pdf',
            },
            {
                group: '02',
                title:
                    'MathJSLab: Prova de conceito de computação científica no navegador e software como artefato acadêmico',
                date: '4 de junho de 2026',
                description:
                    'Artículo en portugués que presenta MathJSLab como computación científica en el navegador y software publicable como artefacto académico.',
                language: 'Portugués',
                href: '/archive/02/main-pt.pdf',
                file: 'archive/02/main-pt.pdf',
            },
        ],
        resourcesTitle: 'Recursos',
        resourcesLead:
            'Prueba la aplicación de demostración o la calculadora simplificada. Instala el paquete npm, navega por el perfil de la organización en GitHub o consulta la ayuda de comandos.',
        resources: [
            { label: 'Abrir la app', href: 'https://app.mathjslab.com/', icon: '/img/mathjslab-logo.svg' },
            { label: 'Abrir Calculadora', href: 'https://calc.mathjslab.com/', icon: '/img/mathjslab-logo.svg' },
            { label: 'Paquete npm', href: 'https://www.npmjs.com/package/mathjslab', icon: '/img/Npm-logo.svg' },
            { label: 'Organización en GitHub', href: 'https://github.com/MathJSLab', icon: '/img/Octicons-mark-github.svg' },
            { label: 'Ayuda de comandos', href: 'https://github.com/MathJSLab/mathjslab-app/blob/main/help/LEAME.md', icon: '/img/Octicons-mark-github.svg' },
        ],
        licenseTitle: 'Licencia MIT',
        licenseLeadPrefix: 'MathJSLab se distribuye como software libre bajo la ',
        licenseLinkLabel: 'Licencia MIT',
        licenseHref: 'https://opensource.org/license/MIT',
        licenseLeadSuffix:
            ', permitiendo uso, modificación y redistribución según los términos siguientes.',
        licenseText:
            'MIT License\n\nCopyright (c) 2016-2026 Sergio Lindau, mathjslab.com, ISBN 978-65-00-82338-7\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.',
        contactTitle: 'Contacto',
        contactLead:
            'Para contactar con la organización del proyecto MathJSLab, escribe a la dirección',
        notices: {
            contactLabel: 'Para contactar con la organización del proyecto MathJSLab, escribe a la dirección',
            contactEmail: 'mathjslab@gmail.com',
            education:
                'MathJSLab está orientado a fines educativos, ayudando a docentes y estudiantes a usar una herramienta de cálculo asistido que funciona en el navegador.',
            trademarkHtml:
                'MathJSLab no está afiliado, patrocinado ni respaldado por <a href="https://www.mathworks.com/" target="_blank" rel="noopener noreferrer">The MathWorks, Inc</a>. <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg; es una marca registrada de <a href="https://www.mathworks.com/" target="_blank" rel="noopener noreferrer">The MathWorks, Inc</a>.',
        },
        footer: {
            copyrightHtml: 'Copyright &copy; 2026 MathJSLab.',
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
