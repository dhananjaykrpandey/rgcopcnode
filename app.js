const express = require('express');
const path = require('path');
const port = 3000; 
const app = express();
var compress = require('compression');
app.use(compress()); 
 app.use(express.static(path.join(__dirname, '/')));
 app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, '/', 'index.html'));
});
 
app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, '/', 'index.html'));
});
app.get('/about', async(req, res) => {
    res.sendFile(path.join(__dirname, '/', 'about.html'));
  });
  app.get('/project', async(req, res) => {
    res.sendFile(path.join(__dirname, '/', 'project.html'));
  });
  app.get('/blog', async(req, res) => {
    res.sendFile(path.join(__dirname, '/', 'blog.html'));
  });
  app.get('/blog-single', async(req, res) => {
    
    res.sendFile(path.join(__dirname, '/', 'blog-single.html'));
  });
  app.get('/contact', async(req, res) => {
    res.sendFile(path.join(__dirname, '/', 'contact.html'));
  });

app.listen(port, () => {
    console.log(`Server running at http://:${port}/`);
  });