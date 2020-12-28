import http from 'http'

http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/teste') {
    res.write("Hello world GET")
  } else {
    res.write("Hello world")
    
  }
  res.statusCode = 200
  res.end()
}).listen(8080)