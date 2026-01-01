{
  "version": 4,
  "terraform_version": "1.14.3",
  "serial": 1,
  "lineage": "5faf459e-ae5a-cfdd-5d47-d2110834651c",
  "outputs": {},
  "resources": [],
  "check_results": null
}
ubuntu@ip-172-31-23-69:~/much-to-do$ cat app.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello! Your AWS Server is working!\n');
});

// IMPORTANT: Using '0.0.0.0' allows external access
server.listen(3000, '0.0.0.0', () => {
  console.log('Server is officially running at http://your-public-ip:3000/');
});
