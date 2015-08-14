var
   React = require('react'),
   Icon = require('../Icon')
;

var AboutPage = React.createClass({

   render: function() {
      return (
         <div className="about-page">
            <header>
               <h1 className="title">Trello React<span className="version">0.3</span></h1>
               <h2 className="subtitle">A <a href="http://trello.com">Trello</a> client <em>Thinked in <a href="https://facebook.github.io/react/index.html">React</a></em></h2>
            </header>

            <p>Visit the <a href="http://github.com/mgiulio/trello-react">project page on GitHub</a> for source, development notes, bugs and other informations.</p>

            <p className="home"><a href="home" title="Back to Home"><Icon which="home" /></a></p>

            <footer>
               <p className="credits">Crafted with <em className="hearts">&hearts;</em> <a href="http://mgiulio.github.io">mg</a></p>
            </footer>
         </div>
      );
   }

});

module.exports = AboutPage;
