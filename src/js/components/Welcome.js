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
               <p>Try to load some Trello public boards:</p>
               <ul>
                  <li><a href="/board/4d5ea62fd76aa1136000000c">Trello Development Board</a></li>
               </ul>
               <p>Visit the <a href="http://github.com/mgiulio/trello-react">project page on GitHub</a> for the source and for development notes.</p>
            	<footer>
                  <p class="credits">Crafted with <em class="hearts">&hearts;</em> <a href="http://mgiulio.github.io">mg</a></p>
               </footer>
            </div>
         );
      }
   })
;

module.exports = Welcome;
