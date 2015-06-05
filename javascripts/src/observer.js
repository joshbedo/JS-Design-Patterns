/*
 * Observer Pattern
 */
var model = {};

Object.observe(model, function(changes) {
  console.group('Observer');
  // async callback
  changes.forEach(function(change) {
    console.log(change.type, change.name, change.oldValue);
  });
  console.groupEnd();
});

model.first_name = 'Josh';
model.last_name = 'Bedo';
model.age = 22;