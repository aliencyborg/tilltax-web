import { test } from 'qunit';
import moduleForAcceptance from 'tilltax/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | disclaimer');

test('visiting /disclaimer', function(assert) {
  visit('/disclaimer');

  andThen(function() {
    assert.equal(currentURL(), '/disclaimer');
  });
});
