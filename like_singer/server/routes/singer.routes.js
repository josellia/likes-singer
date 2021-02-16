import { Router } from "express";
import Singer from "../models/Singer";

const router = Router();

router.get("/", async(req, res) => {
  const singers = await Singer.find();
  res.json(singers);
});

router.post("/", async (req, res) => {
  const { name, likes, status } = req.body;
  const newSinger = new Singer({ name, likes, status });
  await newSinger.save();

  res.json({ message: "Singer save" });
});

export default router;
