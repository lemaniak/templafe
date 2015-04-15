import Ember from 'ember';
/**
 * Created by vicente on 14/04/15.
 */
export default Ember.Route.extend({
  renderTemplate: function() {
    this.render({ into: 'application' });
  }
});
