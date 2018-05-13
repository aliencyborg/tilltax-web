import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import textLines from 'tilltax/tests/helpers/text-lines';

moduleForComponent('tt-navbar', 'Integration | Component | tt navbar', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{tt-navbar}}`);

  let expectedLines = [
    'TILL TAX',
    'Home',
    'Contact',
    'About',
    'Privacy Policy',
    'Disclaimer',
    'menu',
    'Home',
    'Contact',
    'About',
    'Privacy Policy',
    'Disclaimer'
  ];

  assert.deepEqual(textLines(this.$()), expectedLines);

  // Template block usage:
  this.render(hbs`
    {{#tt-navbar}}
      template block text
    {{/tt-navbar}}
  `);

  assert.deepEqual(textLines(this.$()), expectedLines);
});
