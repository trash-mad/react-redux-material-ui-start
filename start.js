var childProcess =  require('child_process');
var path =  require('path');

childProcess.exec(path.normalize('npm run build && node_modules/.bin/http-server build/ -p 9999 -o'),
  function(error, stdout, stderr) {
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
})
