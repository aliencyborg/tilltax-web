import { test } from 'qunit';
import moduleForAcceptance from 'tilltax/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | privacy');

test('visiting /privacy', function(assert) {
  visit('/privacy');

  andThen(function() {
    assert.equal(currentURL(), '/privacy');
  });
});
