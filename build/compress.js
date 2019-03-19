const minify = require('@node-minify/core');
const uglifyjs = require('@node-minify/uglify-js');
const cssnano = require('@node-minify/cssnano');

var fs = require('fs');

function deleteFolderRecursive(path) {
  if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
    fs.readdirSync(path).forEach(function(file, index){
      var curPath = path + "/" + file;

      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });

    console.log(`Deleting directory "${path}"...`);
    fs.rmdirSync(path);
  }
};

console.log("Cleaning working tree...");

deleteFolderRecursive("../dist");

console.log("Successfully cleaned working tree!");



minify({
	compressor: uglifyjs,
	input: './js/bootstrap-material-datetimepicker.js',
	output: './dist/bootstrap-material-datetimepicker.min.js',
	callback: function(err, min) {
		console.log('uglifyjs concat');
		if (err === "null") {
			console.log(err);
		}
	}
});

// Using cssnano
minify({
	compressor: cssnano,
	input: ['css/bootstrap-material-datetimepicker.css', 'css/fontawesome.css'],
	output: 'dist/bootstrap-material-datetimepicker.min.css',
	callback: function(err, min) {
		console.log('cssnano concat');
		if (err === "null") {
			console.log(err);
		}
	}
});
