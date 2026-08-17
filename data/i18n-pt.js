import licenseText from './i18n-licenseText.js';

export default {
    locale: 'pt',
    htmlLang: 'pt-BR',
    languageName: 'Português',
    title: 'MathJSLab - interpretador estilo MATLAB/Octave no navegador',
    description:
        'MathJSLab é um interpretador com sintaxe semelhante ao MATLAB/Octave, criado para finalidades educativas e disponível no navegador.',
    descriptionHtml:
        'MathJSLab é um interpretador com sintaxe semelhante ao <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg;/<a class="software-link" href="https://octave.org/" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/img/octave-logo.svg" alt="" aria-hidden="true">Octave</a>, criado para finalidades educativas e disponível no navegador.',
    nav: {
        menu: 'Menu',
        mainNavLabel: 'Navegação principal',
        languageLabel: 'Idioma',
        languageMenu: 'Idioma',
        overview: 'Visão geral',
        pipeline: 'Fluxo',
        features: 'Recursos',
        ecosystem: 'Ecossistema',
        publication: 'Publicação',
        archive: 'Arquivo',
        resources: 'Links',
        contact: 'Contato',
        license: 'Licença',
        launch: 'Abrir app',
        launchShort: 'App',
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
    pipeline: {
        kicker: 'Fluxo de execução',
        title: 'Como o MathJSLab processa uma expressão',
        leadHtml:
            'O <strong>MathJSLab</strong> lê a entrada, transforma o texto em uma representação interna, avalia expressões e comandos, e renderiza resultados matemáticos em <a href="https://developer.mozilla.org/pt-BR/docs/Web/MathML" target="_blank" rel="noopener noreferrer">MathML</a> para o navegador.',
        image: '/img/mathjslab-pipeline-pt.svg',
        imageAlt:
            'Diagrama mostrando o pipeline do MathJSLab desde a entrada do usuário até parser, avaliação, processamento de comandos e renderização em MathML.',
        carouselOpenLabel: 'Abrir carrossel do fluxo',
        carouselThumb: '/img/mathjslab-pipeline-pt.webp',
        carouselPanels: [
            '/img/mathjslab-pipeline-pt-1-grammar-panel.svg',
            '/img/mathjslab-pipeline-pt-2-code-panel.svg',
            '/img/mathjslab-pipeline-pt-3-ast-panel.svg',
            '/img/mathjslab-pipeline-pt-4-evaluator-panel.svg',
        ],
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
                    alt: 'Downloads npm por semana',
                    src: 'https://img.shields.io/npm/dw/mathjslab',
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
    licenseText,
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
};
