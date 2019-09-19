const express = require('express');
const bodyParser = require('body-parser');
const goalService = require('./controller/goal.service');
const app = express();
const cors=require('cors')

app.use(cors({origin:true}))
const port = 3000;
// Middleware
app.use(bodyParser.json());
app.options("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.sendStatus(204);
  });
// Routes
app.get('/api/v1/goal', goalService.getAllData);
app.get('/api/v1/goal/:id', goalService.getDataById);
app.post('/api/v1/goal', goalService.addData);
app.put('/api/v1/goal/:id', goalService.updateData);
app.delete('/api/v1/goal/:id', goalService.deleteData);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
