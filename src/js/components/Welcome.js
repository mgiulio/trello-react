var
   React = require('react'),
   ActionCreators = require('../actions/ActionCreators')
;

var Welcome = React.createClass({

   render: function() {
      return (
         <div className="welcome">

            <section className="about">
               <h1 className="welcome__title">Welcome to Trello React {this.props.appVersion}</h1>
               <h2 className="welcome__subtitle">A <a href="http://trello.com">Trello</a> client <em>Thinked in <a href="https://facebook.github.io/react/index.html">React</a></em></h2>
               <p className="github">Visit the <a href="http://github.com/mgiulio/trello-react">project page on GitHub</a> for source, development notes, bugs and other informations.</p>
               <p className="credits">Crafted with <em className="hearts">&hearts;</em> <a href="http://mgiulio.github.io">mg</a></p>
            </section>

            <section className="boards" onClick={this.handleBoardClick}>
               <section className="boards-section">
                  <h2 className="boards-section-title">About Trello Development</h2>
                  <ul className="boards-section__items">
                     <li className="boards-section__items__item">
                        <h2 className="boards-section__items__item__title"><a href="/board/nC8QJJoZ">Trello Development Board</a></h2>
                     </li>
                     <li className="boards-section__items__item"><a href="/board/cI66RoQS">Trello Public API</a></li>
                     <li className="boards-section__items__item"><a href="/board/mRn3F1pT">Trello Development - Shipped!</a></li>
                     <li className="boards-section__items__item"><a href="/board/dpX2j6lT">Open Source Libraries</a></li>
                     <li className="boards-section__items__item"><a href="/board/5tj4qAvo">Trello iOS App</a></li>
                     <li className="boards-section__items__item"><a href="/board/nPNSBZjB">Trello Resources</a></li>
                  </ul>
               </section>

               <section className="boards-section">
                  <h2 className="boards-section-title">Are you going to Get Married?</h2>
                  <ul className="boards-section__items">
                     <li className="boards-section__items__item"><a href="/board/kw7E5XeZ">Wedding Seating Arrangement</a></li>
                     <li className="boards-section__items__item"><a href="/board/wFECC39M">Bridal Party Trello Board</a></li>
                     <li className="boards-section__items__item"><a href="/board/lHRaeSZ7">Trello for Wedding Day Timeline</a></li>
                     <li className="boards-section__items__item"><a href="/board/IuoxVMY1">Trello for Sending Thank You Cards</a></li>
                  </ul>
               </section>

            </section>

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

module.exports = Welcome;
