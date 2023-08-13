import Route from '@ember/routing/route';

export default class MyRouteRoute extends Route {
  model() {
    return [
      'Ember CLI',
      'Components',
      'Routes',
      'Services',
      'Ember Data',
      'Ember Inspector',
    ];
  }
}
