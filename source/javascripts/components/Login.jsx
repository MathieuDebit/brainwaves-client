/*jshint esnext: true */

class Login extends React.Component {
  render() {
    return (
      <div>
        <h2>Log in</h2>

        <form id='log-in'>
          <input className='form-email' type='email' name='email'
                 placeholder='Email' />

          <input className='form-password' type='password' name='password'
                 placeholder='Password' />

          <button onClick={this.handleLoginClick} disabled={false}>
            Log in
          </button>
        </form>
      </div>
    );
  }

  handleLoginClick(e) {
    e.preventDefault();

    var email = $('#log-in .form-email').val();
    var password = $('#log-in .form-password').val();

    $.auth.emailSignIn({email, password}, {
      email: email,
      password: password,
      config: 'default'

    }).then(function(resp) {
      console.log(resp);
      browserHistory.push('/');

    }).fail(function(resp) {
      console.log(resp);
    });
  }
}
