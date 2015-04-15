import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  age: DS.attr('number'),
  lastname: DS.attr('string'),
  salary: DS.attr('number'),
  birthdate: DS.attr('date'),
  status: DS.attr('string'),
  position: DS.attr('string'),
  team: DS.belongsTo('team',{async:true})
});
