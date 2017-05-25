import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    doRegister() {
      alert('login attempted');
    }
  }
});
