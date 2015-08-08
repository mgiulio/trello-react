var
   React = require('react'),
   Toolbar = require('./Toolbar'),
   ActionCreators = require('../actions/ActionCreators')
;

var Home = React.createClass({

   render: function() {
      return (
         <div className="home-page">
            <Toolbar />
            <HomePageBoards boards={this.props.boards} />
            <HomePageAbout appVersion={this.props.appVersion} />
         </div>
      );
   },

   handleBoardClick: function(e) {
      if (e.target.tagName.toLowerCase() != 'a')
         return;

      e.stopPropagation();
      e.preventDefault();

      var boardUrl = e.target.href;
      var boardId = boardUrl.slice(boardUrl.lastIndexOf('/') + 1);

      ActionCreators.loadBoard(boardId);
   }


});

module.exports = Home;


<div className="about">
   <h1 className="welcome__title">Welcome to Trello React {this.props.appVersion}</h1>
   <h2 className="welcome__subtitle">A <a href="http://trello.com">Trello</a> client <em>Thinked in <a href="https://facebook.github.io/react/index.html">React</a></em></h2>
   <p className="github">Visit the <a href="http://github.com/mgiulio/trello-react">project page on GitHub</a> for source, development notes, bugs and other informations.</p>
   <p className="credits">Crafted with <em className="hearts">&hearts;</em> <a href="http://mgiulio.github.io">mg</a></p>
</div>
