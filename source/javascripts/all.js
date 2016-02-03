//= require jquery
//= require react-with-addons
//= require react-router/umd/ReactRouter.min

//= require jquery-deparam
//= require jquery-cookie
//= require pubsub-js
//= require j-toker

//= require_tree ./components
//= require _init

$.auth.configure({
  apiUrl: env.apiDomain,
  storage: 'localStorage'
});
