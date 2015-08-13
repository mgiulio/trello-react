var
   React = require('react')
;

var AboutPage = React.createClass({

   render: function() {
      return (
         <div className="about">
            <h1 className="title">Welcome to Trello React appversion</h1>
            <h2 className="subtitle">A <a href="http://trello.com">Trello</a> client <em>Thinked in <a href="https://facebook.github.io/react/index.html">React</a></em></h2>
            <p className="github">Visit the <a href="http://github.com/mgiulio/trello-react">project page on GitHub</a> for source, development notes, bugs and other informations.</p>
            <p className="credits">Crafted with <em className="hearts">&hearts;</em> <a href="http://mgiulio.github.io">mg</a></p>
         </div>
      );
   }

});

module.exports = AboutPage;
