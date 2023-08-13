import { A } from '@ember/array';
import Service from '@ember/service';

export default class FeatureServiceService extends Service {
  features = A([
      'Ember CLI',
      'Components',
      'Routes',
      'Services',
      'Ember Data',
      'Ember Inspector',
    ]);

  remove(feature) {
    this.features.removeObject(feature);
  }

}
