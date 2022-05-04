import express from 'express';
  
const app = express();
  
app.get('/',(req, res) => {
    res.send('GeeksforGeeks');
})
  
app.get('/greet',(req, res) => {
    res.send('hey there!');
})
  
const PORT = 5000;
  
app.listen(PORT,() => {
    console.log(`Running on PORT ${PORT}`);
});
