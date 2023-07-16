"use strict";
// routes.ts
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authcontroller_1 = require("./authcontroller");
const router = (0, express_1.Router)();
router.post('/login', authcontroller_1.login);
exports.default = router;
