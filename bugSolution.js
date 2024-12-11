const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    await someAsyncOperation();
    res.send('Hello!');
  } catch (err) {
    console.error('Error:', err);
    res.status(500).send('Something went wrong!');
  }
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  const success = Math.random() < 0.5; 
  if (!success) {
    throw new Error('Something went wrong!');
  }
} 