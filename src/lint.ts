import { Linter } from 'eslint';
import { parseForESLint } from '@typescript-eslint/parser';
import eslintPlugin from '@typescript-eslint/eslint-plugin';
import nodePlugin from 'eslint-plugin-node';
import eqeqeqFixPlugin from 'eslint-plugin-eqeqeq-fix';
import prettierPlugin from 'eslint-plugin-prettier';

import rules from './rules.json';

const linter = new Linter();

const temp: { [name: string]: any } = {};
for (const key of Object.keys(eslintPlugin.rules)) {
  temp[`@typescript-eslint/${key}`] = eslintPlugin.rules[key];
}
for (const key of Object.keys(nodePlugin.rules)) {
  temp[`node/${key}`] = nodePlugin.rules[key];
}
for (const key of Object.keys(eqeqeqFixPlugin.rules)) {
  temp[`eqeqeq-fix/${key}`] = eqeqeqFixPlugin.rules[key];
}
for (const key of Object.keys(prettierPlugin.rules)) {
  temp[`prettier/${key}`] = prettierPlugin.rules[key];
}
linter.defineRules(temp);
linter.defineParser('@typescript-eslint/parser', {
  parseForESLint: parseForESLint as any,
});

const lint = (code: string) => {
  const result = linter.verify(code, {
    rules,
    parser: '@typescript-eslint/parser',
  } as any);
  return result;
};

export default lint;
