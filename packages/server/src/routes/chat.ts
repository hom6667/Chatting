import { Router } from 'express';

import User from "../schemas/user";
import Room from "../schemas/room";
import Chat from "../schemas/chat";

const router = Router();

/* list of chattings */
router.get("/:roomId", async (req, res) => {
    try {
      const chat = await Chat.findAll({
        where: {
          roomId: req.params.roomId,
        },
        include: [User, Room],
      });
  
      res.json(chat);
    } catch (e) {}
  });


/* Sending messages */

router.post("/:roomId", async (req, res) => {
    try {
      const chat = await Chat.create({
        // @ts-ignore
        senderId: req.session.userId,
        content: req.body.content,
        roomId: req.params.roomId,
      });
  
      /* TODO: socket connection */
  
      res.json({ message: "OK" });
    } catch (e) {}
  });
  
  export default router;