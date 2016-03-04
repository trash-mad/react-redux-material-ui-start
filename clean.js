var childProcess =  require('child_process');
var path =  require('path');

childProcess.exec(path.normalize('node_modules/.bin/rimraf build/'),
  function(error, stdout, stderr) {
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
})
