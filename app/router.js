import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.resource('teams', function() {
    this.route('create');
    this.resource('team', {path: '/:team_id'},function(){
      this.route('edit');
    });
  });
  this.resource('players', function() {});
});

