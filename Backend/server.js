const express=require('express');
const dotenv=require('dotenv');
const connectDB=require('./config/db');
const cors=require("cors");
const app=express();

// const multer=require('multer');
const path=require('path');
// const fs=require('fs');

// server static files from 'uploads' folder
app.use('/uploads',express.static(path.join(__dirname,'uploads')));
// create 'uploads' dr if it does not exist
// const uploadDir=path.join(__dirname,'uploads');
// if(!fs.existsSync(uploadDir)){ 
//     fs.mkdirSync(uploadDir,{recursive:true});
// }

//


// Load environment var from .env files
dotenv.config();

// connect to the database
connectDB();
app.use(cors());
// Middleware for parsing json
app.use(express.json());

// Define routes
const userRoutes=require('./routes/userRoutes');
app.use('/user',userRoutes);

const categoryRoutes=require('./routes/categoryRoutes');
app.use('/category',categoryRoutes);


const sliderRoutes=require('./routes/sliderRoutes');
app.use('/upload',sliderRoutes);

const productRoutes=require('./routes/productRoutes');
app.use('/product',productRoutes);

const logoRoutes=require('./routes/logoRoutes')
app.use('/logo',logoRoutes);

const contactRoutes=require('./routes/contactRoutes')
app.use('/contact',contactRoutes);


// sample route to test the api
app.get('/', (req,res)=>{
    res.send('Api is running'); 
});
// define the Port
const PORT=process.env.PORT ||3000;
// start the server
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});