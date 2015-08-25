var settings = require('../settings');

function mixins(mixinArr) {
   mixinArr = mixinArr || [];

    return !settings.enableLifeCycleSpy ? mixinArr : mixinArr.concat([lifeCycleSpy]);
}

var lifeCycleSpy = [
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
