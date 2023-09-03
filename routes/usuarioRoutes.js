import express from "express";
import {loginForm, registerForm, registerAction, verifyEmail, forgotPasswordForm, forgotPasswordAction, loginAction } from "../controllers/userController.js"

const router = express.Router();

// Routing
router.get('/login', loginForm);
router.post('/login', loginAction);

router.get('/register', registerForm);
router.post('/register', registerAction);

router.get('/verify-email/:token', verifyEmail);

router.get('/forgot-password', forgotPasswordForm);
router.post('/forgot-password', forgotPasswordAction);

router.get('/about-us', function(req,res) {
    res.send('Info About us')
});

export default router;

