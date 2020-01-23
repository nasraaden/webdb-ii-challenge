
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          VIN: "1HGCP2F42AA033447", 
          make: "Toyota", 
          model: "Camry", 
          mileage: 5000
        },
        {
          VIN: "WB10418A2XZC88942", 
          make: "Ford", 
          model: "Escape", 
          mileage: 2550
        },
        {
          VIN: "2A4RR5DG0BR799606", 
          make: "Nissan", 
          model: "Altima", 
          mileage: 30000
        }
      ]);
    });
};
