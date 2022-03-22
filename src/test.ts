import {ESLint} from 'eslint';

const eslint = new ESLint();

const main = async () => {
  const result = await eslint.lintText('var a = 1');
  console.log(JSON.stringify(result, null, 2));
};

main();
