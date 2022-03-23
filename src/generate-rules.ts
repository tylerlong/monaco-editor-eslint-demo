import { ESLint } from 'eslint';
import fs from 'fs';

const eslint = new ESLint();

const main = async () => {
  const config = await eslint.calculateConfigForFile(
    '/Users/tyler.liu/src/ts/monaco-editor-eslint-demo/.eslintrc.json'
  );
  fs.writeFileSync('src/rules.json', JSON.stringify(config.rules, null, 2));
};
main();
