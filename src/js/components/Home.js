var
   React = require('react'),
   Toolbar = require('./Toolbar'),
   Welcome = require('./Welcome')
;

var Home = React.createClass({

   render: function() {
      return (
         <div className="app app--home">
            <Toolbar />
            <div className="app__body" >
               <Welcome appVersion={this.props.appVersion} />
            </div>
         </div>
      );
   }

});

module.exports = Home;
