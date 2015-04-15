import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  picture: DS.attr('string'),
  creation_date: DS.attr('date'),
  players: DS.hasMany('player')
});
