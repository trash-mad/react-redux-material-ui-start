var childProcess =  require('child_process');
var path =  require('path');

childProcess.exec(path.normalize('npm run clean && node_modules/.bin/webpack --config webpack/production.config.babel.js'),
  function(error, stdout, stderr) {
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
})
