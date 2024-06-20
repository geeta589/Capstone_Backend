// import express from 'express';
// const router = express.Router();

// router.post('/', async (req , res)=>{
//     res.send('Creating new User...')
// });

// router.get('/', async (req , res)=>{
//     const email = await register.findone({ email: req.body });

//     res.send('getting User...')
// });

// router.delete('/', async (req , res)=>{
//     res.send('Deleting User...')
// });

// router.put('/', async (req , res)=>{
//     res.send('Updating User...')
// });


import express from "express";
import Login from "../models/Login.js";
// import register from "../models/Registration.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Getting User...");
});

router.post("/Login", async (req, res) => {
  console.log(req.body);
  try {
    const userLogin = await register.create(req.body);
    console.log(userLogin);
    res.send(userLogin);
  } catch (error) {
    console.log(error);
  }
});

export default router;

// export default router;