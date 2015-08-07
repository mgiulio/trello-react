var
   React = require('react'),
   Toolbar = require('./Toolbar')
;

var LoadingPage = React.createClass({

   render: function() {
      return (
         <div className="app app--loading">
            <Toolbar />
            <div className="app__body" >
               <h1>Loading</h1>
            </div>
         </div>
      );
   }

});

module.exports = LoadingPage;
