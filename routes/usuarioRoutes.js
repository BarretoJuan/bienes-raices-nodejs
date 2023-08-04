import express from "express";
import {loginForm} from "../controllers/userController.js"

const router = express.Router();

// Routing
router.get('/login', loginForm);

router.get('/about-us', function(req,res) {
    res.send('Info About us')
});

export default router

