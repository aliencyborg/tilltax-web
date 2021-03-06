import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('auth', function() {
    this.route('login');
    this.route('register');
  });
  this.route('about');
  this.route('contact');
  this.route('thanks');
  this.route('privacy');
  this.route('disclaimer');
});

export default Router;
