
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Zach1', password: 'password', department: 'Admin'},
        {id: 2, username: 'Zach2', password: 'password', department: 'IT'},
        {id: 3, username: 'Zach3', password: 'password', department: 'HR'}
      ]);
    });
};
