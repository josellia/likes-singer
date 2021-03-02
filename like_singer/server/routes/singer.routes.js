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

router.post("/:id", async(req, res) => {
 const idSinger = await Singer.findOne({_id: req.params.id});
 if(idSinger) {
   idSinger.likes =  idSinger.likes + 1;
   await idSinger.save();
   res.json({likes: idSinger.likes});
 }else{
   res.status(500).json({error: 'Internal error'});
 }
});

router.delete('/:id', async(req, res) => {
  const singer = await Singer.findByIdAndDelete(req.params.id);
  res.json({message: 'Singer deleted'});
});

export default router;
