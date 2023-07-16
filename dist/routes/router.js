"use strict";
// routes.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authcontroller_1 = require("../controller/authentication/authcontroller");
const AuthRouter = (0, express_1.Router)();
AuthRouter.post('/login', authcontroller_1.authController.loginHandler);
//AuthRouter.post('/signup',authController)
exports.default = AuthRouter;
