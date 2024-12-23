```javascript
// pages/api/data.js
export default function handler(req, res) {
  // Simulate an async operation
  setTimeout(() => {
    if (req.method === 'GET') {
      res.status(200).json({ data: 'Some data' });
    } else {
      res.status(405).end(); // Method Not Allowed
    }
  }, 500); // Simulate a delay
}
```
```javascript
// components/MyComponent.jsx
import { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>My Component</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default MyComponent;
```