"use strict";
// authController.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const app_1 = __importDefault(require("./../../app"));
class AuthController {
    constructor() {
        this.loginHandler = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password } = req.body;
                const user = yield app_1.default.findOne({ where: { email: username, password: password }, raw: true });
                if (!user) {
                    return res.status(401).json({ message: 'Invalid credentials' });
                }
                console.log("===================>", user);
                if (app_1.default.password !== password) {
                    return res.status(401).json({ message: 'Invalid credentials' });
                }
                // Handle successful login
                return res.status(200).json({ message: 'Login successful', data: user });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ message: 'Internal server error' });
            }
        });
    }
}
exports.authController = new AuthController();
