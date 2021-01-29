/* RECURSION
Recursive functions are functions that call on themselves in order to complete a task.
In the example below, we have a 'findfiles' function, which also has a self starting function called 'next'.

The goal of the function is to read the files and subdirectories within a given directory.

The recursive logic comes in when the function finds a subdirectory; when a subdirectory is found, the findFiles function 
will call itself recursively to scan the files/folder of the subdirectory. Likewise, it will recursively call 'next' to move to the next file.

This also makes use of a callback function, which can handle the data - be it the error data, or the list of folders passed to it.

*/

var fs = require('fs');
var path = require('path');
var callback = (err, data) => {
    if(err) console.log(err)
    console.log(data)
}
var findFiles = function(dir, callback) {
  var results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return callback(err);
    var i = 0;

    //self starting function titled next, so it can be called recursively within itself
    (function next() {
      var file = list[i++];
      if (!file) return callback(null, results); //here is where we call our callback function, which will console.log the 'results'
      file = path.resolve(dir, file);

      //use fs stat to get information about the files requested
      fs.stat(file, function(err, stat) {
        if (err) return callback(err);

        //if the file is directory, we recursively call our find files and next functions
        if (stat && stat.isDirectory()) {
          findFiles(file, function(err, res) { //recursion
            if (err) return callback(err);
            results = results.concat(res);
            next(); //recursion
          });
        } else {
          results.push(file);
          next(); //recursion
        }
      });
    })();
  });
};

findFiles('./directory', callback)