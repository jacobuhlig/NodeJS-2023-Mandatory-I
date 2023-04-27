# Fetch

```javascript
app.get('/todo', async (req, res) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const todo = await response.json();
    res.json(todo);
  } catch (error) {
    console.error('Error fetching todo:', error);
    res.status(500).send('Error fetching todo');
  }
});
```
