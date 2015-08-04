var
   React = require('react'),
   Welcome = React.createClass({

      render: function() {
         return (
            <div className="welcome">
               <header>
                  <h1 className="welcome__title">Welcome to Trello React {this.props.appVersion}</h1>
                  <h2 className="welcome__subtitle">A partial <a href="http://trello.com">Trello</a> clone written in <a href="https://facebook.github.io/react/index.html">React</a></h2>
               </header>
               <h3>Try It!</h3>
               <p>Try to load some public boards:</p>
               <h4>On Trello</h4>
               <ul>
                  <li><a href="/board/nC8QJJoZ">Trello Development Board</a></li>
                  <li><a href="/board/cI66RoQS">Trello Public API</a></li>
                  <li><a href="/board/mRn3F1pT">Trello Development - Shipped!</a></li>
                  <li><a href="/board/dpX2j6lT">Open Source Libraries</a></li>
                  <li><a href="/board/5tj4qAvo">Trello iOS App</a></li>
                  <li><a href="/board/nPNSBZjB">Trello Resources</a></li>
               </ul>
               <h3>About the Project</h3>
               <p>Visit the <a href="http://github.com/mgiulio/trello-react">project page on GitHub</a> for the source and for development notes.</p>
            	<footer>
                  <p className="credits">Crafted with <em className="hearts">&hearts;</em> <a href="http://mgiulio.github.io">mg</a></p>
               </footer>
            </div>
         );
      }
   })
;

module.exports = Welcome;
