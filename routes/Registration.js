import express from "express";
import register from "../models/Registration.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Getting User...");
});

router.post("/Registration", async (req, res) => {
  console.log(req.body);
  try {
    const user = await register.create(req.body);

    console.log(user);
   
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});

export default router;
