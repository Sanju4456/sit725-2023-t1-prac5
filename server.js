const express = require('express');
const path = require('path');
const { addCards, connectToDatabase } = require("./database");

const app = express();
const router = express.Router();
const port = 3000;

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



router.get('/', function(req, res) {
  // Construct the full path to the index.html file
  const filePath = path.join(__dirname, 'index.html');
});

router.post("/", async function(req, res) {
  try {
    await addCards(req.body.first_name, req.body.last_name, req.body.email, req.body.password);
    res.status(201).send("Data inserted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while inserting data");
  }
});

app.get('/api/FormDetails', (req, res) => {
  const inputData = {
    message: 'This is the input data you requested',
    data: req.query // Assuming input data is passed as query parameters
  };
  res.json(inputData);
});

app.use('/', router);

app.listen(port, async () => {
  await connectToDatabase();
  console.log(`Server running on port ${port}`);
});
