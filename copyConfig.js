const fs = require('fs');
const path = require('path');
// The first command line argument.
const env = process.argv[2];

if (env) {
  const basePath = `${path.dirname(__dirname)}/lijunray.github.io`;
  const envConfigPath = path.join(basePath, `${env}-config.json`);
  const resultConfigPath = path.join(basePath, 'config.json');

  const readStream = fs.createReadStream(envConfigPath).on('error', (err) => {
    console.error(err);
  });

  const writeStream = fs
    .createWriteStream(resultConfigPath)
    .on('error', (err) => {
      console.error(err);
    })
    .on('close', () => {
      console.log(`Successfully copied ${env}-config.json to config.json.`);
    });

  readStream.pipe(writeStream);
} else {
  console.log(
    'Please pass in an cli argument when running this script (dev, intg, ' + 'qa, prod).'
  );
}
