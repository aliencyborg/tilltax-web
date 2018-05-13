import { test } from 'qunit';
import moduleForAcceptance from 'tilltax/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | contact');

test('visiting /contact', function(assert) {
  visit('/contact');
  percySnapshot('contact page');

  andThen(function() {
    assert.equal(currentURL(), '/contact');
  });
});
