var
   React = require('react'),
   Toolbar = require('../Toolbar'),
   HomePageBoards = require('./HomePageBoards'),
   HomePageAbout = require('./HomePageAbout')
;

var HomePage = React.createClass({

   render: function() {
      return (
         <div className="home-page">
            <Toolbar />
            <HomePageBoards />
            <HomePageAbout />
         </div>
      );
   }

});

module.exports = HomePage;
