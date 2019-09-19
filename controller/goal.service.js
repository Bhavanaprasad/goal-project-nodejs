const goalDao = require('../dao/goal.dao');

// GET all data
exports.getAllData = (req, res) => {
  goalDao.getAllData((err, results) => {
    if (err) throw err;
    res.json(results);
  });
};

// GET single data
exports.getDataById = (req, res) => {
  const id = req.params.id;
  goalDao.getDataById(id, (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
};

// POST data
exports.addData = (req, res) => {
  const newData = req.body;
  goalDao.addData(newData, (err, result) => {
    if (err) throw err;
    res.status(201).send('Data added...');
  });
};

// PUT data
exports.updateData = (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  goalDao.updateData(id, updatedData, (err, result) => {
    if (err) throw err;
    res.send('Data updated...');
  });
};

// DELETE data
exports.deleteData = (req, res) => {
  const id = req.params.id;
  goalDao.deleteData(id, (err, result) => {
    if (err) throw err;
    res.send('Data deleted...');
  });
};
