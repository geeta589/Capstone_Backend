// import express from 'express';
// import LoginsRouter from './routes/Logins.js'
// import RegistrationRouter from './routes/Registration.js'
// const app = express();
// const PORT = process.env.PORT || 4000;
// app.use(express.json());
// app.use('/Login', LoginsRouter);
// app.use('/Registration', RegistrationRouter);
// app.get('/', (req, res) => {
//     res.send('Welcome to the API!...');
// });
// app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));




import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
const app = express()
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://geetaahirwar589:geeta123@cluster0.5irte5n.mongodb.net/RecipeUser")

app.listen(3001,()=>{
    console.log("server is running")
})