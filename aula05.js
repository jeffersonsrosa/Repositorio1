const http = require('http');
const axios = require('axios');

const PORT = 8080;

const server = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  try {
    const response = await axios.get('http://api.ipify.org/?format=json');
    const data = response.data;
    console.log('Response from API:', data);
    res.end(JSON.stringify(data));
  } catch (error) {
    console.error('Error fetching data from API:', error.message);
    res.end('Error fetching data from API');
  }
});

server.listen(PORT, () => {
  console.log('Server running at http://localhost:${PORT}/');
});