var
   React = require('react'),
   App = require('./components/App')
;

function renderApp(props) {
   React.render(<App {...props} />, document.body);
}

module.exports = renderApp;
