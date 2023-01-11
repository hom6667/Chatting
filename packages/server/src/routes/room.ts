import { Router } from 'express';

import Room from '../schemas/room';
import User from '../schemas/user';


const router = Router();


/* list of chattings */
router.get('/', async (req, res) => {
    try { 
        const rooms = await Room.findAll({
            include: User
        });

        res.json(rooms);
    } catch(e) {}
    });

/* Details of chatting rooms */

router.get('/:roomId', async (req, res) => {
    try { 
        const room = await Room.findOne({
            where: {
                id : Number(req.params.roomId),
            },
            include: User
        })
        res.json(room);
    } catch(e) {}
});

/* Create a new chat room */
router.post('/', async (req, res) => {
    try{
        const room = await Room.create({
            opponentID: req.body.opponentID
        });

        res.json(room);
    } catch (e) {}
});

