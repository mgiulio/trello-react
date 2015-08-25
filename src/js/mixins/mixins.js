var settings = require('../settings');

function mixins(mixinArr) {
   mixinArr = mixinArr || [];

    return !settings['lifecycle logger'] ? mixinArr : mixinArr.concat([lifeCycleLogger]);
}

var lifeCycleLogger = [
   'componentWillMount',
   'componentDidMount',
   'componentWillUnmount',
   'componentWillReceiveProps',
   'shouldComponentUpdate',
   'componentWillUpdate',
   'componentDidUpdate'
   ].reduce(
      (o, m) => {
         o[m] = function() {
            console.log(`${this.constructor.displayName}::${m}: `, arguments);
            return true; // for componentShouldUpdate()
         };
         return o;
      },
      {}
   );

module.exports = mixins;
