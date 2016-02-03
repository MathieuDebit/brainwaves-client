/*jshint esnext: true */

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <h2>Sign up</h2>

        <form id='sign-up'>
          <input className='form-email' type='email' name='email'
                 placeholder='Email' />

          <input className='form-password' type='password' name='password'
                 placeholder='Password' />

          <input className='form-password-confirmation' type='password'
                 name='password-confirmation' placeholder='Password confirmation' />

          <button onClick={this.handleSignUpClick} disabled={false}>
            Sign up
          </button>
        </form>
      </div>
    );
  }

  handleSignUpClick(e) {
    e.preventDefault();

    var email = $('#sign-up .form-email').val();
    var password = $('#sign-up .form-password').val();
    var password_confirmation = $('#sign-up .form-password-confirmation').val();

    $.auth.emailSignUp({email, password, password_confirmation}, {
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      config: 'default'

    }).then(function(resp) {
      console.log(resp);
      browserHistory.push('/');

    }).fail(function(resp) {
      console.log(resp);
    });
  }
}
