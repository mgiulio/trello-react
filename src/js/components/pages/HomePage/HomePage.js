var
   React = require('react'),
   Toolbar = require('../../Toolbar'),
   HomePageBoards = require('./HomePageBoards')
   ,mixins = require('../../../mixins/mixins')
;

var HomePage = React.createClass({

   mixins: mixins(),

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
