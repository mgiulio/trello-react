var
   React = require('react'),
   Toolbar = require('../Toolbar')
   HomePageBoards = require('./HomePageBoards')//,
   //HomePageAbout = require('./HomePageAbout')
;

var HomePage = React.createClass({

   render: function() {
      return (
         <div className="home-page">
            <Toolbar />
            <HomePageBoards boards={this.props.boards} />
            {/* <HomePageAbout appVersion={this.props.appVersion} /> */}
         </div>
      );
   }

});

module.exports = HomePage;
