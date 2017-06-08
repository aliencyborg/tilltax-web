import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import textLines from 'tilltax/tests/helpers/text-lines';

moduleForComponent('contact-card', 'Integration | Component | contact card', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{contact-card}}`);

  let expectedLines = [
    "Contact Shelly",
    "Email",
    "Legal Name",
    "Phone Number",
    "Filing Status",
    "Individual",
    "Business",
    "Both",
    "Filing Year(s)",
    "State",
    "▼Please choose...",
    "Please choose..."
  ];

  assert.deepEqual(textLines(this.$()), expectedLines);

  // Template block usage:
  this.render(hbs`
    {{#contact-card}}
      template block text
    {{/contact-card}}
  `);

  assert.deepEqual(textLines(this.$()), expectedLines);
});
