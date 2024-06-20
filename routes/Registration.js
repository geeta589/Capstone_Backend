import express from "express";
import Registration from "../models/Registration.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Getting User...");
});

router.post("/Registration", async (req, res) => {
  console.log(req.body);
  try {
    const Fname = await register.create(req.body);
    const Lname = await register.create(req.body);
    const email = await register.create(req.body);
    const password = await register.create(req.body);

   
    res.send(register);
  } catch (error) {
    console.log(error);
  }
});

export default router;
