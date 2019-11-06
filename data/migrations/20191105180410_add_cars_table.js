
exports.up = function(knex) {
  return knex.schema.createTable('cars', function(table) {
    table.increments(); 

    table.string('vin', 235).notNullable();
    table.string('make', 128).notNullable();
    table.string('model', 128).notNullable();
    table.float('mileage').notNullable();
    table.string('transmission type', 235);
    table.string('title Status', 235);

    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExist('cars');
};
