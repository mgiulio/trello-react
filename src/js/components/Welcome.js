var
   React = require('react'),
   Welcome = React.createClass({

      render: function() {
         return (
            <div className="welcome">
               <h1>Welcome</h1>
               <h2>Some Trello Public Boards:</h2>
               <ul>
                  <li><a href="/board/4d5ea62fd76aa1136000000c">Trello Development Board</a></li>
                  <li><a href="#">???</a></li>
               </ul>

               <p><a href="/about">about</a></p>
            </div>
         );
      }

   })
;

module.exports = Welcome;
