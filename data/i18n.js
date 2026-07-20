import { IntlMessageFormat } from 'intl-messageformat';

const source = {
    en: {
        locale: 'en',
        htmlLang: 'en',
        languageName: 'English',
        title: 'MathJSLab - browser-based MATLAB/Octave-like interpreter',
        description:
            'MathJSLab is a TypeScript interpreter with MATLAB/Octave-like syntax, built for education and available in the browser.',
        nav: {
            overview: 'Overview',
            features: 'Features',
            ecosystem: 'Ecosystem',
            publication: 'Publication',
            resources: 'Resources',
            contact: 'Contact',
            launch: 'Open app',
        },
        hero: {
            kicker: 'TypeScript numerical computing for the browser',
            heading: 'MathJSLab brings a MATLAB/Octave-like lab to the web.',
            lead:
                'Use the online app as a teaching and learning calculator, or build on the npm package to run expressions, functions, matrices, plots and MathML-rendered results in browser environments.',
            primaryCta: 'Open MathJSLab app',
            secondaryCta: 'View source on GitHub',
            installLabel: 'Install package',
            terminalTitle: 'Interactive session',
            promptOne: 'A = [1 2; 3 4]',
            outputOne: 'A = [ [1, 2], [3, 4] ]',
            promptTwo: 'det(A)',
            outputTwo: 'ans = -2',
        },
        highlights: [
            {
                title: 'Interpreter engine',
                text:
                    'The core package is written in TypeScript and emulates a subset of MATLAB/Octave syntax for educational calculation workflows.',
            },
            {
                title: 'Browser-ready app',
                text:
                    'The companion PWA demonstrates the package with Web Components, responsive layout, MathJax, Markdown help and Plotly visualizations.',
            },
            {
                title: 'Multilingual help',
                text:
                    'Command help is organized in English, Portuguese and Spanish, matching the languages supported by this project page.',
            },
            {
                title: 'Mathematical output',
                text:
                    'The evaluator works with arbitrary precision arithmetic through decimal.js and can unparse expressions and results as MathML.',
            },
        ],
        ecosystemTitle: 'Project ecosystem',
        ecosystemLead:
            'This page is the public home for a family of repositories: the interpreter, the web app and the shared GitHub organization assets.',
        repositories: [
            {
                name: 'mathjslab',
                role: 'Interpreter package',
                text:
                    'TypeScript engine published to npm, with parser, evaluator and mathematical rendering components.',
                href: 'https://github.com/MathJSLab/mathjslab',
            },
            {
                name: 'mathjslab-app',
                role: 'Demo application',
                text:
                    'Progressive web app that exposes the interpreter in a responsive browser interface.',
                href: 'https://github.com/MathJSLab/mathjslab-app',
            },
            {
                name: 'mathjslab-github',
                role: 'Organization support',
                text:
                    'Shared profile, repository templates and project-wide support material for MathJSLab.',
                href: 'https://github.com/MathJSLab',
            },
        ],
        publicationTitle: 'Publication and identifiers',
        publicationLead:
            'MathJSLab is published as open software with package distribution, source organization and academic identifiers.',
        publicationText:
            'The interpreter package is published in the npm registry as mathjslab. The source code is maintained under the MathJSLab organization on GitHub, and both the package and the companion web application have DOI and ISBN identifiers so they can be cited in academic and institutional contexts.',
        publications: [
            {
                name: 'mathjslab',
                role: 'npm package',
                text:
                    'The TypeScript interpreter package is distributed through npm, mirrored through jsDelivr and licensed under MIT.',
                href: 'https://www.npmjs.com/package/mathjslab',
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
        resourcesTitle: 'Resources',
        resourcesLead:
            'Start with the app, install the package, or browse the implementation and help files.',
        resources: [
            { label: 'Launch the app', href: 'https://app.mathjslab.com/' },
            { label: 'npm package', href: 'https://www.npmjs.com/package/mathjslab' },
            { label: 'GitHub organization', href: 'https://github.com/MathJSLab' },
            { label: 'Command help', href: 'https://github.com/MathJSLab/mathjslab-app/tree/main/help' },
        ],
        contactTitle: 'Contact',
        contactLead:
            'For general project administration and institutional contact, write to the official MathJSLab email address.',
        notices: {
            contactLabel: 'For general project administration and institutional contact, write to',
            contactEmail: 'mathjslab@gmail.com',
            education:
                'MathJSLab is intended for educational purposes, helping teachers and students use a computer-aided calculation tool that runs in the browser.',
            trademark:
                'MathJSLab is not affiliated, sponsored or endorsed by The MathWorks, Inc. MATLAB is a registered trademark of The MathWorks, Inc.',
        },
        footer: {
            copyright: 'Copyright 2026 MathJSLab.',
        },
    },
    pt: {
        locale: 'pt',
        htmlLang: 'pt-BR',
        languageName: 'Português',
        title: 'MathJSLab - interpretador estilo MATLAB/Octave no navegador',
        description:
            'MathJSLab é um interpretador em TypeScript com sintaxe semelhante a MATLAB/Octave, criado para educação e disponível no navegador.',
        nav: {
            overview: 'Visão geral',
            features: 'Recursos',
            ecosystem: 'Ecossistema',
            publication: 'Publicação',
            resources: 'Links',
            contact: 'Contato',
            launch: 'Abrir app',
        },
        hero: {
            kicker: 'Computação numérica em TypeScript para o navegador',
            heading: 'MathJSLab leva um laboratório estilo MATLAB/Octave para a web.',
            lead:
                'Use o aplicativo online como calculadora de ensino e aprendizagem, ou use o pacote npm para executar expressões, funções, matrizes, gráficos e resultados renderizados em MathML no navegador.',
            primaryCta: 'Abrir app MathJSLab',
            secondaryCta: 'Ver código no GitHub',
            installLabel: 'Instalar pacote',
            terminalTitle: 'Sessão interativa',
            promptOne: 'A = [1 2; 3 4]',
            outputOne: 'A = [ [1, 2], [3, 4] ]',
            promptTwo: 'det(A)',
            outputTwo: 'ans = -2',
        },
        highlights: [
            {
                title: 'Motor interpretador',
                text:
                    'O pacote principal é escrito em TypeScript e emula um subconjunto da sintaxe MATLAB/Octave para fluxos educacionais de cálculo.',
            },
            {
                title: 'Aplicativo web',
                text:
                    'A PWA complementar demonstra o pacote com Web Components, layout responsivo, MathJax, ajuda em Markdown e visualizações com Plotly.',
            },
            {
                title: 'Ajuda multilíngue',
                text:
                    'A ajuda dos comandos está organizada em inglês, português e espanhol, acompanhando os idiomas desta página.',
            },
            {
                title: 'Saída matemática',
                text:
                    'O avaliador trabalha com aritmética de precisão arbitrária via decimal.js e pode gerar expressões e resultados em MathML.',
            },
        ],
        ecosystemTitle: 'Ecossistema do projeto',
        ecosystemLead:
            'Esta página é a casa pública de uma família de repositórios: o interpretador, o aplicativo web e os materiais compartilhados da organização no GitHub.',
        repositories: [
            {
                name: 'mathjslab',
                role: 'Pacote interpretador',
                text:
                    'Motor TypeScript publicado no npm, com componentes de parser, avaliador e renderização matemática.',
                href: 'https://github.com/MathJSLab/mathjslab',
            },
            {
                name: 'mathjslab-app',
                role: 'Aplicativo demo',
                text:
                    'Progressive web app que apresenta o interpretador em uma interface responsiva no navegador.',
                href: 'https://github.com/MathJSLab/mathjslab-app',
            },
            {
                name: 'mathjslab-github',
                role: 'Suporte da organização',
                text:
                    'Perfil, modelos de repositório e materiais de suporte compartilhados para o MathJSLab.',
                href: 'https://github.com/MathJSLab',
            },
        ],
        publicationTitle: 'Publicação e identificadores',
        publicationLead:
            'O MathJSLab é publicado como software aberto, com distribuição de pacote, organização do código-fonte e identificadores acadêmicos.',
        publicationText:
            'O pacote interpretador é publicado no registro npm como mathjslab. O código-fonte é mantido na organização MathJSLab no GitHub, e tanto o pacote quanto a aplicação Web complementar possuem DOI e ISBN para citação em contextos acadêmicos e institucionais.',
        publications: [
            {
                name: 'mathjslab',
                role: 'Pacote npm',
                text:
                    'O pacote interpretador em TypeScript é distribuído pelo npm, espelhado pelo jsDelivr e licenciado sob MIT.',
                href: 'https://www.npmjs.com/package/mathjslab',
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
        resourcesTitle: 'Links úteis',
        resourcesLead:
            'Comece pelo aplicativo, instale o pacote ou navegue pela implementação e pelos arquivos de ajuda.',
        resources: [
            { label: 'Abrir o app', href: 'https://app.mathjslab.com/' },
            { label: 'Pacote npm', href: 'https://www.npmjs.com/package/mathjslab' },
            { label: 'Organização no GitHub', href: 'https://github.com/MathJSLab' },
            { label: 'Ajuda de comandos', href: 'https://github.com/MathJSLab/mathjslab-app/tree/main/help' },
        ],
        contactTitle: 'Contato',
        contactLead:
            'Para administração geral do projeto e contato institucional, escreva para o endereço oficial do MathJSLab.',
        notices: {
            contactLabel: 'Para administração geral do projeto e contato institucional, escreva para',
            contactEmail: 'mathjslab@gmail.com',
            education:
                'O MathJSLab é voltado a fins educacionais, ajudando professores e estudantes a usar uma ferramenta de cálculo assistido que roda no navegador.',
            trademark:
                'MathJSLab não é afiliado, patrocinado nem endossado pela The MathWorks, Inc. MATLAB é marca registrada da The MathWorks, Inc.',
        },
        footer: {
            copyright: 'Copyright 2026 MathJSLab.',
        },
    },
    es: {
        locale: 'es',
        htmlLang: 'es',
        languageName: 'Español',
        title: 'MathJSLab - intérprete tipo MATLAB/Octave en el navegador',
        description:
            'MathJSLab es un intérprete en TypeScript con sintaxis similar a MATLAB/Octave, creado para educación y disponible en el navegador.',
        nav: {
            overview: 'Resumen',
            features: 'Funciones',
            ecosystem: 'Ecosistema',
            publication: 'Publicación',
            resources: 'Recursos',
            contact: 'Contacto',
            launch: 'Abrir app',
        },
        hero: {
            kicker: 'Computación numérica en TypeScript para el navegador',
            heading: 'MathJSLab lleva un laboratorio tipo MATLAB/Octave a la web.',
            lead:
                'Usa la aplicación online como calculadora para enseñanza y aprendizaje, o integra el paquete npm para ejecutar expresiones, funciones, matrices, gráficos y resultados renderizados en MathML en el navegador.',
            primaryCta: 'Abrir app MathJSLab',
            secondaryCta: 'Ver código en GitHub',
            installLabel: 'Instalar paquete',
            terminalTitle: 'Sesión interactiva',
            promptOne: 'A = [1 2; 3 4]',
            outputOne: 'A = [ [1, 2], [3, 4] ]',
            promptTwo: 'det(A)',
            outputTwo: 'ans = -2',
        },
        highlights: [
            {
                title: 'Motor intérprete',
                text:
                    'El paquete principal está escrito en TypeScript y emula un subconjunto de la sintaxis MATLAB/Octave para flujos educativos de cálculo.',
            },
            {
                title: 'Aplicación web',
                text:
                    'La PWA complementaria demuestra el paquete con Web Components, diseño adaptable, MathJax, ayuda en Markdown y visualizaciones con Plotly.',
            },
            {
                title: 'Ayuda multilingüe',
                text:
                    'La ayuda de comandos está organizada en inglés, portugués y español, igual que los idiomas soportados por esta página.',
            },
            {
                title: 'Salida matemática',
                text:
                    'El evaluador trabaja con aritmética de precisión arbitraria mediante decimal.js y puede generar expresiones y resultados en MathML.',
            },
        ],
        ecosystemTitle: 'Ecosistema del proyecto',
        ecosystemLead:
            'Esta página es la casa pública de una familia de repositorios: el intérprete, la aplicación web y los recursos compartidos de la organización en GitHub.',
        repositories: [
            {
                name: 'mathjslab',
                role: 'Paquete intérprete',
                text:
                    'Motor TypeScript publicado en npm, con componentes de parser, evaluador y renderizado matemático.',
                href: 'https://github.com/MathJSLab/mathjslab',
            },
            {
                name: 'mathjslab-app',
                role: 'Aplicación demo',
                text:
                    'Progressive web app que presenta el intérprete en una interfaz adaptable para el navegador.',
                href: 'https://github.com/MathJSLab/mathjslab-app',
            },
            {
                name: 'mathjslab-github',
                role: 'Soporte de la organización',
                text:
                    'Perfil, plantillas de repositorio y materiales de soporte compartidos para MathJSLab.',
                href: 'https://github.com/MathJSLab',
            },
        ],
        publicationTitle: 'Publicación e identificadores',
        publicationLead:
            'MathJSLab se publica como software abierto, con distribución de paquete, organización del código fuente e identificadores académicos.',
        publicationText:
            'El paquete intérprete se publica en el registro npm como mathjslab. El código fuente se mantiene en la organización MathJSLab en GitHub, y tanto el paquete como la aplicación Web complementaria tienen DOI e ISBN para citación en contextos académicos e institucionales.',
        publications: [
            {
                name: 'mathjslab',
                role: 'Paquete npm',
                text:
                    'El paquete intérprete en TypeScript se distribuye mediante npm, está disponible en jsDelivr y tiene licencia MIT.',
                href: 'https://www.npmjs.com/package/mathjslab',
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
        resourcesTitle: 'Recursos',
        resourcesLead:
            'Empieza por la aplicación, instala el paquete o explora la implementación y los archivos de ayuda.',
        resources: [
            { label: 'Abrir la app', href: 'https://app.mathjslab.com/' },
            { label: 'Paquete npm', href: 'https://www.npmjs.com/package/mathjslab' },
            { label: 'Organización en GitHub', href: 'https://github.com/MathJSLab' },
            { label: 'Ayuda de comandos', href: 'https://github.com/MathJSLab/mathjslab-app/tree/main/help' },
        ],
        contactTitle: 'Contacto',
        contactLead:
            'Para administración general del proyecto y contacto institucional, escribe a la dirección oficial de MathJSLab.',
        notices: {
            contactLabel: 'Para administración general del proyecto y contacto institucional, escribe a',
            contactEmail: 'mathjslab@gmail.com',
            education:
                'MathJSLab está orientado a fines educativos, ayudando a docentes y estudiantes a usar una herramienta de cálculo asistido que funciona en el navegador.',
            trademark:
                'MathJSLab no está afiliado, patrocinado ni respaldado por The MathWorks, Inc. MATLAB es una marca registrada de The MathWorks, Inc.',
        },
        footer: {
            copyright: 'Copyright 2026 MathJSLab.',
        },
    },
};

const formatValue = (value, locale) => {
    if (typeof value === 'string') {
        return new IntlMessageFormat(value, locale).format();
    }

    if (Array.isArray(value)) {
        return value.map((entry) => formatValue(entry, locale));
    }

    if (value && typeof value === 'object') {
        return Object.fromEntries(Object.entries(value).map(([key, entry]) => [key, formatValue(entry, locale)]));
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
