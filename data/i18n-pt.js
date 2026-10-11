import licenseText from './i18n-licenseText.js';

export default {
    locale: 'pt',
    htmlLang: 'pt-BR',
    ogLocale: 'pt_BR',
    languageName: 'Português',
    title: 'MathJSLab - interpretador estilo MATLAB/Octave no navegador',
    description: 'MathJSLab é um interpretador com sintaxe semelhante ao MATLAB/Octave, criado para finalidades educativas e disponível no navegador.',
    descriptionHtml:
        'MathJSLab é um interpretador com sintaxe semelhante ao <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/images/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg;/<a class="software-link" href="https://octave.org/" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/images/octave-logo.svg" alt="" aria-hidden="true">Octave</a>, criado para finalidades educativas e disponível no navegador.',
    nav: {
        menu: 'Menu',
        mainNavLabel: 'Navegação principal',
        languageLabel: 'Idioma',
        languageMenu: 'Idioma',
        overview: 'Visão geral',
        pipeline: 'Fluxo',
        features: 'Recursos',
        markdown: 'Engine Markdown',
        ecosystem: 'Ecossistema',
        publication: 'Publicação',
        resources: 'Links',
        contact: 'Contato',
        license: 'Licença',
        launchShort: 'Aplicativo',
        launchCalcShort: 'Calculadora',
    },
    theme: {
        light: 'Alternar para o modo claro',
        dark: 'Alternar para o modo escuro',
    },
    hero: {
        kicker: 'Computação numérica em TypeScript para o navegador',
        heading: 'MathJSLab leva um laboratório matemático para a web.',
        leadHtml:
            '<strong>MathJSLab</strong> simula um subconjunto da linguagem <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/images/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg;/<a class="software-link" href="https://octave.org/" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/images/octave-logo.svg" alt="" aria-hidden="true">Octave</a>. Use um dos aplicativos online para conhecer os recursos do <strong>MathJSLab</strong>. Use o <a class="software-link npm-wordmark-link" href="https://www.npmjs.com/package/mathjslab" target="_blank" rel="noopener noreferrer">pacote <img class="software-icon npm-wordmark-icon" src="/images/Npm-logo.svg" alt="npm"> <strong>mathjslab</strong></a> em seu projeto para executar expressões, funções, matrizes, com resultados renderizados em <a href="https://developer.mozilla.org/pt-BR/docs/Web/MathML" target="_blank" rel="noopener noreferrer">MathML</a> e compatibilidade completa no navegador web.',
        secondaryCta: 'Ver código no GitHub',
        installLabel: 'Interpretador',
        terminalTitle: 'Sessão interativa',
        promptOne: 'A = [1 2; 3 4]',
        outputOneMathML:
            '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>A</mi><mo>=</mo><mo>[</mo><mtable><mtr><mtd><mn>1</mn></mtd><mtd><mn>2</mn></mtd></mtr><mtr><mtd><mn>3</mn></mtd><mtd><mn>4</mn></mtd></mtr></mtable><mo>]</mo></mrow></math>',
        promptTwo: 'det(A)',
        outputTwoMathML: '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>det</mi><mo>(</mo><mi>A</mi><mo>)</mo><mo>=</mo><mo>-</mo><mn>2</mn></mrow></math>',
        promptThree: 'f = @(x) a*x^2+b*x+c',
        outputThreeMathML:
            '<math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><mrow><mi>f</mi><mo>=</mo><mo>@</mo><mo>(</mo><mi>x</mi><mo>)</mo><mi>a</mi><mo>&#x2062;</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>b</mi><mo>&#x2062;</mo><mi>x</mi><mo>+</mo><mi>c</mi></mrow></math>',
    },
    pipeline: {
        kicker: 'Fluxo de execução',
        title: 'Como o MathJSLab processa uma expressão',
        leadHtml:
            'O <strong>MathJSLab</strong> lê a entrada, transforma o texto em uma representação interna, avalia expressões e comandos, e renderiza resultados matemáticos em <a href="https://developer.mozilla.org/pt-BR/docs/Web/MathML" target="_blank" rel="noopener noreferrer">MathML</a> para o navegador.',
        image: '/images/mathjslab-pipeline-pt.svg',
        imageAlt: 'Diagrama mostrando o pipeline do MathJSLab desde a entrada do usuário até parser, avaliação, processamento de comandos e renderização em MathML.',
        carouselOpenLabel: 'Abrir carrossel do fluxo',
        carouselThumb: '/images/mathjslab-pipeline-pt.webp',
        carouselPanels: [
            '/images/mathjslab-pipeline-pt-1-grammar-panel.svg',
            '/images/mathjslab-pipeline-pt-2-code-panel.svg',
            '/images/mathjslab-pipeline-pt-3-ast-panel.svg',
            '/images/mathjslab-pipeline-pt-4-evaluator-panel.svg',
        ],
    },
    highlights: [
        {
            title: 'Motor interpretador',
            textHtml:
                'O pacote principal é escrito em <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a> e simula um subconjunto da sintaxe <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/images/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg;/<a class="software-link" href="https://octave.org/" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/images/octave-logo.svg" alt="" aria-hidden="true">Octave</a>.',
        },
        {
            title: 'Aplicativo web',
            textHtml:
                'O aplicativo web é uma <a href="https://developer.mozilla.org/pt-BR/docs/Web/Progressive_web_apps" target="_blank" rel="noopener noreferrer">Aplicação Web Progressiva (PWA)</a> de demonstração do interpretador mathjslab com <a href="https://developer.mozilla.org/pt-BR/docs/Web/API/Web_components" target="_blank" rel="noopener noreferrer">Web Components</a>, layout responsivo, ajuda em <a href="https://www.markdownguide.org/" target="_blank" rel="noopener noreferrer">Markdown</a>, esquemas e diagramas com <a href="https://mermaid.js.org/" target="_blank" rel="noopener noreferrer">Mermaid</a> e gráficos com <a href="https://plotly.com/" target="_blank" rel="noopener noreferrer">Plotly</a>.',
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
        {
            title: 'Linguagem e programação',
            text: 'Expressões, matrizes, números complexos, estruturas de controle, funções anônimas e definidas pelo usuário, closures e classes ampliam as possibilidades de programação.',
        },
        {
            title: 'Execução assíncrona e retomável',
            text: 'Sessões preservam variáveis e funções entre comandos. A execução assíncrona permite suspender e retomar cálculos; os aplicativos integram Workers e saídas gráficas do interpretador.',
        },
    ],
    ecosystemTitle: 'Ecossistema do projeto',
    ecosystemLeadHtml:
        'O interpretador <strong>mathjslab</strong> é o núcleo do projeto. O pacote complementar <strong>mathjslab-markdown</strong> apresenta documentos educativos; os aplicativos web integram esses recursos. A organização no GitHub também mantém a página do projeto e recursos compartilhados.',
    markdown: {
        title: 'Documentos educativos com mathjslab-markdown',
        leadHtml:
            'O pacote complementar <strong>mathjslab-markdown</strong> reúne o engine Markdown do projeto em uma biblioteca reutilizável. Ele apresenta documentos no navegador e integra o interpretador <strong>mathjslab</strong> quando o aplicativo habilita a execução de exemplos.',
        cards: [
            {
                title: 'Documentos e navegação',
                textHtml:
                    'Renderização de Markdown, navegação entre documentos e o Web Component opcional <code>&lt;markdown-document&gt;</code>, para integrar ajuda e material didático a outros aplicativos.',
            },
            { title: 'Extensões educativas', textHtml: 'Fórmulas matemáticas, diagramas Mermaid e visualizações educativas com renderizadores opcionais carregados sob demanda.' },
            {
                title: 'Integração com o interpretador',
                textHtml:
                    'Exemplos executáveis usam o pacote <strong>mathjslab</strong>, com executores e Workers fornecidos pelo aplicativo. O engine Markdown também pode ser usado de forma independente.',
            },
        ],
        installLabel: 'Engine Markdown',
    },
    repositories: [
        {
            name: 'mathjslab',
            role: 'Interpretador',
            text: 'Motor TypeScript publicado no npm, com componentes de parser, avaliador e renderização matemática.',
            href: 'https://github.com/MathJSLab/mathjslab',
            icon: '/images/Octicons-mark-github.svg',
        },
        {
            name: 'mathjslab-markdown',
            role: 'Engine Markdown',
            text: 'Engine Markdown reutilizável, extensões educativas e componente de documentos para o navegador.',
            href: 'https://github.com/MathJSLab/mathjslab-markdown',
            icon: '/images/Octicons-mark-github.svg',
        },
        {
            name: 'mathjslab-app',
            role: 'Aplicativo',
            text: 'Progressive web app que apresenta o interpretador em uma interface responsiva no navegador.',
            href: 'https://github.com/MathJSLab/mathjslab-app',
            icon: '/images/Octicons-mark-github.svg',
        },
        {
            name: 'mathjslab-calc',
            role: 'Calculadora',
            textHtml: 'Calculadora científica com interface de prompt, hospedada em calc.mathjslab.com e baseada no pacote <strong>MathJSLab</strong>.',
            href: 'https://github.com/MathJSLab/mathjslab-calc',
            icon: '/images/Octicons-mark-github.svg',
        },
        {
            name: 'mathjslab-github',
            role: 'Repositório da organização MathJSLab',
            textHtml: 'Perfil, modelos de repositório e materiais de suporte compartilhados para o <strong>MathJSLab</strong>.',
            href: 'https://github.com/MathJSLab',
            icon: '/images/Octicons-mark-github.svg',
        },
        {
            name: 'mathjslab-www',
            role: 'Página do projeto',
            text: 'Página multilíngue que apresenta o interpretador, o engine Markdown e os aplicativos do ecossistema.',
            href: 'https://github.com/MathJSLab/mathjslab-www',
            icon: '/images/Octicons-mark-github.svg',
        },
    ],
    publicationTitle: 'Publicação e identificadores',
    publicationLeadHtml: 'O interpretador MathJSLab e seu ecossistema são distribuídos como software livre, com pacotes reutilizáveis e identificadores de publicação.',
    publicationTextHtml:
        'O interpretador <strong>mathjslab</strong> e o engine <strong>mathjslab-markdown</strong> são publicados separadamente no npm, sob licença MIT. Os registros de DOI e ISBN apresentados abaixo pertencem aos respectivos projetos.',
    publications: [
        {
            name: 'mathjslab',
            roleHtml:
                '<a class="software-link npm-wordmark-link" href="https://www.npmjs.com/package/mathjslab" target="_blank" rel="noopener noreferrer">Pacote <img class="software-icon npm-wordmark-icon" src="/images/Npm-logo.svg" alt="npm"> <strong>mathjslab</strong></a>',
            text: 'O pacote interpretador em TypeScript é distribuído pelo npm, espelhado pelo jsDelivr e licenciado sob MIT.',
            href: 'https://www.npmjs.com/package/mathjslab',
            icon: '/images/Npm-logo.svg',
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
                    src: 'https://dl.circleci.com/status-badge/images/gh/MathJSLab/mathjslab/tree/main.svg?style=svg',
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
            name: 'mathjslab-markdown',
            roleHtml:
                '<a class="software-link npm-wordmark-link" href="https://www.npmjs.com/package/mathjslab-markdown" target="_blank" rel="noopener noreferrer">Pacote <img class="software-icon npm-wordmark-icon" src="/images/Npm-logo.svg" alt="npm"> <strong>mathjslab-markdown</strong></a>',
            text: 'Engine Markdown reutilizável, extensões educativas e componente de documentos para o navegador.',
            href: 'https://www.npmjs.com/package/mathjslab-markdown',
            icon: '/images/Npm-logo.svg',
            badges: [
                { alt: 'npm: mathjslab-markdown', src: 'https://img.shields.io/npm/v/mathjslab-markdown', href: 'https://www.npmjs.com/package/mathjslab-markdown' },
                { alt: 'MIT', src: 'https://img.shields.io/npm/l/mathjslab-markdown', href: 'https://github.com/MathJSLab/mathjslab-markdown/blob/main/LICENSE' },
                { alt: 'GitHub: mathjslab-markdown', src: 'https://img.shields.io/github/created-at/MathJSLab/mathjslab-markdown', href: 'https://github.com/MathJSLab/mathjslab-markdown' },
            ],
        },
        {
            name: 'mathjslab-app',
            role: 'Aplicação Web',
            text: 'A aplicação de navegador demonstra o interpretador, é mantida no GitHub e possui registros próprios de DOI e ISBN.',
            href: 'https://github.com/MathJSLab/mathjslab-app',
            icon: '/images/Octicons-mark-github.svg',
            badges: [
                {
                    alt: 'Status Netlify',
                    src: 'https://api.netlify.com/api/v1/badges/6cec5ea5-c2dd-4b90-a3c1-ff95c8d1f521/deploy-status',
                    href: 'https://app.netlify.com/sites/mathjslab-app/deploys',
                },
                {
                    alt: 'Site',
                    src: 'https://img.shields.io/website?url=https%3A%2F%2Fapp.mathjslab.com%2F',
                    href: 'https://app.mathjslab.com/',
                },
                {
                    alt: 'CircleCI',
                    src: 'https://dl.circleci.com/status-badge/images/gh/MathJSLab/mathjslab-app/tree/main.svg?style=svg',
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
            role: 'Aplicação Web',
            text: 'A aplicação calculadora oferece uma interface de prompt simplificada hospedada em calc.mathjslab.com, com DOI próprio e badges de publicação do projeto.',
            href: 'https://github.com/MathJSLab/mathjslab-calc',
            icon: '/images/Octicons-mark-github.svg',
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
    ],
    resourcesTitle: 'Links úteis',
    resourcesLeadHtml:
        'Experimente o aplicativo e a calculadora, instale o interpretador <strong>mathjslab</strong> ou o engine <strong>mathjslab-markdown</strong> e consulte o código-fonte e a ajuda.',
    resources: [
        {
            labelHtml: '<span class="software-link npm-wordmark-link">Pacote <img class="software-icon npm-wordmark-icon" src="/images/Npm-logo.svg" alt="npm"> mathjslab</span>',
            href: 'https://www.npmjs.com/package/mathjslab',
        },
        {
            labelHtml: '<span class="software-link npm-wordmark-link">Pacote <img class="software-icon npm-wordmark-icon" src="/images/Npm-logo.svg" alt="npm"> mathjslab-markdown</span>',
            href: 'https://www.npmjs.com/package/mathjslab-markdown',
        },
        { label: 'Aplicativo', href: 'https://app.mathjslab.com/', icon: '/images/mathjslab-logo.svg' },
        { label: 'Calculadora', href: 'https://calc.mathjslab.com/', icon: '/images/mathjslab-logo.svg' },
        { label: 'Organização no GitHub', href: 'https://github.com/MathJSLab', icon: '/images/Octicons-mark-github.svg' },
        { label: 'Ajuda de comandos', href: 'https://github.com/MathJSLab/mathjslab-app/blob/main/help/LEIAME.md', icon: '/images/Octicons-mark-github.svg' },
    ],
    licenseTitle: 'Licença MIT',
    licenseLeadPrefixHtml: 'O <strong>MathJSLab</strong> é distribuído como software livre sob a ',
    licenseLinkLabel: 'Licença MIT',
    licenseHref: 'https://opensource.org/license/MIT',
    licenseLeadSuffix: ', permitindo uso, modificação e redistribuição nos termos abaixo.',
    licenseText,
    contactTitle: 'Contato',
    contactLeadHtml: 'Para entrar em contato com a organização do projeto <strong>MathJSLab</strong>, escreva para o endereço',
    notices: {
        contactLabel: 'Para entrar em contato com a organização do projeto MathJSLab, escreva para o endereço',
        contactEmail: 'mathjslab@gmail.com',
        educationHtml: 'O <strong>MathJSLab</strong> é voltado a fins educacionais, ajudando professores e estudantes a usar uma ferramenta de cálculo assistido que roda no navegador.',
        trademarkHtml:
            '<strong>MathJSLab</strong> não é afiliado, patrocinado nem endossado pela <a href="https://www.mathworks.com/" target="_blank" rel="noopener noreferrer">The MathWorks, Inc</a>. <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/images/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg; é marca registrada da <a href="https://www.mathworks.com/" target="_blank" rel="noopener noreferrer">The MathWorks, Inc</a>.',
    },
    footer: {
        copyrightHtml: 'Copyright &copy; 2026 <strong>MathJSLab</strong>.',
    },
};
