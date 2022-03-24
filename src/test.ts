import lint from './lint';

const main = async () => {
  const result = await lint('var a = 1');
  console.log(JSON.stringify(result, null, 2));
};

main();
