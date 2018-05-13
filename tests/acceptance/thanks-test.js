import { test } from 'qunit';
import moduleForAcceptance from 'tilltax/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | thanks');

test('visiting /thanks', function(assert) {
  visit('/thanks');

  andThen(function() {
    assert.equal(currentURL(), '/thanks');
  });
});
