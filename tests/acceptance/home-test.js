import { test } from 'qunit';
import moduleForAcceptance from 'tilltax/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home');

test('visiting /home', function(assert) {
  visit('/');
  percySnapshot('home page');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
