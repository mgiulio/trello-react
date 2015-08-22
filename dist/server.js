#!/bin/env node

var
   express = require('express'),
   fs = require('fs'),
   ipaddress,
   port
;

bootstrap();

function bootstrap() {
   setupVariables();
   setupTerminationHandlers();

   var app = express()

   app.use(express.static('dist/public'));

   app.get('*', function (req, res) {
     res.sendFile(__dirname + '/public/index.html');
   });

   var server = app.listen(port, ipaddress, function () {
     console.log('%s: Node server started on %s:%d ...', Date(Date.now() ), ipaddress, port);
   });
}

function setupVariables() {
   ipaddress = process.env.OPENSHIFT_NODEJS_IP;
   port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

   if (typeof ipaddress === "undefined") {
      //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
      //  allows us to run/test the app locally.
      console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
      ipaddress = "127.0.0.1";
   };
}

/**
 *  Setup termination handlers (for exit and a list of signals).
 */
function setupTerminationHandlers() {
    process.on('exit', function() { terminator(); });

    // Removed 'SIGPIPE' from the list - bugz 852598.
    ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
     'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
    ].forEach(function(element, index, array) {
        process.on(element, function() { terminator(element); });
    });
};

/**
 *  terminator === the termination handler
 *  Terminate server on receipt of the specified signal.
 *  @param {string} sig  Signal to terminate on.
 */
function terminator(sig){
    if (typeof sig === "string") {
      console.log('%s: Received %s - terminating sample app ...', Date(Date.now()), sig);
      process.exit(1);
    }
    console.log('%s: Node server stopped.', Date(Date.now()) );
};
