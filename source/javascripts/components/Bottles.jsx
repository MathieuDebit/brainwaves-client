/*jshint esnext: true */

class Bottles extends React.Component {
  constructor(props) {
    super(props);

    $.auth.validateToken()
      .then(function() {
        this.loadBottles();
      }.bind(this))
      .fail(function() {
        browserHistory.push('/login');
      });
  }

  loadBottles(){
    var authHeaders = localStorage.getItem('authHeaders');

    $.ajax({
      type: 'GET',
      url: env.apiDomain + '/bottles',
      headers: authHeaders
    }).done(function(data) {
      console.log(data);
    });
  }

  render() {
    return (
      <div>
        <h2>Bottles</h2>

        <form id='new-bottle'>
          <textarea className='form-bottle-content' name='bottle-content'
                 placeholder='Content of your bottle' />

          <br/>
          <button onClick={this.handleNewBottleClick}>
            New bottle
          </button>
        </form>
      </div>
    );
  }

  handleNewBottleClick(e) {
    e.preventDefault();

    var sender_id = $.auth.user.id;
    var bottle_content = $('#new-bottle .form-bottle-content').val();

    var authHeaders = localStorage.getItem('authHeaders');

    $.ajax({
      type: 'POST',
      url: env.apiDomain + '/bottles',
      headers: localStorage.getItem('authHeaders'),
      data: {
        sender_id: sender_id,
        content: bottle_content
      }
    }).done(function(data) {
      console.log(data);
    });
  }
}
