// BACKEND

import express from 'express';
const app = express();
const PORT = 5000;




// 
app.listen(PORT, ()=> {
    console.log(`Server started at localhost ${PORT}`)
});