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
        <h1>Brainwaves</h1>

        <input type="checkbox" id="signedin" checked={this.state.user.signedIn} />
        <label for="signedin">Signed in ?</label>

        <button onClick={this.handleSignOutClick}>Sign out</button>

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

  handleSignOutClick(){
    if(window.confirm("Log out ?")){
      $.auth.signOut();
      browserHistory.push('/login');
    }
  }
}
