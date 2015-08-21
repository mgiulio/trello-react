var
   React = require('react'),
   Toolbar = require('../../Toolbar'),
   HomePageBoards = require('./HomePageBoards')
   //, lifeCycleSpy = require('../../../mixins/lifeCycleSpy')
;

var HomePage = React.createClass({

   //mixins: [lifeCycleSpy],

   render: function() {
      return (
         <div className="home-page">
            <Toolbar />
            <HomePageBoards />
         </div>
      );
   }

});

module.exports = HomePage;
