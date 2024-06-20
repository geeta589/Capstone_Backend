import express from 'express';
const router = express.Router();

router.post('/', async (req , res)=>{
    res.send('Creating new User...')
});

router.get('/', async (req , res)=>{
    const email = await register.findone({ email: req.body });

    res.send('getting User...')
});

router.delete('/', async (req , res)=>{
    res.send('Deleting User...')
});

router.put('/', async (req , res)=>{
    res.send('Updating User...')
});

export default router;