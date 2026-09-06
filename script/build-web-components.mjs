import fs from 'node:fs/promises';
import path from 'node:path';

import { build } from 'esbuild';
import * as sass from 'sass';

const root = process.cwd();
const outputFile = 'site/js/components.js';

const textImports = {
    name: 'text-imports',
    setup(context) {
        context.onLoad({ filter: /\.template\.html$/ }, async (args) => ({
            contents: `export default ${JSON.stringify(await fs.readFile(args.path, 'utf8'))};`,
            loader: 'js',
        }));
        context.onLoad({ filter: /\.styles\.scss$/ }, async (args) => {
            const result = sass.compile(args.path, {
                loadPaths: [root, path.join(root, 'includes')],
            });
            return {
                contents: `export default ${JSON.stringify(result.css)};`,
                loader: 'js',
            };
        });
    },
};

await fs.mkdir(path.dirname(outputFile), { recursive: true });

await build({
    bundle: true,
    entryPoints: ['src/main.ts'],
    format: 'esm',
    minify: true,
    outfile: outputFile,
    plugins: [textImports],
    target: ['es2022'],
});
