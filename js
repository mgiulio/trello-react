#!/usr/bin/env node

var
	fs = require('fs-extra')
;

//try {
js();
/*
} catch (e) {
   console.log('*** Uglify JS error ***');
   console.log(e.message + ' in ' +  e.filename + ' @ ' + e.line + ':' + e.col);
   throw e;
}
*/

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
      .bundle().pipe(fs.createWriteStream(outFile))
      /*
      .bundle(function(err, buff) {
         var result = UglifyJS.minify(buff, {
      	     fromString: true
      		   //outSourceMap: "inline-editor.js.map"
      	});

         fs.outputFileSync(outFile, result.code);
      })
      */
   ;
}
