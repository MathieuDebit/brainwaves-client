var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var Link = ReactRouter.Link;

var routes = (
  <Router history={browserHistory} >
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="login" component={Login} />
    </Route>
  </Router>
);

React.render(routes, document.getElementById('app'));
