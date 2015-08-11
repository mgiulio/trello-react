var
   React = require('react'),
   Toolbar = require('../Toolbar'),
   HomePageBoards = require('./HomePageBoards')
;

var HomePage = React.createClass({

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
