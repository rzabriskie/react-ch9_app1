var React = require('react');
var ReactApp1 = React.createClass({
  render: function(){
    return (
      <div>
        Hello World
      </div>
    )
  }
});

ReactDOM.render(<ReactApp1 />, document.getElementById('app'));

