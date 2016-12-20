import DS from 'ember-data';
import ENV from 'biscuitman/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

const { JSONAPIAdapter } = DS;

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  host: ENV.DS.host,
  authorizer: 'authorizer:oauth2'
});
