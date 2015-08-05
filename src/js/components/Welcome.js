var
   React = require('react'),
   Welcome = React.createClass({

      render: function() {
         return (
            <div className="welcome">
               <header>
                  <h1 className="welcome__title">Welcome to Trello React {this.props.appVersion}</h1>
                  <h2 className="welcome__subtitle">A <a href="http://trello.com">Trello</a> client <em>Thinked in <a href="https://facebook.github.io/react/index.html">React</a></em></h2>
               </header>
               <h3>Try It!</h3>
               <p>Try to load some public boards:</p>
               <h4>About Trello Development</h4>
               <ul>
                  <li><a href="/board/nC8QJJoZ">Trello Development Board</a></li>
                  <li><a href="/board/cI66RoQS">Trello Public API</a></li>
                  <li><a href="/board/mRn3F1pT">Trello Development - Shipped!</a></li>
                  <li><a href="/board/dpX2j6lT">Open Source Libraries</a></li>
                  <li><a href="/board/5tj4qAvo">Trello iOS App</a></li>
                  <li><a href="/board/nPNSBZjB">Trello Resources</a></li>
               </ul>
               <h4>Are you going to Get Married?</h4>
               <ul>
                  <li><a href="/board/kw7E5XeZ">Wedding Seating Arrangement</a></li>
                  <li><a href="/board/wFECC39M">Bridal Party Trello Board</a></li>
                  <li><a href="/board/lHRaeSZ7">Trello for Wedding Day Timeline</a></li>
                  <li><a href="/board/IuoxVMY1">Trello for Sending Thank You Cards</a></li>
               </ul>
               <h3>About the Project</h3>
               <p>Visit the <a href="http://github.com/mgiulio/trello-react">project page on GitHub</a> for source, development notes, bugs and other informations.</p>
            	<footer>
                  <p className="credits">Crafted with <em className="hearts">&hearts;</em> <a href="http://mgiulio.github.io">mg</a></p>
               </footer>
            </div>
         );
      }
   })
;

module.exports = Welcome;