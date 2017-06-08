import DS from 'ember-data';

const { Model, attr } = DS;

export default Model.extend({
  email: attr(),
  name: attr(),
  phone: attr('phone'),

  details: attr('hash', {
    defaultValue: () => ({
      filingRegion: 'MN',
      filingStatus: '',
      filingYears: []
    })
  })
});
