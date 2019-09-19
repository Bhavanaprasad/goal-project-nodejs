const dbcon = require('../db');
// Function to get all data
exports.getAllData = (callback) => {
  dbcon.db.query('SELECT * FROM goal', callback);
};

// Function to get goal by ID
exports.getDataById = (id, callback) => {
  dbcon.db.query('SELECT * FROM goal WHERE id = ?', id, callback);
};

// Function to add goal
exports.addData = (newData, callback) => {
  dbcon.db.query('INSERT INTO goal SET ?', newData, callback);
};

// Function to update data
exports.updateData = (id, updatedData, callback) => {
  dbcon.db.query('UPDATE goal SET ? WHERE id = ?', [updatedData, id], callback);
};

// Function to delete data
exports.deleteData = (id, callback) => {
  dbcon.db.query('DELETE FROM goal WHERE id = ?', id, callback);
};
