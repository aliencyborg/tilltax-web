import Ember from 'ember';

const { Route } = Ember;

export default Route.extend({
  model() {
    return this.store.createRecord('contact');
  },

  setupController(controller/*, model*/) {
    this._super(...arguments);

    const availableRegions = [
      { value: 'AL' }, { value: 'AK' }, { value: 'AZ' }, { value: 'AR' },
      { value: 'CA' }, { value: 'CO' }, { value: 'CT' }, { value: 'DC' },
      { value: 'DE' }, { value: 'FL' }, { value: 'GA' }, { value: 'HI' },
      { value: 'ID' }, { value: 'IL' }, { value: 'IN' }, { value: 'IA' },
      { value: 'KS' }, { value: 'KY' }, { value: 'LA' }, { value: 'ME' },
      { value: 'MD' }, { value: 'MA' }, { value: 'MI' }, { value: 'MN' },
      { value: 'MS' }, { value: 'MO' }, { value: 'MT' }, { value: 'NE' },
      { value: 'NV' }, { value: 'NH' }, { value: 'NJ' }, { value: 'NM' },
      { value: 'NY' }, { value: 'NC' }, { value: 'ND' }, { value: 'OH' },
      { value: 'OK' }, { value: 'OP' }, { value: 'PA' }, { value: 'RI' },
      { value: 'SC' }, { value: 'SD' }, { value: 'TN' }, { value: 'TX' },
      { value: 'UT' }, { value: 'VT' }, { value: 'VA' }, { value: 'WA' },
      { value: 'WV' }, { value: 'WI' }, { value: 'WY' }
    ];

    const availableYears = [
      { value: 2016 }, { value: 2015 }, { value: 2014 }
    ];

    controller.setProperties({ availableRegions, availableYears });
  },

  actions: {
    doContact() {
      this.get('currentModel').save()
      .then(() => {
        this.transitionTo('thanks');
      });
    }
  }
});
