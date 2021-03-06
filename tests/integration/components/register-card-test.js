import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import textLines from 'tilltax/tests/helpers/text-lines';

moduleForComponent('register-card', 'Integration | Component | register card', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{register-card}}`);

  let expectedLines = [
    "Register with TillTax",
    "Email",
    "Password",
    "Confirm Password"
  ];

  assert.deepEqual(textLines(this.$()), expectedLines);

  // Template block usage:
  this.render(hbs`
    {{#register-card}}
      template block text
    {{/register-card}}
  `);

  assert.deepEqual(textLines(this.$()), expectedLines);
});
