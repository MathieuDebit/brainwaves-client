/*jshint esnext: true */

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: $.auth.user || false
    };

    PubSub.subscribe('auth', function() {
      this.setState({user: $.auth.user});
    }.bind(this));
  }

  render() {
    return (
      <div>
        <h1>Brainwaves</h1>

        <fieldset disabled={!this.state.user.signedIn}>
          <legend>{this.state.user.email}</legend>

          <input type="radio" name="radio" checked={this.state.user.signedIn} />
          <label for="radio">SignedIn</label>
          <br/>
          <button onClick={this.handleSignOutClick}>Sign out</button>
        </fieldset>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign up</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>


        {this.props.children}
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
