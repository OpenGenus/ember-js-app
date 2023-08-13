import { module, test } from 'qunit';
import { setupTest } from 'ember-js/tests/helpers';

module('Unit | Route | my-route', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:my-route');
    assert.ok(route);
  });
});
