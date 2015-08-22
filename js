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
		browserify = require('browserify'),
		UglifyJS = require('uglify-js')
	;

	console.log('Processing ' + inFile);

   browserify(inFile)
      .transform('reactify', {es6: true, harmony: true})
      .bundle(function(err, buff) {
			if (err)
				throw err;
         var result = UglifyJS.minify(buff.toString(), {fromString: true});
         fs.outputFileSync(outFile, result.code);
      })
   ;
}
