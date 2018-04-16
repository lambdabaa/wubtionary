const React = require('react');
const Terms = require('./Terms');
const Topbar = require('./Topbar');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: null};
    this.onSelect = this.onSelect.bind(this);
  }

  render() {
    return (
      <div className="app">
        <Topbar />
        <Terms
          selected={this.state.selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }

  onSelect(selected) {
    this.setState({selected});
  }
}

module.exports = App;
