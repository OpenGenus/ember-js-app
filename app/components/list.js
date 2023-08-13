import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class ListComponent extends Component {
   @service('feature-service') data;

    @action
      remove(feature) {
        this.data.remove(feature);
      }
}
