import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  firstName: attr(),
  lastName: attr(),
  email: attr(),
  filingStatus: attr()
});
