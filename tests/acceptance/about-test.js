import { test } from 'qunit';
import moduleForAcceptance from 'tilltax/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | about');

test('visiting /about', function(assert) {
  visit('/about');
  percySnapshot('about page');

  andThen(function() {
    assert.equal(currentURL(), '/about');
  });
});
