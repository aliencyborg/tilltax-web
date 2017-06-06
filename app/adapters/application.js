import JSONAPIAdapter from 'ember-data/adapters/json-api';
import ENV from 'tilltax/config/environment';

export default JSONAPIAdapter.extend({
  host: ENV.DS.host
});
