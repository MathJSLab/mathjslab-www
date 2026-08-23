import licenseText from './i18n-licenseText.js';

export default {
    locale: 'es',
    htmlLang: 'es',
    ogLocale: 'es_ES',
    languageName: 'Español',
    title: 'MathJSLab - intérprete tipo MATLAB/Octave en el navegador',
    description: 'MathJSLab es un intérprete con sintaxis similar a MATLAB/Octave, creado con fines educativos y disponible en el navegador.',
    descriptionHtml:
        'MathJSLab es un intérprete con sintaxis similar a <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/images/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg;/<a class="software-link" href="https://octave.org/" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/images/octave-logo.svg" alt="" aria-hidden="true">Octave</a>, creado con fines educativos y disponible en el navegador.',
    nav: {
        menu: 'Menú',
        mainNavLabel: 'Navegación principal',
        languageLabel: 'Idioma',
        languageMenu: 'Idioma',
        overview: 'Resumen',
        pipeline: 'Flujo',
        features: 'Funciones',
        ecosystem: 'Ecosistema',
        publication: 'Publicación',
        archive: 'Archivo',
        resources: 'Recursos',
        contact: 'Contacto',
        license: 'Licencia',
        launch: 'Abrir app',
        launchShort: 'App',
        launchCalc: 'Abrir Calculadora',
    },
    hero: {
        kicker: 'Computación numérica en TypeScript para el navegador',
        heading: 'MathJSLab lleva un laboratorio matemático a la web.',
        leadHtml:
            '<strong>MathJSLab</strong> simula un subconjunto del lenguaje <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/images/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg;/<a class="software-link" href="https://octave.org/" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/images/octave-logo.svg" alt="" aria-hidden="true">Octave</a>. Usa una de las aplicaciones online para conocer los recursos de <strong>MathJSLab</strong>. Usa el <a class="software-link npm-wordmark-link" href="https://www.npmjs.com/package/mathjslab" target="_blank" rel="noopener noreferrer">paquete <img class="software-icon npm-wordmark-icon" src="/images/Npm-logo.svg" alt="npm"></a> en tu proyecto para ejecutar expresiones, funciones y matrices, con resultados renderizados en <a href="https://developer.mozilla.org/es/docs/Web/MathML" target="_blank" rel="noopener noreferrer">MathML</a> y compatibilidad completa en el navegador web.',
        primaryCtaHtml: 'Abrir app <strong>MathJSLab</strong>',
        calculatorCta: 'Abrir Calculadora',
        secondaryCta: 'Ver código en GitHub',
        installLabel: 'Instalar paquete',
        terminalTitle: 'Sesión interactiva',
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
        kicker: 'Flujo de ejecución',
        title: 'Cómo MathJSLab procesa una expresión',
        leadHtml:
            '<strong>MathJSLab</strong> lee la entrada, transforma el texto en una representación interna, evalúa expresiones y comandos, y renderiza resultados matemáticos en <a href="https://developer.mozilla.org/es/docs/Web/MathML" target="_blank" rel="noopener noreferrer">MathML</a> para el navegador.',
        image: '/images/mathjslab-pipeline-es.svg',
        imageAlt: 'Diagrama que muestra el pipeline de MathJSLab desde la entrada del usuario hasta el parser, evaluación, procesamiento de comandos y renderizado en MathML.',
        carouselOpenLabel: 'Abrir carrusel del flujo',
        carouselThumb: '/images/mathjslab-pipeline-es.webp',
        carouselPanels: [
            '/images/mathjslab-pipeline-es-1-grammar-panel.svg',
            '/images/mathjslab-pipeline-es-2-code-panel.svg',
            '/images/mathjslab-pipeline-es-3-ast-panel.svg',
            '/images/mathjslab-pipeline-es-4-evaluator-panel.svg',
        ],
    },
    highlights: [
        {
            title: 'Motor intérprete',
            textHtml:
                'El paquete principal está escrito en <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">TypeScript</a> y simula un subconjunto de la sintaxis <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/images/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg;/<a class="software-link" href="https://octave.org/" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/images/octave-logo.svg" alt="" aria-hidden="true">Octave</a>.',
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
        'La Organización <strong>MathJSLab</strong> en GitHub posee los repositorios del proyecto: el <a class="software-link npm-wordmark-link" href="https://www.npmjs.com/package/mathjslab" target="_blank" rel="noopener noreferrer">paquete <img class="software-icon npm-wordmark-icon" src="/images/Npm-logo.svg" alt="npm"></a>, las aplicaciones web, la página del proyecto y el perfil de la propia organización.',
    repositories: [
        {
            name: 'mathjslab',
            role: 'Paquete intérprete',
            text: 'Motor TypeScript publicado en npm, con componentes de parser, evaluador y renderizado matemático.',
            href: 'https://github.com/MathJSLab/mathjslab',
            icon: '/images/Octicons-mark-github.svg',
        },
        {
            name: 'mathjslab-app',
            role: 'Aplicación demo',
            text: 'Progressive web app que presenta el intérprete en una interfaz adaptable para el navegador.',
            href: 'https://github.com/MathJSLab/mathjslab-app',
            icon: '/images/Octicons-mark-github.svg',
        },
        {
            name: 'mathjslab-calc',
            role: 'Aplicación calculadora',
            textHtml: 'Calculadora científica con interfaz de prompt, alojada en calc.mathjslab.com y basada en el paquete <strong>MathJSLab</strong>.',
            href: 'https://github.com/MathJSLab/mathjslab-calc',
            icon: '/images/Octicons-mark-github.svg',
        },
        {
            name: 'mathjslab-batch',
            role: 'Aplicación por lotes',
            textHtml: 'Aplicación web de procesamiento por lotes, alojada en batch.mathjslab.com y basada en el paquete <strong>MathJSLab</strong>.',
            href: 'https://github.com/MathJSLab/mathjslab-batch',
            icon: '/images/Octicons-mark-github.svg',
        },
        {
            name: 'mathjslab-github',
            role: 'Soporte de la organización',
            textHtml: 'Perfil, plantillas de repositorio y materiales de soporte compartidos para <strong>MathJSLab</strong>.',
            href: 'https://github.com/MathJSLab',
            icon: '/images/Octicons-mark-github.svg',
        },
    ],
    publicationTitle: 'Publicación e identificadores',
    publicationLeadHtml: '<strong>MathJSLab</strong> se publica como software libre, distribuido como un paquete reutilizable y con identificadores persistentes asignados.',
    publicationTextHtml:
        'El paquete intérprete se publica en el registro npm como mathjslab. El código fuente se mantiene en la organización <strong>MathJSLab</strong> en GitHub, y el paquete, la aplicación Web complementaria, la calculadora y la aplicación por lotes tienen DOI e ISBN para citación en contextos académicos e institucionales.',
    publications: [
        {
            name: 'mathjslab',
            roleHtml:
                '<a class="software-link npm-wordmark-link" href="https://www.npmjs.com/package/mathjslab" target="_blank" rel="noopener noreferrer">Paquete <img class="software-icon npm-wordmark-icon" src="/images/Npm-logo.svg" alt="npm"></a>',
            text: 'El paquete intérprete en TypeScript se distribuye mediante npm, está disponible en jsDelivr y tiene licencia MIT.',
            href: 'https://www.npmjs.com/package/mathjslab',
            icon: '/images/Npm-logo.svg',
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
                    src: 'https://dl.circleci.com/status-badge/images/gh/MathJSLab/mathjslab/tree/main.svg?style=svg',
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
                    alt: 'Descargas npm por semana',
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
            text: 'La aplicación de navegador demuestra el intérprete, se mantiene en GitHub y tiene sus propios registros DOI e ISBN.',
            href: 'https://github.com/MathJSLab/mathjslab-app',
            icon: '/images/Octicons-mark-github.svg',
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
                    src: 'https://dl.circleci.com/status-badge/images/gh/MathJSLab/mathjslab-app/tree/main.svg?style=svg',
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
            text: 'La aplicación calculadora ofrece una interfaz de prompt simplificada alojada en calc.mathjslab.com, con DOI propio y badges de publicación del proyecto.',
            href: 'https://github.com/MathJSLab/mathjslab-calc',
            icon: '/images/Octicons-mark-github.svg',
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
            textHtml: 'La aplicación por lotes ofrece una interfaz de área de texto con resaltado de sintaxis para ejecutar comandos <strong>MathJSLab</strong> en secuencia.',
            href: 'https://github.com/MathJSLab/mathjslab-batch',
            icon: '/images/Octicons-mark-github.svg',
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
    archiveLeadHtml: 'Archivos y documentos relacionados con el proyecto <strong>MathJSLab</strong>.',
    archiveItems: [
        {
            group: '01',
            title: 'Uma proposta metodológica que articula a resolução literal de problemas de Física e o software MathJSLab',
            date: '13 de maio de 2026',
            descriptionHtml: 'Versión en portugués del artículo sobre resolución literal de problemas en la enseñanza de Física y Matemática con <strong>MathJSLab</strong>.',
            language: 'Portugués',
            href: '/archive/01/main-pt.pdf',
            file: 'archive/01/main-pt.pdf',
        },
        {
            group: '01',
            title: 'A methodological proposal that integrates symbolic problem-solving in physics with the MathJSLab software',
            date: 'July 10, 2026',
            descriptionHtml: 'Versión en inglés del artículo sobre resolución simbólica de problemas en la enseñanza de Física y Matemática con <strong>MathJSLab</strong>.',
            language: 'Inglés',
            href: '/archive/01/main-en.pdf',
            file: 'archive/01/main-en.pdf',
        },
        {
            group: '02',
            title: 'MathJSLab: Prova de conceito de computação científica no navegador e software como artefato acadêmico',
            date: '4 de junho de 2026',
            descriptionHtml: 'Artículo en portugués que presenta <strong>MathJSLab</strong> como computación científica en el navegador y software publicable como artefacto académico.',
            language: 'Portugués',
            href: '/archive/02/main-pt.pdf',
            file: 'archive/02/main-pt.pdf',
        },
    ],
    resourcesTitle: 'Recursos',
    resourcesLeadHtml:
        'Prueba las aplicaciones web desde el hub de aplicaciones. Instala el <a class="software-link npm-wordmark-link" href="https://www.npmjs.com/package/mathjslab" target="_blank" rel="noopener noreferrer">paquete <img class="software-icon npm-wordmark-icon" src="/images/Npm-logo.svg" alt="npm"></a>, navega por el perfil de la organización en GitHub o consulta la ayuda de comandos.',
    resources: [
        { label: 'Abrir app', href: '/es/app/', icon: '/images/mathjslab-logo.svg' },
        {
            labelHtml: '<span class="software-link npm-wordmark-link">Paquete <img class="software-icon npm-wordmark-icon" src="/images/Npm-logo.svg" alt="npm"></span>',
            href: 'https://www.npmjs.com/package/mathjslab',
        },
        { label: 'Organización en GitHub', href: 'https://github.com/MathJSLab', icon: '/images/Octicons-mark-github.svg' },
        { label: 'Ayuda de comandos', href: 'https://github.com/MathJSLab/mathjslab-app/blob/main/help/LEAME.md', icon: '/images/Octicons-mark-github.svg' },
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
    licenseLeadSuffix: ', permitiendo uso, modificación y redistribución según los términos siguientes.',
    licenseText,
    contactTitle: 'Contacto',
    contactLeadHtml: 'Para contactar con la organización del proyecto <strong>MathJSLab</strong>, escribe a la dirección',
    notices: {
        contactLabel: 'Para contactar con la organización del proyecto MathJSLab, escribe a la dirección',
        contactEmail: 'mathjslab@gmail.com',
        educationHtml:
            '<strong>MathJSLab</strong> está orientado a fines educativos, ayudando a docentes y estudiantes a usar una herramienta de cálculo asistido que funciona en el navegador.',
        trademarkHtml:
            '<strong>MathJSLab</strong> no está afiliado, patrocinado ni respaldado por <a href="https://www.mathworks.com/" target="_blank" rel="noopener noreferrer">The MathWorks, Inc</a>. <a class="software-link" href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noopener noreferrer"><img class="software-icon" src="/images/matlab-icon.svg" alt="" aria-hidden="true">MATLAB</a>&reg; es una marca registrada de <a href="https://www.mathworks.com/" target="_blank" rel="noopener noreferrer">The MathWorks, Inc</a>.',
    },
    footer: {
        copyrightHtml: 'Copyright &copy; 2026 <strong>MathJSLab</strong>.',
    },
};
