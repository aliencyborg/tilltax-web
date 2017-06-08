import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  admin: attr('boolean'),
  email: attr()
});
