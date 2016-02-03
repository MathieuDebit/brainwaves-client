/*jshint esnext: true */

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: $.auth.user
    };

    PubSub.subscribe('auth', function() {
      this.setState({user: $.auth.user});
    }.bind(this));
  }

  render() {
    return (
      <div>
        <h1>Middleman React boilerplate</h1>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign up</Link></li>
          <li><Link to="/about">About</Link></li>

          {this.props.children}
        </ul>
      </div>
    );
  }
}
