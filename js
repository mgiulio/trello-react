#!/usr/bin/env node

var
	fs = require('fs-extra')
;

try {
	js();
} catch (e) {
   console.log(e);
}

function js() {
	var
		inFile = 'src/js/bootstrap.js',
		outFile = 'dist/public/js/bundle.js',
		browserify = require('browserify')
	;

	console.log('Browserify ' + inFile);
   browserify(inFile)
      .transform('reactify', {es6: true, harmony: true})
      .bundle(function(err, buff) {
			if (err)
				throw err;

			var unminifiedCode = buff.toString();
			// lenght?

			/*
			console.log('Uglify...');
			var UglifyJS = require('uglify-js');
         var result = UglifyJS.minify(unminifiedCode, {fromString: true});
			var minifiedCode = result.code;
			*/

			minifiedCode = unminifiedCode;

			console.log('Write to ' + outFile);
			fs.outputFileSync(outFile, minifiedCode);
      })
   ;
}
