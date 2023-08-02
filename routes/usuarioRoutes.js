import express from "express";

const router = express.Router();

// Routing
router.get('/', function(req,res) {
    res.json({msg: 'Hello Express'})
});

router.get('/about-us', function(req,res) {
    res.send('Info About us')
});

export default router

